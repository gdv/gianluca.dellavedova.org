---
layout: post
---


# Fixing permissions for Docker

The post “[Handling Permissions with Docker Volumes](https://denibertovic.com/posts/handling-permissions-with-docker-volumes/)” explains clearly the problem: when you run a docker container bound to a directory, all files are accessed/written with the UID of the docker user.

For instance, let us bind our `~/temp` directory to the `/data` directory inside the container, and create the file `/data/test` inside the container with:

```
docker run -it -v ~/temp:/data ubuntu:16.04 "touch" "/data/test"
```


Then `ls -lhF ~/temp` gives:

```
total 8,0K
-rw-r--r-- 1 root root 0 set 4 19:23 test
```

because the command `touch` has been run with `UID 0` inside the container. Usually, I want to run a container with my UID, so that running a container is undistinguishable from running any other program. The first element of the solution is the gosu package that must be installed via the Dockerfile command: `RUN apt-get update && apt-get install -y gosu`.

The second element is a trivial script gosu.sh that computes the UID and GID of the owner of the /data directory inside the container and runs the program with that UID/GID. The `gosu.sh` for our [HapCHAT](https://github.com/AlgoLab/HapCHAT) program is:

```
#!/bin/bash
# Add local user
# with the same owner as /data
USER_ID=$(stat -c %u /data)
GROUP_ID=$(stat -c %g /data)
 
echo "Starting with UID:GID $USER_ID:$GROUP_ID"
groupadd -g "$GROUP_ID" group
useradd --shell /bin/bash -u "$USER_ID" -g group -o -c "" -m user
export HOME=/
chown --recursive "$USER_ID":"$GROUP_ID" /HapCHAT
 
exec gosu user "$@"
```

Copying and running that file is achieved with the following snippet of the Dockerfile

```
COPY gosu.sh /usr/local/bin/gosu.sh
ENTRYPOINT ["/usr/local/bin/gosu.sh"]
CMD ["/usr/bin/snakemake"]
```


## TL,DR

We can run a docker container with the unprivileged permissions of our users with a simple script and a change to the Dockerfile. You can find the files at [https://github.com/AlgoLab/HapCHAT/tree/master/docker](https://github.com/AlgoLab/HapCHAT/tree/master/docker)
