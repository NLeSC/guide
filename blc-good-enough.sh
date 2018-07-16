#!/bin/bash
# usage, e.g. if you find 10 an acceptable number of broken links
# bash blc-good-enough 10

# get the maximum allowed number of broken links
broken_max="$1"

# run the link checker
node_modules/.bin/blc --recursive http://localhost:4000 > stdout.txt

# show the output
cat stdout.txt

# get the actual number of broken links
broken=$(cat stdout.txt | tail -n 2 | head -n 1 | grep --word-regexp --only-matching --extended-regexp --regexp='[0-9]{1,}' | tail -n 1)

if [ "$broken" -gt "$broken_max" ]; then
    echo "Number of broken links exceeds maximum allowed number." >&2
    exit 1
else
    echo "Number of broken links less than or equal to maximum allowed number."
    exit 0
fi
