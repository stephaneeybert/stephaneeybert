#!/bin/sh -x

# Building the project for the Git Pages project
# ng build --configuration production --base-href /stephaneeybert/pierrepapierciseaux/
# cp dist/index.html dist/404.html

cd ~/dev/github/pages/stephaneeybert
git rm -r pierrepapierciseaux/*
mkdir pierrepapierciseaux
cp -R ~/dev/js/projects/angular/pierrepapierciseaux/dist/* ./pierrepapierciseaux/

git add pierrepapierciseaux/
git commit -m "Deployed the pierrepapierciseaux application the `date +%Y-%m-%d` at `date +%H:%M`"
git pull
git push

# Open in the browser at https://stephaneeybert.github.io/stephaneeybert/pierrepapierciseaux/
