#!/bin/sh -x

cd ~/dev/github/pages/stephaneeybert

rm -fr ~/dev/github/pages/stephaneeybert/ng-zero/*

cp -R ~/dev/js/projects/angular/ng-zero/dist/* ./ng-zero/

