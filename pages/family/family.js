Component({
  options: {
    //全局样式类
    addGlobalClass: true
  },
  properties: {
    inner: {
      type: Array,
    }
  },
  data: {
    familyData: []
  },
  ready() {

    this.setData({
      familyData: this.data.inner
    })

  },
  methods: {
    bindNameInput: function (e) {
      let id1 = e.target.dataset.index; //父级下标
      this.setData({
        ['familyData[' + id1 + '].name']: e.detail.value
      })
    },
    bindRelaInput: function (e) {
      let id1 = e.target.dataset.index; //父级下标
      this.setData({
        ['familyData[' + id1 + '].relationship']: e.detail.value
      })
    },
    bindBirthday: function (e) {
      let id1 = e.target.dataset.index; //父级下标
      this.setData({
        ['familyData[' + id1 + '].birthday']: e.detail.value
      })
    },
    bindPhoneInput: function (e) {
      let id1 = e.target.dataset.index; //父级下标
      this.setData({
        ['familyData[' + id1 + '].phone']: e.detail.value
      })
    },
    bindWorkInput: function (e) {
      let id1 = e.target.dataset.index; //父级下标
      this.setData({
        ['familyData[' + id1 + '].work']: e.detail.value
      })
    },
    bindPositionInput: function (e) {
      let id1 = e.target.dataset.index; //父级下标
      this.setData({
        ['familyData[' + id1 + '].position']: e.detail.value
      })
    },
    addTeach: function () {
      //添加家庭成员
      let obj = {
        name: '', //fields.Char(string=u'姓名', required=True)
        relationship: '', //fields.Char(string=u'关系', required=True)
        birthday: '', // fields.Char(string=u'出生日期')
        phone: '', // fields.Char(string=u'联系电话', required=True)
        work: '', // fields.Char(string=u'工作单位')
        position: '' // fields.Char(string=u'任职职位')
      }
      this.setData({
        familyData: this.data.familyData.concat(obj)
      })
    },
    prevTap: function () {
      //上一步

      // detail对象，提供给事件监听函数
      var myEventDetail = {
        index: 4
      }
      // 触发事件的选项
      var myEventOption = {}
      // 使用 triggerEvent 方法触发自定义组件事件，指定事件名、detail对象和事件选项
      this.triggerEvent('parentPrevEvent', myEventDetail, myEventOption)
    },
    nextTap: function () {
      //下一步
      /* 手机格式 */
      const telephone = /^1\d{10}$/
      let flag = true
      if (this.data.familyData.length > 0) {
        for (let key of this.data.familyData) {

          if (!key.name) {
            flag = false
            wx.showToast({
              title: '请填写姓名',
              icon: 'none',
              duration: 1500,
            })
            break
          }
          if (!key.relationship) {
            flag = false
            wx.showToast({
              title: '请填写关系',
              icon: 'none',
              duration: 1500,
            })
            break
          }
          if (!key.phone) {
            flag = false
            wx.showToast({
              title: '请填写联系电话',
              icon: 'none',
              duration: 1500,
            })
            break
          }
          if(!telephone.test(key.phone)){
            flag = false
            wx.showToast({
              title: '联系电话输入错误',
              icon: 'none',
              duration: 1500,
            })
            break
          }
        }

      }
      if (!flag) {
        return
      }
      // detail对象，提供给事件监听函数
      var myEventDetail = {
        index: 6,
        type: 'familyData',
        data: this.data.familyData
      }
      // 触发事件的选项
      var myEventOption = {}
      // 使用 triggerEvent 方法触发自定义组件事件，指定事件名、detail对象和事件选项
      this.triggerEvent('parentEvent', myEventDetail, myEventOption)
    }
  }
})