/*
 * @Author: your name
 * @Date: 2021-11-06 10:48:30
 * @LastEditTime: 2021-11-10 00:07:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nativeJS-exercise\plugins\confirm.js
 */

if (!window.myPlugin) {
    window.myPlugin = {}
}
window.myPlugin.openConfirm = (function() {
    var divModal,
        divCenter,
        options,
        spanTitle,
        spanClose,
        divContent,
        btnConfirm,
        btnCancel,
        isRegEvent = false; //是否注册个过事件







    function openConfirm(opts) {
        if (typeof opts === 'string') {
            opts = {
                content: opts
            }

        }
        if (!opts) {
            opts = {}
        }
        options = opts
        initModal()
        initCenterDiv()
        regEvent()


    }

    function regEvent() {

        if (!isRegEvent) {
            isRegEvent = true
            spanClose.onclick = function() {
                divModal.style.display = 'none'
            }
            divModal.onclick = function(e) {
                if (e.target === this) {
                    divModal.style.display = 'none'
                }
            }
            btnCancel.onclick = function() {
                if (options.oncancel) {
                    options.oncancel()
                }
                divModal.style.display = 'none'
            }
            btnConfirm.onclick = function() {
                if (options.onconfirm) {
                    options.onconfirm()
                }
                divModal.style.display = 'none'
            }

        }
    }

    function initElement() {


    }


    //初始化遮罩层
    function initModal() {
        if (!divModal) {
            divModal = document.createElement('div')
            divModal.style.position = 'fixed'
            divModal.style.background = 'rgba(0,0,0,.2)'
            divModal.style.width = divModal.style.height = '100%'
            divModal.style.left = divModal.style.top = 0
            document.body.appendChild(divModal)
        }
        divModal.style.display = 'block'



    }

    //初始化中间div
    function initCenterDiv() {
        if (!divCenter) {
            divCenter = document.createElement('div')
            divCenter.style.position = 'absolute'
            divCenter.style.width = '260px'
            divCenter.style.height = '160px'
            divCenter.style.background = '#fff'
            divCenter.style.left = divCenter.style.right = divCenter.style.top = divCenter.style.bottom = 0
            divCenter.style.margin = 'auto'
            divCenter.style.fontSize = '14px'
            initCenterDivContent()

            divModal.appendChild(divCenter)
            btnConfirm = divCenter.querySelector("[data-myPlugin-id=confirm]")
            btnCancel = divCenter.querySelector("[data-myPlugin-id=cancel]")
            spanTitle = divCenter.querySelector("[data-myPlugin-id=title]")
            spanClose = divCenter.querySelector("[data-myPlugin-id=close]")
            divContent = divCenter.querySelector("[data-myPlugin-id=content]")
        }


        // 设置配置的内容
        spanTitle.innerText = options.title || "提示"
        divContent.innerText = options.content || ""

        btnConfirm.className = options.confirmClass || ''
        btnConfirm.innerText = options.confirmText || '确定'
        btnCancel.className = options.cancelClass || ''
        btnCancel.innerText = options.cancelText || '取消'




    }

    function initCenterDivContent() {
        // 创建内部标题div
        var div = document.createElement('div')
        div.style.height = '40px'
        div.style.background = '#eee'
        div.style.boxSizing = 'border-box'
        div.style.padding = '10px'
        div.innerHTML = `
        <span style="float:left" data-myPlugin-id="title">信息</span>
        <span data-myPlugin-id="close" style="float:right;cursor:pointer">
        <img style="width:20px;height:20px" src="data:image/png;base64,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">
        </span>
        `
        divCenter.appendChild(div)

        // 创建内部内容div
        div = document.createElement('div')
        div.dataset.mypluginId = 'content'
        div.style.height = '70px'
        div.style.boxSizing = 'border-box'
        div.style.padding = '20px'
        div.innerHTML = `
        确认删除吗
        `
        divCenter.appendChild(div)

        // 创建底部按钮div
        div = document.createElement('div')
        div.style.height = '50px'
        div.style.boxSizing = 'border-box'
        div.style.padding = '10px 20px'
        div.style.textAlign = 'right'
        div.innerHTML = `
        <button data-myPlugin-id="confirm">确定</button>
        <button data-myPlugin-id="cancel">取消</button>
        `
        divCenter.appendChild(div)

    }

    return openConfirm


}())