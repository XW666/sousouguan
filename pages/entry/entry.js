const app = getApp();
Page({
  data:{},
  entryCkick:function(){
    wx.navigateTo({
      url: '/pages/info/info',
    })
  }
})