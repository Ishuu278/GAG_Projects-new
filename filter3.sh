#!/bin/bash
export FILTER_BRANCH_SQUELCH_WARNING=1

git filter-branch --force --index-filter '
  find . -name "*.mp4" -exec git rm --cached --ignore-unmatch {} \;
  find . -name "*.dll.node" -exec git rm --cached --ignore-unmatch {} \;
' --prune-empty -- --all
