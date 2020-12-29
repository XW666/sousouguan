const app = getApp()
Page({

  data: {
    justImg:'',//正面
    backImg:'',//反面
    isShow:true,
    userData:{
      name:'xw',
      gender:'ddd',
      nation:'dd',
      birthday:'dd',
      card_code:'dd'
    }
  },
  nextTap:function(){
    //下一步
    this.setData({
      isShow:false
    })
    console.log('kk',this.data.isShow)
  },
  authenSave:function(){
    //确认
    wx.navigateTo({
      url: '/pages/final/final?type=auth',
    })
  },
  authenCon:function(){
 //重新上传
  },
  chooseImageJust:function(){
    var that = this;
    wx.showActionSheet({
      itemList: ['从相册中选择', '拍照'],
      itemColor: "#00000",
      success: function (res) {
        if (!res.cancel) {
          if (res.tapIndex == 0) {
            that.chooseWxImage('album')  //相册
          } else if (res.tapIndex == 1) {
            that.chooseWxImage('camera') //相机
          }
        }
      }
    })
  },
  chooseWxImage: function (type) {
    var that = this;
    
    wx.chooseImage({
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: [type], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        that.upImgs(res.tempFilePaths[0], 0) //调用上传方法
      }
    }) 
  },
  //上传服务器
  upImgs: function (imgurl, index) {
    var that = this;
    wx.uploadFile({
      url: 'https://xxxxxxxxxxxxxxxxxxxxxxxxxxxx',//
      filePath: imgurl,
      name: 'file',
      header: {
        'content-type': 'multipart/form-data'
      },
      formData: null,
      success: function (res) {
        console.log(res) //接口返回网络路径
        var data = JSON.parse(res.data)
          that.data.picPaths.push(data['msg'])
          that.setData({
            picPaths: that.data.picPaths
          })
          console.log(that.data.picPaths)
      }
    })
  },

  })