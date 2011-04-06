#!/usr/bin/perl

my @reqs=();
for $ext ('html','css') {
    for $f (`find . -name '*.'$ext`) {
        chomp $f;
        $f =~s/^\.\///;
        $f =~s/ /\\ /g;
        $f =~s/\(/\\\(/g;
        $f =~s/\)/\\\)/g;
        $g=$f.'.gz';
        print "$g: $f\n";
        print "\tgzip -c $f  > $g\n";
        push @reqs, $g;
    }
}

print ".PHONY: all\n";
print "all: ";
print join(' ', @reqs)."\n";
print "\t\n";
