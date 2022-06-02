/*
 * @Author: luoxi
 * @LastEditTime: 2022-06-02 11:19:09
 * @LastEditors: your name
 * @Description: 
 * 1.复选框的关联操作
 *  1.1 全选
 *  1.2 
 */

(function () {
  const checkAll = document.querySelector("#checkAll")
  const tbody = document.querySelector("tbody")
  const checkOneLists = tbody.querySelectorAll('input')
  const ths = document.querySelectorAll('th')
  const rows = tbody.querySelectorAll("tr")

  console.log(rows);

  const init = function () {
    console.log('程序入口');
    initEvents()
  }

  // 绑定事件的函数
  const initEvents = function () {
    checkAll.addEventListener('click', onCheckAll)
    tbody.addEventListener('click', onCheckOneLists)
    for (let i = 0; i < ths.length; i++) {
      handleThsClick(i, ths[i])
    }

  }


  // 全选按钮事件绑定函数
  const onCheckAll = function () {
    let checkStatus = this.checked;
    console.log('checkStatus', checkStatus);
    for (let i = 0; i < checkOneLists.length; i++) {
      checkOneLists[i].checked = checkStatus
    }
  }

  // tbody里的复选框（单选）事件绑定函数
  const onCheckOneLists = function (e) {
    // 事件目标获取复选框
    if (e.target.tagName !== 'INPUT') return;
    let checkNumber = 0;
    for (let i = 0; i < checkOneLists.length; i++) {
      checkOneLists[i].checked && checkNumber++;

    }
    console.log(checkNumber);
    checkAll.checked = checkNumber === checkOneLists.length;
  }

  // th 事件绑定函数
  const handleThsClick = function (index, th) {
    if (index === 0) return
    th.addEventListener('click', function () {
      console.log(index, this)
      const arr = Array.prototype.slice.apply(rows)
      arr.sort(function (a, b) {
        if (index === 2 || index === 4) {
          // 中文处理
          return a.getElementsByTagName('td')[index].innerHTML.localeCompare(b.getElementsByTagName('td')[index].innerHTML, 'zh')
        } else {
          // 数字处理
          // console.log(a.getElementsByTagName('td')[index].innerHTML);
          return a.getElementsByTagName('td')[index].innerHTML - b.getElementsByTagName('td')[index].innerHTML
        }

      })
      console.log(arr);
      // 循环已经排序完成的数组，进行插入操作
      for (let i = 0; i < arr.length; i++) {
        // appendChild 会将已经有的DOM结构从原来位置移动到容器最后面
        tbody.appendChild(arr[i])
      }

    })
    // console.log(index);
  }



  init()


})()