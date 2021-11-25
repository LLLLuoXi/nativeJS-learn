/*
 * @Author: your name
 * @Date: 2021-11-10 23:18:47
 * @LastEditTime: 2021-11-18 22:44:55
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \nativeJS-exercise\文字滚动效果\index.js
 */
var ul = document.querySelector('.left ul')
var height = 30
var curTop = 0 // 由于浏览器中的scrollTop取值不精确
    // 复制第一个li
function cloneFirstLi() {
    // 深度克隆
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
    var animate = new myPlugin.Animate({
        total: 500,
        begin: {
            top: curTop
        },
        end: {
            top: curTop + height
        },
        onmove: function() {
            curTop = this.curData.top
            ul.scrollTop = curTop

        },
        onover: function() {
            if (ul.scrollHeight - height === curTop) {
                // 滚动条回到0
                curTop = 0;
                ul.scrollTop = curTop
            }
            console.log(curTop, ul.scrollHeight, height);
        }
    })
    animate.start()

}
startScoll()














// setInterval(function() {
//     var top = ul.scrollTop // 得到目前ul滚动条的高度
//     top += 2
//     ul.scrollTop = top
// }, 30)
// test