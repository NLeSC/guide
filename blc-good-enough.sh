#!/bin/bash
# usage, e.g. if you find 10 an acceptable number of broken links
# bash blc-good-enough 10

# get the maximum allowed number of broken links
broken_max="$1"

# run the link checker
echo "travis_fold:start:blc"
echo "Checking for any broken links..."
docker run -v $PWD:/docs peterevans/liche:1.1.1 -v -t 60 -c 16 -d /docs -r /docs 2> stdout.txt
echo "travis_fold:end:blc"

# get the actual number of broken links
broken=$(grep ERROR stdout.txt | wc -l)

echo
echo "-------------------------------------------------------------------------------------------"
echo "--                             BROKEN LINK CHECKER: SUMMARY                              --"
echo "-------------------------------------------------------------------------------------------"
echo
if [ "$broken" -gt "$broken_max" ]; then
    echo "Number of broken links (${broken}) exceeds maximum allowed number (${broken_max})." >&2
    cat stdout.txt
    exit 1
else
    echo "Number of broken links (${broken}) less than or equal to maximum allowed number (${broken_max})."
    exit 0
fi

