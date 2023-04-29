#!/bin/sh

dir=".git"
if [ -d "$dir" ]; then
  echo "Set git config"
  git config --local core.autocrlf input
  git config --local user.name "Artem"
  git config --local user.email "artem23456@mail.com"
  git config user.name
  git config user.email
else
    echo "Error: current directory is not project root"
fi