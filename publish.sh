#!/bin/bash
# file: publish.sh
# FILES= ls -r *.vsix
# for f in $files 
# do
#  echo "Publishing $f" &&  npx vsce publish --packagePath $f --pat $PUBLISHTOKEN
# done

echo $PUBLISHTOKEN

find . -name '*.vsix' -type f  | while read file
do
    echo 'Publishing => ' $file
    npx vsce publish --packagePath $file  --pat $PUBLISHTOKEN 
done
