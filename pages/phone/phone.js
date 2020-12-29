//phone.js
const util = require('../../utils/util')
const app = getApp();
Page({
  data: {
    phone:'',
    phont_code:'',
    ifagain:true,//重新获取or获取
    again_sec: '获取验证码',//展示倒计时时间
    target:0,//用户点击时的时间
    now:0,//实时时间，
    remain:0,//倒计时时间
    btn:true,//获取验证码按钮控制
    loginbtn:true,//登录按钮控制
  },
   // 输入手机号
   int_phone(e){
    this.setData({
      phone:e.detail.value
    })
  },
  // 输入验证码
  int_yanzheng(e) {
    this.setData({
      phont_code: e.detail.value
    })
  },
  //3.0获取验证码
  ngetcode(){
    let that=this;
    if (this.data.btn) {
      this.setData({
        btn: false
      })
      if (!this.data.ifagain) {
        return
      }
      var reg = 11 && /^((13|14|15|16|17|18|19)[0-9]{1}\d{8})$/;
      if (!reg.test(this.data.phone)) {
        wx.showToast({
          title: '手机号错误',
          icon: 'none',
          duration: 1500,
        })
        return
      }
    
      wx.showLoading({
        title: '玩命加载中~~',
      })
      util.post({
        url: app.api + app.phoneCode,
        data: {
          phone: that.data.phone ,
        }
      }).then(res => {
       let result = JSON.parse(res.data.result)
       console.log('mm',result)
        if(result.code=='ok'){
         
          wx.hideLoading()
          that.data.now = Date.now()//获取实时时间
          that.data.remain = 60    //设置延时时间
          that.data.target = that.data.now + that.data.remain * 1000
          that.run()  //禁用获取 并倒计时
          // 显示 '重新获取' 并禁用
          this.setData({
            ifagain: !this.data.ifagain,
            btn: true
          })
        }else{
         
          wx.showToast({
            title: '发送失败',
            icon:"none"
          })
          that.setData({
            btn: true
          })
        }
      }).catch(res => {
       
        wx.hideLoading()
        wx.showToast({
          title: '网络忙，请重试',
          icon: 'none'
        })
        this.setData({
          btn: true
        })
      })
    }
  },
  //3.0绑定
  nlogin(){
    let that=this;
    if (this.data.loginbtn) {
      wx.showLoading({
        title: "绑定中~~~",
        icon: "none",
      })
      if (this.data.phone.size < 11) {
        wx.showToast({
          title: '手机号错误',
          icon: 'none',
          duration: 1500,
        })
        return
      }
      if (this.data.phont_code.length != 6) {
        wx.showToast({
          title: '验证码错误',
          icon: 'none',
          duration: 1500,
        })
        return
      }
      
      wx.navigateTo({
        url: '/pages/entry/entry',
      })
    }
  },
  //实时获取时间
  getTime(target, now) {
    let remain = parseInt((target - now) / 1000)
    return remain
  },
  //重新获取倒计时
  run() {
    this.setData({
      now : Date.now(),
      remain : this.getTime(this.data.target, this.data.now)
    })
    if (this.data.target >= this.data.now) {
      this.setData({
        again_sec: `重新获取(${this.data.remain}s)`
      })
    } else {
      this.setData({
        ifagain:true
      })
      return
    }
    setTimeout(this.run.bind(this), 1000)
  },
  // 点击获取验证码
  huoqu(){}
})