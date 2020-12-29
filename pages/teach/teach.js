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
    teachData:[]
  },
  ready(){
    
    this.setData({
      teachData:this.data.inner
    })
  
   },
   methods:{
    bindEducarInput:function(e){
      let id1 = e.target.dataset.index; //父级下标
      this.setData({
        ['teachData['+ id1+'].education']: e.detail.value
      })
    },
    bindShoolInput:function(e){
      let id1 = e.target.dataset.index; //父级下标
      this.setData({
        ['teachData['+ id1+'].graduated_school']: e.detail.value
      })
    },
    bindMajorInput:function(e){
      let id1 = e.target.dataset.index; //父级下标
      this.setData({
        ['teachData['+ id1+'].graduate_major']: e.detail.value
      })
    },
    bindGradWork:function(e){
      let id1 = e.target.dataset.index; //父级下标
      this.setData({
        ['teachData['+ id1+'].graduation_time']: e.detail.value
      })
    },
    bindWaysInput:function(e){
      let id1 = e.target.dataset.index; //父级下标
      this.setData({
        ['teachData['+ id1+'].ways_of_learning']: e.detail.value
      })
    },
    bindCertInput:function(e){
      let id1 = e.target.dataset.index; //父级下标
      this.setData({
        ['teachData['+ id1+'].certificate_number']: e.detail.value
      })
    },
    bindDegreeInput:function(e){
      let id1 = e.target.dataset.index; //父级下标
      this.setData({
        ['teachData['+ id1+'].degree_type']: e.detail.value
      })
    },
    addTeach:function(){
      //添加教育经历
      let obj= {
        education :'',//学历
        graduated_school:'',//毕业院校')
        graduate_major:'',// fields.Char(string=u'毕业专业')
        graduation_time:'',// fields.Char(string=u'毕业时间')
        ways_of_learning :'',//fields.Char(string=u'学习形式')
        certificate_number:'',// fields.Char(string=u'毕业证书编号')
        degree_type:''// fields.Char(string=u'学位类型')
      }
      this.setData({
        teachData:this.data.teachData.concat(obj)
      })
    },
    prevTap:function(){
      //上一步
    
       // detail对象，提供给事件监听函数
       var myEventDetail = {
         index:2
       }
      // 触发事件的选项
      var myEventOption = {} 
      // 使用 triggerEvent 方法触发自定义组件事件，指定事件名、detail对象和事件选项
      this.triggerEvent('parentPrevEvent', myEventDetail, myEventOption)
    },
    nextTap:function(){
      //下一步
      let flag = true
      for(let key of this.data.teachData){
      
        if(!key.education){
          flag=false
          wx.showToast({
            title: '请填写学历',
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
         index:4,
         type:'teachData',
         data:this.data.teachData
       }
      // 触发事件的选项
      var myEventOption = {} 
      // 使用 triggerEvent 方法触发自定义组件事件，指定事件名、detail对象和事件选项
      this.triggerEvent('parentEvent', myEventDetail, myEventOption)
    }
   }
})