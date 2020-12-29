Component({
  options:{
    //全局样式类
   addGlobalClass:true
  },
  properties: {
  },
  data: {
    
  },
  ready(){
   },
   methods:{
    prevTap:function(){
      //上一步
      
       // detail对象，提供给事件监听函数
       var myEventDetail = {
         index:6
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
         index:8
       }
      // 触发事件的选项
      var myEventOption = {} 
      // 使用 triggerEvent 方法触发自定义组件事件，指定事件名、detail对象和事件选项
      this.triggerEvent('parentEvent', myEventDetail, myEventOption)
    }
   }
  })