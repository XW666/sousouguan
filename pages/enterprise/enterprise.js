// pages/enterprise/enterprise.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isSeach:true,
    seachValue:'',
    enter1:[],
    enter2:[
      {
        id:1,
        name:'xwffff'
      },
      {
        id:1,
        name:'garrh'
      }
    ],
    enter3:[]
  },
  switchTap(){
    this.setData({
      isSeach:false
    })
  },
  intSeach(e){},
  closeTap(){
    this.setData({
      isSeach:true
    })
  },
  domTap(e){
    let id = e.target.dataset.id
    wx.navigateTo({
      url: '/pages/index/index?id='+id,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})