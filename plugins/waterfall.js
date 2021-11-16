/*
 * @Author: luoxi
 * @Date: 2021-11-13 12:09:56
 * @LastEditTime: 2021-11-13 16:45:16
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \nativeJS-exercise\plugins\waterfall.js
 */
if (!window.myPlugin) {
    window.myPlugin = {}
}
// 创建一个瀑布流

window.myPlugin.createWaterFall = function(option) {
    var defaultOption = {
        minGap: 10, //水平垂直方向的统一最小间隙
        // minVGap: 10, //垂直方向上的最小间隙
        imgSrcs: [], //图片路径的数组
        imgWidth: 220, // 单张图片的宽度
        container: document.body // 容器
    };
    // 混合参数
    var option = Object.assign({}, defaultOption, option)
    var imgs = [] // 存放所有图片的dom对象


    //处理父元素
    handleParent()
        //创建图片元素
    createImgs()

    // 窗口尺寸变化时间
    // 防抖 300毫秒之内没有新的变化事件运行 300ms之后运行
    var debounce = myPlugin.debounce(setImgPosition, 300)
    window.onresize = debounce
        // window.onresize = setImgPosition



    //设置每一张图片的坐标
    function setImgPosition() {
        console.log('1111')
        var info = getHorizontalInfo()
        console.log('info', info);
        var arr = new Array(info.number) // 存放每一列下一张图片的top值
        arr.fill(0)
        imgs.forEach(img => {
            //设置图片的坐标
            var minTop = Math.min.apply(null, arr)
            img.style.top = minTop + 'px'
                // 对应的列编号
            var index = arr.indexOf(minTop)
            arr[index] += img.clientHeight + info.gap

            // 横坐标
            img.style.left = index * (option.imgWidth + info.gap) + 'px'
        })

        // 设置容器高度
        var maxTop = Math.max.apply(null, arr)
        option.container.style.height = maxTop - info.gap + 'px'


    }


    // 得到图片水平方向上的信息
    function getHorizontalInfo() {
        var obj = {}
        obj.containerWidth = option.container.clientWidth
            //计算一行图片的数量
        obj.number = (obj.containerWidth + option.minGap) / (option.imgWidth + option.minGap)
        obj.number = Math.floor(obj.number)
            //计算水平空隙
        obj.gap = (obj.containerWidth - obj.number * option.imgWidth) / (obj.number - 1)
        return obj

    }

    //创建图片
    function createImgs() {
        // 30ms only run once
        var debounce = myPlugin.debounce(setImgPosition, 30)
        for (var i = 0; i < option.imgSrcs.length; i++) {
            var img = document.createElement('img')
            img.src = option.imgSrcs[i]
            img.style.width = option.imgWidth + 'px'
            img.style.position = 'absolute'
            img.style.transition = '.5s'
            imgs.push(img)
                // 异步调用
            img.onload = debounce //函数节流
            option.container.appendChild(img)
        }

    }

    // 处理父元素，父元素必须是一个定位元素
    function handleParent() {
        var style = getComputedStyle(option.container)
        if (style.position === "static") {
            option.container.style.position = 'relative'

        }

    }

}