/*
 * @Author: your name
 * @Date: 2021-10-23 12:27:11
 * @LastEditTime: 2021-10-23 12:37:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nativeJS-exercise\获取图片的宽高\index.js
 */
document.addEventListener('DOMContentLoaded', function() {
        var img = document.querySelector('img')
            // 将来某个时间 得到图片之后会直接这个回调函数 图片是异步加载 有关看 浏览器加载原理笔记
        getImgSize(img, function(size) {
            console.log('size', size);

        })

    })
    // var img = document.querySelector('img')
    // var size = getImgSize(img)
    // 加入图片十个小时加载完 getImgSize(img)早就执行结束 还是得不到图片尺寸





function getImgSize(img, callback) {
    if (img.width === 0 && img.height === 0) {
        img.onload = function() {
            callback({
                width: img.width,
                height: img.height
            })
        }
    }
}