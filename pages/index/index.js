//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    enterid:"",
  
  },
  /**
   * 生命周期函数--监听页面初次渲染完成,这个真实dom要渲染的时候，就会执行
   */
  onReady: function () {

  },
  /**
   * 生命周期函数--监听页面加载,页面如果不关闭，这个onload只执行一次
   */
  onLoad: function (option) {
  // 查看是否授权
  this.setData({
    type:option.id
  })
  let that=this;
  wx.getSetting({
    success (res){
      if (res.authSetting['scope.userInfo']) {
       
        // 已经授权，可以直接调用 getUserInfo 获取头像昵称
        wx.getUserInfo({
          success: function(res) {
            // wx.navigateTo({
            //   url: '/pages/phone/phone'
            // })
            
            app.globalData.userInfo = res.userInfo
            that.setData({
                  hasUserInfo:true,
                  userInfo:app.globalData.userInfo
                })
          }
        })
      }else{
        //未授权  去到授权页面
        wx.navigateTo({
              url: '/pages/accredit/accredit'
            })
      }
    }
  })
   
       
   
  },
  userSign(){
    wx.navigateTo({
      url: '/pages/statement/statement',
    })
  }
})
