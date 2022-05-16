#!/bin/sh -x

cd ~/dev/github/pages/stephaneeybert
git rm -r deck-statines/*
mkdir deck-statines
cp -R ~/stuff/deckjs/statines/* ./deck-statines/

git add deck-statines/
git commit -m "Deployed the deck-statines slides the `date +%Y-%m-%d` at `date +%H:%M`"
git pull
git push

echo "Open in the browser at https://stephaneeybert.github.io/stephaneeybert/deck-statines/"
