# 删除上一个版本
rm -rf dist
mkdir dist

# 构建
sh scripts/build.sh

# 压缩JavaScript
uglify -s bundle.js -o dist/bundle.js
# 压缩css
cssshrink bundle.css > dist/bundle.css
# 复制HTML和图片
cp index.html dist/index.html
cp -r images/ dist/images/

# 完成
date; echo;