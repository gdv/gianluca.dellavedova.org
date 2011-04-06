#!/bin/sh

cd /home/dellavedova/Devel/WWW/gianluca.dellavedova.org
/var/lib/gems/1.8/bin/jekyll
./deploy.pl > Makefile
make all
S=vps.dellavedova.org 
knock $S 7842 8284 9218 5216 && \
rsync -avz --progress --delete --exclude=files _site/* gianluca@vps.dellavedova.org:web/gianluca.dellavedova.org/ && \
knock $S 9000 8000 7000 5216
