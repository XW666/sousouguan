const app = getApp()
Page({

  data: {
    type:''
  },
  onLoad: function(option){
    this.setData({
      type:option.type
    })
},
  nextTap(){
    if(this.data.type == 'info'){
      wx.navigateTo({
        url: '/pages/authen/authen',
      })
    }
    if(this.data.type == 'auth'){
      wx.navigateTo({
        url: '/pages/surface/surface',
      })
    }
    
  }
  })