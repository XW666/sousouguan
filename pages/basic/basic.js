Component({
  options: {
    //全局样式类
    addGlobalClass: true
  },
  properties: {
    inner: {
      type: Object,
    }
  },
  data: {
    basicData: { //基本信息

    },
    radioItems: [{
        name: '男',
        value: '男',
        checked: false
      },
      {
        name: '女',
        value: '女',
        checked: false
      },
    ],
    indexType: 0,
    politicalIndex: '',
    array: [{
      id: 0,
      name: '省份证'
    }],
    polArry: [{
        id: 0,
        name: '团员'
      },
      {
        id: 1,
        name: '党员'
      },
      {
        id: 2,
        name: '群众'
      },
    ]
  },
  /**
   * 在组件在视图布局完成后执行
   */
  ready() {

    this.setData({
      basicData: this.data.inner
    })
    this.setRadio(this.data.inner.gender)
  },
  /**
   * 组件的方法列表
   */
  methods: {
    radioChange: function (e) {
      const checked = e.detail.value
      this.setData({
        ['basicData.gender']: checked
      })
    },
    bindPhoneInput: function (e) {
      this.setData({
        ['basicData.name']: e.detail.value
      })
    },
    bindGenderInput: function (e) {
      this.setData({
        ['basicData.gender']: e.detail.value
      })
    },
    bindCardTypeInput: function (e) {
      this.setData({
        ['basicData.card_type']: e.detail.value
      })
    },
    bindCardInput: function (e) {
      this.setData({
        ['basicData.card_code']: e.detail.value
      })
    },
    bindPolInput: function (e) {
      this.setData({
        ['basicData.political_status']: e.detail.value
      })
    },
    bindPickerChange: function (e) {
      this.setData({ //给变量赋值
        indexType: e.detail.value,
        ['basicData.card_type']: e.detail.value
      })
    },
    bindCard: function (e) {
      this.setData({
        ['basicData.id_card_validity']: e.detail.value
      })
    },
    bindBirthday: function (e) {
      this.setData({
        ['basicData.birthday']: e.detail.value
      })
    },
    bindPolChange: function (e) {

      this.setData({
        politicalIndex: e.detail.value,
        ['basicData.political_status']: e.detail.value
      })
    },
    bindNationInput: function (e) {
      this.setData({
        ['basicData.nation']: e.detail.value
      })
    },
    bindAccountInput: function (e) {
      this.setData({
        ['basicData.account_type']: e.detail.value
      })
    },
    bindResInput: function (e) {
      this.setData({
        ['basicData.residence_address']: e.detail.value
      })
    },
    bindFirstWork: function (e) {
      this.setData({
        ['basicData.first_time_to_work']: e.detail.value
      })
    },
    nextTap: function () {
      //下一步
      /* 身份证 */
      const idCard = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/
      if (!this.data.basicData.name) {
        wx.showToast({
          title: '请填写姓名',
          icon: 'none',
          duration: 1500,
        })
        return
      }
      if (!this.data.basicData.gender) {
        wx.showToast({
          title: '请选择性别',
          icon: 'none',
          duration: 1500,
        })
        return
      }
      if (!this.data.basicData.card_type) {
        wx.showToast({
          title: '请填写证件类型',
          icon: 'none',
          duration: 1500,
        })
        return
      }
      if (!this.data.basicData.card_code) {
        wx.showToast({
          title: '请填写证件号码',
          icon: 'none',
          duration: 1500,
        })
        return
      }
      if (!this.data.basicData.birthday) {
        wx.showToast({
          title: '请选择出身日期',
          icon: 'none',
          duration: 1500,
        })
        return
      }
      if (!this.data.basicData.political_status) {
        wx.showToast({
          title: '请填写政治面貌',
          icon: 'none',
          duration: 1500,
        })
        return
      }
      if (!this.data.basicData.nation) {
        wx.showToast({
          title: '请填写民族',
          icon: 'none',
          duration: 1500,
        })
        return
      }
      if (!this.data.basicData.account_type) {
        wx.showToast({
          title: '请填写户口性质',
          icon: 'none',
          duration: 1500,
        })
        return
      }
      if (!this.data.basicData.residence_address) {
        wx.showToast({
          title: '请填写户籍地址',
          icon: 'none',
          duration: 1500,
        })
        return
      }
      if (!idCard.test(this.data.basicData.card_code)) {
        wx.showToast({
          title: '省份证输入错误',
          icon: 'none',
          duration: 1500,
        })
        return
      }
      // detail对象，提供给事件监听函数
      var myEventDetail = {
        index: 2,
        type: 'basicData',
        data: this.data.basicData
      }
      // 触发事件的选项 bubbles是否冒泡，composed是否可穿越组件边界，capturePhase 是否有捕获阶段
      var myEventOption = {}
      // 使用 triggerEvent 方法触发自定义组件事件，指定事件名、detail对象和事件选项
      this.triggerEvent('parentEvent', myEventDetail, myEventOption)
    },
    setRadio: function (value) {

      const checked = value
      const changed = {}
      for (let i = 0; i < this.data.radioItems.length; i++) {
        if (checked.indexOf(this.data.radioItems[i].name) !== -1) {
          changed['radioItems[' + i + '].checked'] = true
        } else {
          changed['radioItems[' + i + '].checked'] = false
        }
      }

      this.setData(changed)
    }
  }
})