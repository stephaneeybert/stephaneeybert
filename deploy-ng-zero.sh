#!/bin/sh -x

# Building the project for the Git Pages project
# ng build --prod --base-href /stephaneeybert/ng-zero/

cd ~/dev/github/pages/stephaneeybert

git rm -r ng-zero/*

cp -R ~/dev/js/projects/angular/ng-zero/dist/* ./ng-zero/

git add ng-zero/

git commit -m "Deployed the ng-zero application the `date +%Y-%m-%d` at `date +%H:%M`"

git pull

git push
