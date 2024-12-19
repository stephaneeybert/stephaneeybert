#!/bin/sh -x

cd ~/dev/github/pages/stephaneeybert
git rm -r sunheating/*
mkdir sunheating
cp -R ~/trash/sun-heating-* ./sunheating/

git add sunheating/
git commit -m "Deployed the sunheating images the `date +%Y-%m-%d` at `date +%H:%M`"
git pull
git push

echo "Open in the browser at https://stephaneeybert.github.io/stephaneeybert/sunheating/"
