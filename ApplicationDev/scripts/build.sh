# 转换 js
babel --presets react,es2015 js/source -d js/build
# 打包 js
browserify js/build/app.js -o bundle.js
# 打包 CSS
cat css/*/*.css | sed 's/..\/..\/images/images/g' > bundle.css
# 完成
date; echo;