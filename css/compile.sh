#!/bin/bash

DIR_NAME=$(dirname $(readlink -f $0))

INPUT="$DIR_NAME/less/style.less"
OUTPUT="$DIR_NAME/style.css"
DIR="$DIR_NAME/less"

printf "watching  $DIR\n"
printf "input     $INPUT\n"
printf "output    $OUTPUT\n"

# https://github.com/jccovey/watch-lessc
# -d is not working
watch-lessc -i $INPUT -o $OUTPUT -d $DIR
