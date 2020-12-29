const app = getApp()
Page({
  data: {
    checkIndex:1,//当前索引
    basicData:{ //基本信息
      name:'',
      gender:'',
      card_type:'',//证件类型
      card_code:'',//证件号码
      id_card_validity:'',//身份证有效期
      birthday:'',//出生日期
      political_status:'',//政治面貌
      nation:'',//民族
      account_type:'',//户口性质
      residence_address:'',//户籍地址
      first_time_to_work:''//首次参加工作时间
    },
    contactData:{
      //联系信息
      phone:'',
      personal_email:'', //个人邮箱
      work_emil:'',//工作邮箱
      current_address:''//现居地址
    },
    teachData:[
      //教育经历
      {
        education :'',//学历
        graduated_school:'',//毕业院校')
        graduate_major:'',// fields.Char(string=u'毕业专业')
        graduation_time:'',// fields.Char(string=u'毕业时间')
        ways_of_learning :'',//fields.Char(string=u'学习形式')
        certificate_number:'',// fields.Char(string=u'毕业证书编号')
        degree_type:''// fields.Char(string=u'学位类型')
      }
    ],
    workData:[
      //工作经历
      {
        // work_experience_id:'',// fields.Many2one('staff.management')
        employer :'',//fields.Date(string=u'工作单位名称', required=True)
        position:'' ,//fields.Date(string=u'职务')
        start_date:'',//fields.Char(string=u'工作开始时间')
        end_date:'',// fields.Char(string=u'工作结束时间')
        witness:'',// fields.Char(string=u'证明人')
        phone:'',// fields.Char(string=u'证明人联系电话')
        reasons_leaving :''// fields.Char(string=u'离职原因')
      }
    ],
    familyData:[
      //家庭成员
      // {
      //   name:'',//fields.Char(string=u'姓名', required=True)
      //   relationship :'',//fields.Char(string=u'关系', required=True)
      //   birthday:'',// fields.Char(string=u'出生日期')
      //   phone:'',// fields.Char(string=u'联系电话', required=True)
      //   work :'',// fields.Char(string=u'工作单位')
      //   position:''// fields.Char(string=u'任职职位')
      // }
    ],
    wagesData:{
      //工资卡
      payroll_card_number:'',//fields.Char(string='工资卡卡号', required=True)
      account_city:'',// fields.Char(string='工资卡开户城市', required=True)
      account_bank:''// fields.Char(string='工资卡开户行', required=True)
    }
  },
  onParentEventNext:function(e){
    
    let index = e.detail.index;
    let data = e.detail.data
    let type = e.detail.type
    if(index == 9){
      wx.navigateTo({
        url: '/pages/final/final?type=info',
      })
      return
    }
    this.setData({
      checkIndex:index
    })
    if(type){
      this.setData({
        [type]:data
      })
    }
   
   
  },
  onParentPrevEvent:function(e){
    
    let index = e.detail.index;
    this.setData({
      checkIndex:index
    })
  }
})