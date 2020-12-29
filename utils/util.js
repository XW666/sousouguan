const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
const token = function () {//token封装
  if (wx.getStorageSync('_USERINFO')) {
    return wx.getStorageSync('_USERINFO').accessToken
  } else {
    return '';
  }
}
const request = (url, options) => { //请求封装
  return new Promise((resolve, reject) => {
    // if (token()) {
    //   var header = {
    //     'Authorization': 'Bearer ' + token(),
    //   }
    // } else {
      var header = {
        'Content-Type': 'application/json'
      }
    // }
    wx.request({
      url:url.url,
      method: options.method,
      data: url.data,
      header: header,
      success(request) {
        console.log('kk',request)
        resolve(request)
      },
      fail(error) {
        reject(error)
      }
    })
  })
}
const gets = (url, options) => {//get请求
  return request(url, {
    method: 'GET'
  })
}
const post = (url, options) => {//post请求
  return request(url, {
    method: 'POST'
  })
}
module.exports = {
  formatTime: formatTime,
  request,
  gets,
  post,
}
