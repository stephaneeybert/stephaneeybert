#!/bin/sh -x

# Building the project for the Git Pages project
# ng build --base-href /stephaneeybert/musicng/

cd ~/dev/github/pages/stephaneeybert
git rm -r musicng/*
mkdir musicng
cp -R ~/dev/js/projects/angular/musicng/dist/* ./musicng/

git add musicng/
git commit -m "Deployed the musicng application the `date +%Y-%m-%d` at `date +%H:%M`"
git pull
git push
