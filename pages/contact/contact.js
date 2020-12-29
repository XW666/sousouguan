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
    contactData:{
      //联系信息
  
    },
  },
  ready(){
    
    this.setData({
      contactData:this.data.inner
    })
    
   },
  methods:{
    bindPerEmailInput:function(e){
      this.setData({
        ['contactData.personal_email']: e.detail.value
      })
    },
    bindWorkEmailInput:function(e){
      this.setData({
        ['contactData.work_emil']: e.detail.value
      })
    },
    bindCurAddressInput:function(e){
      this.setData({
        ['contactData.current_address']: e.detail.value
      })
    },
    prevTap:function(){
      //上一步
      console.log('lkkkk')
       // detail对象，提供给事件监听函数
       var myEventDetail = {
         index:1
       }
      // 触发事件的选项
      var myEventOption = {} 
      // 使用 triggerEvent 方法触发自定义组件事件，指定事件名、detail对象和事件选项
      this.triggerEvent('parentPrevEvent', myEventDetail, myEventOption)
    },
    nextTap:function(){
      //下一步
       // detail对象，提供给事件监听函数
       var myEventDetail = {
         index:3,
         type:'contactData',
         data:this.data.contactData
       }
      // 触发事件的选项
      var myEventOption = {} 
      // 使用 triggerEvent 方法触发自定义组件事件，指定事件名、detail对象和事件选项
      this.triggerEvent('parentEvent', myEventDetail, myEventOption)
    }
  }
})