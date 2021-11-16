/*
 * @Author: your name
 * @Date: 2021-11-10 23:18:47
 * @LastEditTime: 2021-11-10 23:42:28
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \nativeJS-exercise\文字滚动效果\index.js
 */
var ul = document.querySelector('.left ul')
    // 复制第一个li
function cloneFirstLi() {
    var firstLi = ul.children[0].cloneNode(true)
    ul.appendChild(firstLi)
}

cloneFirstLi()

// 开始滚动
function startScoll() {
    setInterval(scroll, 2000)
}

//滚动一次
function scroll() {
    console.log('111');

}
startScoll()














// setInterval(function() {
//     var top = ul.scrollTop // 得到目前ul滚动条的高度
//     top += 2
//     ul.scrollTop = top
// }, 30)