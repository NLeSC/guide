#!/usr/bin/env bash

BASE_BRANCH='master'
GITBOOK_LOCATION='http://localhost:4000'

git fetch origin refs/heads/$BASE_BRANCH:refs/remotes/origin/$BASE_BRANCH
BASE_BRANCH_SHA=`git rev-parse origin/$BASE_BRANCH`
# If the git diff result below is something like:
# readme.md
# readme.txt
# dir/readme.txt
# dir/readme.md
# dir/anotherdir/readme.md
# dir/anotherdir/readme.txt
# dir.md/anotherdir/readme.md
# dir.md/anotherdir/readme.txt
#
# the grepping should filter it down to
# dir/readme.md
# dir/anotherdir/readme.md
# dir.md/anotherdir/readme.md
git diff --name-only $BASE_BRANCH_SHA | grep --regexp="\.md$" | grep --regexp="^.*/" > changed-files.txt

if [ `cat changed-files.txt | wc -l` -ge 0 ]; then
    echo "There are no GitBook MarkDown files to check."
else
    echo "These files need to be checked:"
    cat changed-files.txt
fi

EXIT_CODE=0
# read an individual line from the changed-files.txt file
while read line;
do 
    # Use awk to find and replace the filename extension .md with .html,
    # concatenate with the gitbook server location, feed that to
    # broken-link-checker via its 'input' argument
    blc --input `echo $GITBOOK_LOCATION/$line | awk '{ gsub(".md$",".html",$1); print $1 }'`;
    # Take note of the success or failure of the blc command.
    if [ $? -ne 0 ]; then
        EXIT_CODE=1
    fi
done < changed-files.txt

# If any failures have occurred during the above while loop, exit with a failure
# code (1), otherwise, exit with a success code (0).
exit $EXIT_CODE
