/*
 * @Author: your name
 * @Date: 2021-08-29 11:53:07
 * @LastEditTime: 2021-09-01 23:39:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nativeJS-exercise\函数\MyFunctions.js
 */

/**
 * 判断一个数是不是奇数
 * @param {number} n 要判断的数字
 * @returns {boolean}
 */
function isOdd(n) {
    return n % 2 !== 0;
}

/**
 * @description: 判断一个数是不是素数
 * @param {*} n
 * @return {*}
 */

function isPrime(n) {
    if (n < 2) {
        return false
    }
    //2到n-1之间
    for (var i = 2; i < n; i++) {
        if (n % i === 0) {
            return false
        }
    }

    return true
}

/**
 * @description: 用于数组求和
 * @param {*} arr
 * @return {*}
 */
function sumOfArray(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}

/**
 * @description: 求数组的最大值
 * @param {*} arr
 * @return {*}
 */
function maxOfArr(arr) {
    if (arr.length === 0) {
        return
    }
    var max = arr[0]
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max

}

/**
 * @description: 求数组的最小值
 * @param {*} arr
 * @return {*}
 */
function minOfArr(arr) {
    if (arr.length === 0) {
        return
    }
    var min = arr[0]
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
        }
    }
    return min
}

/**
 * @description: 判断数组是否是稀松数组
 * @param {*} arr
 * @return {*}
 */
function haEmptyInArray(arr) {
    //稀松数组的特点：下标连续
    for (var i = 0; i < arr.length; i++) {
        if (!(i in arr)) {
            return true
        }
    }
    return false
}

/**
 * @description: 判断某年是否是闰年
 * @param {*} year
 * @return {*} boolean
 */
function isLeap(year) {
    return year % 4 === 0 & year % 100 !== 0 & year % 400 === 0
}

/**
 * 得到某年某月的天数
 * @param {*} year 
 * @param {*} month 
 */
function getDays(year, month) {
    if (month === 2) {
        return isLeap(year) ? 29 : 28;
    } else if (month < 8 && isOdd(month) || month >= 8 && !isOdd(month)) {
        return 31;
    } else {
        return 30;
    }
}

/**
 * 得到数组中出现频率最高的数字和频率
 * 返回一个对象
 * @param {*} arr 
 */
function getTopFreqInArray(arr) {
    var records = {}; //记录出现频率
    for (var i = 0; i < arr.length; i++) {
        var n = arr[i];
        if (records[n]) {
            records[n]++;
        } else {
            records[n] = 1;
        }
    }
    console.log('records', records);
    // var result; //记录最终结果的对象
    // for (var prop in records) {
    //     if (!result || records[prop] > result.frequency) {
    //         result = {
    //             number: +prop,
    //             frequency: records[prop]
    //         };
    //     }
    // }
    // return result;
}

getTopFreqInArray([1, 1, 1, 1, 2, 2, 2, 2, 3, 3])