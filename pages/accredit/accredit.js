//accredit.js
var utils = require('../../utils/util.js');
//获取应用实例
const app = getApp()

Page({
  data: {
      //判断小程序的API，回调，参数，组件等是否在当前版本可用。
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    hasUserInfo: false,
    isHide:false,
    titList:['合同、文件在线签署','薪资查询','靠勤打卡','企业通知'],
    items: [
      {value: 'CHN', name: '我以阅读并同意', checked:false}
    ],
    souquan:''
  },

  onLoad: function () {
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          wx.navigateTo({
            url: `/pages/index/index`,
          })
        }
      })

  },
  getUserInfo: function(e) {
    if (e.detail.userInfo) {
      //用户按了允许授权按钮
      wx.navigateTo({
        url: `/pages/phone/phone`,
      })
    }else{
 //用户按了拒绝按钮
    }
  },
  init:function(){
    // let that=this;
    // wx.showLoading({
    //   title: '加载中',
    //   icon:"none"
    // })
    // wx.login({
    //   success(res) {
        // console.log('kk',res)
        wx.navigateTo({
          url: `/pages/phone/phone`,
        })
        // utils.post({
        //   url: app.accredit + 'wxapi/miniProgramAuth',
        //   data:{
        //     code: res.code,
        //     appId: app.appId
        //   }
        // }).then(res=>{
          
        //   let arr = that.data.souquan;
        //   arr.openid = res.data.Result.openid;
        //   that.setData({
        //     souquan:arr
        //   })
          
          
        // })
      // }
    // })
  },
  checkboxChange:function(e){
    //是否勾选了用户协议
    let values = e.detail.value
    if(values.length > 0){
      this.setData({
        isHide:true
      })
    }else{
      this.setData({
        isHide:false
      })
    }
  },
  getUser:function(){
    //提示请先勾选用户协议
     if(!this.data.isHide){
      wx.showToast({
        title: '请先勾选用户协议',  
        icon: 'none',   
        duration: 1500  
    })
     }
  }
})
