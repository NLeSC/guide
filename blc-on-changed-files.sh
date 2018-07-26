#!/usr/bin/env bash

BASE_BRANCH='master'
CURRENT_BRANCH=`git rev-parse --abbrev-ref HEAD`
GITBOOK_LOCATION='http://localhost:4000'

git diff --name-only $BASE_BRANCH...$CURRENT_BRANCH > changed-files.txt

EXIT_CODE=0
while read line;
do 
    blc --input `echo $GITBOOK_LOCATION/$line | awk '{ gsub(".md$",".html",$1); print $1 }'`;
    if [ $? -ne 0 ]; then
        EXIT_CODE=1
    fi
done < changed-files.txt

exit $EXIT_CODE
