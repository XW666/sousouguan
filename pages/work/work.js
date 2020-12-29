Component({
  options:{
    //全局样式类
   addGlobalClass:true
  },
  properties: {
    inner: {
      type: Array,
    }
  },
  data: {
    workData:[]
  },
  ready(){
    
    this.setData({
      workData:this.data.inner
    })
    
   },
   methods:{
    bindEmployerInput:function(e){
      let id1 = e.target.dataset.index; //父级下标
      this.setData({
        ['workData['+ id1+'].employer']: e.detail.value
      })
    },
    bindPositionInput:function(e){
      let id1 = e.target.dataset.index; //父级下标
      this.setData({
        ['workData['+ id1+'].position']: e.detail.value
      })
    },
    bindStartDate:function(e){
      let id1 = e.target.dataset.index; //父级下标
      this.setData({
        ['workData['+ id1+'].start_date']: e.detail.value
      })
    },
    bindEndDate:function(e){
      let id1 = e.target.dataset.index; //父级下标
      this.setData({
        ['workData['+ id1+'].end_date']: e.detail.value
      })
    },
    bindWitInput:function(e){
      let id1 = e.target.dataset.index; //父级下标
      this.setData({
        ['workData['+ id1+'].witness']: e.detail.value
      })
    },
    bindPhoneInput:function(e){
      let id1 = e.target.dataset.index; //父级下标
      this.setData({
        ['workData['+ id1+'].phone']: e.detail.value
      })
    },
    bindTextReasons:function(e){
      let id1 = e.target.dataset.index; //父级下标
      this.setData({
        ['workData['+ id1+'].reasons_leaving']: e.detail.value
      })
    },
    addTeach:function(){
      //添加工作经历
      let obj= {
        employer :'',//fields.Date(string=u'工作单位名称', required=True)
        position:'' ,//fields.Date(string=u'职务')
        start_date:'',//fields.Char(string=u'工作开始时间')
        end_date:'',// fields.Char(string=u'工作结束时间')
        witness:'',// fields.Char(string=u'证明人')
        phone:'',// fields.Char(string=u'证明人联系电话')
        reasons_leaving :''// fields.Char(string=u'离职原因')
      }
      this.setData({
        workData:this.data.workData.concat(obj)
      })
    },
    prevTap:function(){
      //上一步
      
       // detail对象，提供给事件监听函数
       var myEventDetail = {
         index:3
       }
      // 触发事件的选项
      var myEventOption = {} 
      // 使用 triggerEvent 方法触发自定义组件事件，指定事件名、detail对象和事件选项
      this.triggerEvent('parentPrevEvent', myEventDetail, myEventOption)
    },
    nextTap:function(){
      //下一步
      let flag = true
      for(let key of this.data.workData){
      
        if(!key.employer){
          flag=false
          wx.showToast({
            title: '请填写工作单位名称',
            icon: 'none',
            duration: 1500,
          })
          break
        }
      }
      if(!flag){
        return
      }
       // detail对象，提供给事件监听函数
       var myEventDetail = {
         index:5,
         type:'workData',
         data:this.data.workData
       }
      // 触发事件的选项
      var myEventOption = {} 
      // 使用 triggerEvent 方法触发自定义组件事件，指定事件名、detail对象和事件选项
      this.triggerEvent('parentEvent', myEventDetail, myEventOption)
    }
   }
})