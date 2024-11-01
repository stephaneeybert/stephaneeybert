#!/bin/sh -x

# Building the project for the Git Pages project
# ng build --configuration production --base-href /stephaneeybert/musicng/
# cp dist/musicng/index.html dist/musicng/404.html

cd ~/dev/github/pages/stephaneeybert
git rm -r musicng/*
mkdir musicng
cp -R ~/dev/js/projects/angular/musicng/dist/musicng/* ./musicng/

git add musicng/
git commit -m "Deployed the musicng application the `date +%Y-%m-%d` at `date +%H:%M`"
git pull
git push

# Open in the browser at https://stephaneeybert.github.io/stephaneeybert/musicng/
