Component({
  options:{
    //全局样式类
   addGlobalClass:true
  },
  properties: {
    inner: {
      type: Object,
    }
  },
  data: {
    wagesData:{}
  },
  ready(){
    
    this.setData({
      wagesData:this.data.inner
    })
    
   },
   methods:{
    bindPayInput:function(e){
      this.setData({
        ['wagesData.payroll_card_number']: e.detail.value
      })
    },
    bindCityInput:function(e){
      this.setData({
        ['wagesData.account_city']: e.detail.value
      })
    },
    bindBankInput:function(e){
      this.setData({
        ['wagesData.account_bank']: e.detail.value
      })
    },
    prevTap:function(){
      //上一步
      
       // detail对象，提供给事件监听函数
       var myEventDetail = {
         index:5
       }
      // 触发事件的选项
      var myEventOption = {} 
      // 使用 triggerEvent 方法触发自定义组件事件，指定事件名、detail对象和事件选项
      this.triggerEvent('parentPrevEvent', myEventDetail, myEventOption)
    },
    nextTap:function(){
      //下一步
      if(!this.data.wagesData.payroll_card_number){
        wx.showToast({
          title: '请填写工资卡号',
          icon: 'none',
          duration: 1500,
        })
       return
      }
      if(!this.data.wagesData.account_city){
        wx.showToast({
          title: '请填写开户城市',
          icon: 'none',
          duration: 1500,
        })
       return
      }
      if(!this.data.wagesData.account_bank){
        wx.showToast({
          title: '请填写开户行',
          icon: 'none',
          duration: 1500,
        })
       return
      }
       // detail对象，提供给事件监听函数
       var myEventDetail = {
         index:7,
         type:'wagesData',
         data:this.data.wagesData
       }
      // 触发事件的选项
      var myEventOption = {} 
      // 使用 triggerEvent 方法触发自定义组件事件，指定事件名、detail对象和事件选项
      this.triggerEvent('parentEvent', myEventDetail, myEventOption)
    }
   }
  })