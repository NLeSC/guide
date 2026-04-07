#!/bin/bash
# Replaces local file URLs of the form "(/language_guides/javascript.md?id=debugging)" with "(/language_guides/javascript.md)",
# i.e. it removes the trailing "?id=..." so that lychee (the link checker) can find those files.
# This requires that all local links do include the ".md" extension.
# This currently fails silently, seemingly having to do with the paths of the files being checked
sed --regexp-extended 's/\(([^)]*\.md)\?id=[^)]+\)/(\1)/'
