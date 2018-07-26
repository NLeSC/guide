#!/usr/bin/env bash

BASE_BRANCH='master'
CURRENT_BRANCH=`git rev-parse --abbrev-ref HEAD`
GITBOOK_LOCATION='http://localhost:4000'

echo "TRAVIS_BRANCH=$TRAVIS_BRANCH"
echo "TRAVIS_PULL_REQUEST_SHA=$TRAVIS_PULL_REQUEST_SHA"
echo "TRAVIS_PULL_REQUEST_BRANCH=$TRAVIS_PULL_REQUEST_BRANCH"

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
git diff --name-only $BASE_BRANCH | grep --regexp="\.md$" | grep --regexp="^.*/" > changed-files.txt

echo "These are changed files:"
cat changed-files.txt

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
