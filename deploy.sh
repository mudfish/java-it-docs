#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 提交代码
git add -A
git commit -m 'deploy'
git pull

# 提交到man分支
git push origin main