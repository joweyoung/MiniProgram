var loanRate=4.9;
var loanRateG=3.25;
Page({
  data: {
    sydk:true,
    sydklx:false,

    gjjdk:false,
    gjjdklx:false,

    zhdk:false,
    zhdklx:false,

    houseSum:0,
    houseSumGjj:0,
    houseSumZh:0,

    loanSum:0,
    loanSumGjj:0,
    loanSumZh:0,
    loanSumZhGjj:0,
    loanSumZhSy:0,

    array: [
      {
        name: '按贷款总额',
        type: 0
      },
      {
        name: '按房价总额',
        type: 1
      }
    ],
    index: 0,
    indexGjj:0,
    indexZh:0,

    arrayLoanYear: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
    indexLoanYear:29,
    indexLoanYearGjj: 29,
    indexLoanYearZh: 29,

    arrayLoanRatio: [ 2, 3, 4, 5, 6, 7, 8],
    indexLoanRatio: 0,
    indexLoanRatioGjj:0,
    indexLoanRatioZh:0,

    arrayLoanRate: [{
      value: 1,
      name: '最新基准利率' + '(' + loanRate + '%)'
    },
    {
      value: 0.7,
      name: '最新基准利率7折' + '(' + (0.7 * loanRate).toFixed(2) + '%)'
    },
    {
      value: 0.75,
      name: '最新基准利率7.5折' + '(' + (0.75 * loanRate).toFixed(2) + '%)'
    },
    {
      value: 0.8,
      name: '最新基准利率8折' + '(' + (0.8 * loanRate).toFixed(2) + '%)'
    },
    {
      value: 0.85,
      name: '最新基准利率8.5折' + '(' + (0.85 * loanRate).toFixed(2) + '%)'
    },
    {
      value: 0.9,
      name: '最新基准利率9折' + '(' + (0.9 * loanRate).toFixed(2) + '%)'
    },
    {
      value: 0.95,
      name: '最新基准利率9.5折' + '(' + (0.95 * loanRate).toFixed(2) + '%)'
    },
    {
      value: 1.05,
      name: '最新基准利率1.05倍' + '(' + (1.05 * loanRate).toFixed(2) + '%)'
    },
    {
      value: 1.1,
      name: '最新基准利率1.1倍' + '(' + (1.1 * loanRate).toFixed(2) + '%)'
    },
    {
      value: 1.2,
      name: '最新基准利率1.2倍' + '(' + (1.2 * loanRate).toFixed(2) + '%)'
    },
    {
      value: 1.3,
      name: '最新基准利率1.3倍' + '(' + (1.3 * loanRate).toFixed(2) + '%)'
    }],
    indexLoanRate: 0,
    indexLoanRateZhSy:0,
    arrayLoanRateGjj: [{
      value: 1,
      name: '最新基准利率' + '(' + loanRateG + '%)'
    },
    {
      value: 0.7,
      name: '最新基准利率7折' + '(' + (0.7 * loanRateG).toFixed(2) + '%)'
    },
    {
      value: 0.75,
      name: '最新基准利率7.5折' + '(' + (0.75 * loanRateG).toFixed(2) + '%)'
    },
    {
      value: 0.8,
      name: '最新基准利率8折' + '(' + (0.8 * loanRateG).toFixed(2) + '%)'
    },
    {
      value: 0.85,
      name: '最新基准利率8.5折' + '(' + (0.85 * loanRateG).toFixed(2) + '%)'
    },
    {
      value: 0.9,
      name: '最新基准利率9折' + '(' + (0.9 * loanRateG).toFixed(2) + '%)'
    },
    {
      value: 0.95,
      name: '最新基准利率9.5折' + '(' + (0.95 * loanRateG).toFixed(2) + '%)'
    },
    {
      value: 1.05,
      name: '最新基准利率1.05倍' + '(' + (1.05 * loanRateG).toFixed(2) + '%)'
    },
    {
      value: 1.1,
      name: '最新基准利率1.1倍' + '(' + (1.1 * loanRateG).toFixed(2) + '%)'
    },
    {
      value: 1.2,
      name: '最新基准利率1.2倍' + '(' + (1.2 * loanRateG).toFixed(2) + '%)'
    },
    {
      value: 1.3,
      name: '最新基准利率1.3倍' + '(' + (1.3 * loanRateG).toFixed(2) + '%)'
    }],
    indexLoanRateGjj: 0,
    indexLoanRateZhGjj:0
  },
  sydk:function(e){
    this.setData({
      sydk: true,
      gjjdk: false,
      zhdk: false
    })
  },
  gjjdk: function (e) {
    this.setData({
      sydk: false,
      gjjdk: true,
      zhdk: false
    })
  },
  zhdk: function (e) {
    this.setData({
      sydk: false,
      gjjdk: false,
       zhdk: true
    })
  },
  bindPickerChange: function (e) {
    if (e.detail.value == 0){
      this.sydklx = false
    }else{
      this.sydklx = true
    }
    this.setData({
      sydklx: this.sydklx,
      index: e.detail.value
    })
  },
  gjjPickerChange:function(e){
    if(e.detail.value == 0){
      this.gjjdklx = false
    }else{
      this.gjjdklx = true
    }
    this.setData({
      gjjdklx: this.gjjdklx,
      indexGjj: e.detail.value
    })
  },
  zhPickerChange:function(e){
    if (e.detail.value == 0) {
      this.zhdklx = false
    } else {
      this.zhdklx = true
    }
    this.setData({
      zhdklx: this.zhdklx,
      indexZh: e.detail.value
    })
  },
  loanYear:function(e){
    this.setData({
      indexLoanYear: e.detail.value
    })
  },
  loanYearGjj:function(e){
    this.setData({
      indexLoanYearGjj: e.detail.value
    })
  },
  loanYearZh:function(e){
    this.setData({
      indexLoanYearZh: e.detail.value
    })
  },
  loanRatio:function(e){
    this.setData({
      indexLoanRatio: e.detail.value   
    })
    var radio = (Number(this.data.indexLoanRatio) + 2) / 10
    this.setData({
      loanSum: (Number(this.data.houseSum) * radio).toFixed(1)
    })
  },
  loanRatioGjj:function(e){
    this.setData({
      indexLoanRatioGjj: e.detail.value
    })
    var radio = (Number(this.data.indexLoanRatioGjj) + 2) / 10
    this.setData({
      loanSumGjj: (Number(this.data.houseSumGjj) * radio).toFixed(1)
    })
  },
  loanRatioZh:function(e){
    this.setData({
      indexLoanRatioZh: e.detail.value
    })
    var radio = (Number(this.data.indexLoanRatioZh) + 2) / 10
    this.setData({
      loanSumZh: (Number(this.data.houseSumZh) * radio).toFixed(1)
    })
  },
  loanRate: function (e) {
    this.setData({
      indexLoanRate: e.detail.value
    })
  },
  loanRateGjj:function(e){
    this.setData({
      indexLoanRateGjj: e.detail.value
    })
  },
  loanRateZhGjj:function(e){
    this.setData({
      indexLoanRateZhGjj: e.detail.value
    })
  },
  loanRateZhSy:function(e){
    this.setData({
      indexLoanRateZhSy: e.detail.value
    })
  },
  phoneCall:function(e){
    wx.makePhoneCall({
      phoneNumber: '4001391359' 
    })
  },
  loanSumChange:function(e){
    this.setData({
      loanSum: e.detail.value 
    })
  },
  loanSumChangeGjj:function(e){
    this.setData({
      loanSumGjj: e.detail.value
    })
  },
  houseSumChange:function(e){
    var radio = (Number(this.data.indexLoanRatio) + 2) / 10
    this.setData({
      loanSum: (e.detail.value * radio).toFixed(1),
      houseSum: e.detail.value
    })
  },
  houseSumChangeGjj:function(e){
    var radio = (Number(this.data.indexLoanRatioGjj) + 2) / 10
    this.setData({
      loanSumGjj: (e.detail.value * radio).toFixed(1),
      houseSumGjj: e.detail.value
    })
  },
  houseSumChangeZh:function(e){
    var radio = (Number(this.data.indexLoanRatioZh) + 2) / 10
    this.setData({    
      loanSumZh: (e.detail.value * radio).toFixed(1),
      houseSumZh: e.detail.value
    })
  },
  zhLoanChange:function(e){
    this.setData({
      loanSumZh:e.detail.value
    })
  },
  zhGjjLoanChange:function(e){    
    this.setData({
      loanSumZhSy: (Number(this.data.loanSumZh -e.detail.value)).toFixed(1),
      loanSumZhGjj:e.detail.value
    })
  },
  // 将数据传输到result页面
  // 商业贷款
  toResult: function () {    
    var resultData = {
      sum: Number(this.data.loanSum)*10000,
      month:(Number(this.data.indexLoanYear) + 1)*12,
      rate: ((this.data.arrayLoanRate[this.data.indexLoanRate].value) * loanRate/100).toFixed(4)
    }
    wx.setStorage({
      key: "resultData",
      data: resultData
    })
    wx.navigateTo({
      url: '../result/result',
    })
  },
  // 公积金贷款
  toResultGjj: function () {
    var resultData = {
      sum: Number(this.data.loanSumGjj) * 10000,
      month: (Number(this.data.indexLoanYearGjj) + 1) * 12,
      rate: ((this.data.arrayLoanRateGjj[this.data.indexLoanRateGjj].value) * loanRateG / 100).toFixed(4)
    }
    wx.setStorage({
      key: "resultData",
      data: resultData
    })
    wx.navigateTo({
      url: '../result/result',
    })
  },
  toResultZh:function(){
    var resultData = {
      sum: Number(this.data.loanSumZh) * 10000,
      gjjSum: Number(this.data.loanSumZhGjj)*10000,
      sySum: Number(this.data.loanSumZhSy)*10000,
      month: (Number(this.data.indexLoanYearZh) + 1) * 12,
      syRate: ((this.data.arrayLoanRate[this.data.indexLoanRateZhSy].value) * loanRate / 100).toFixed(4),
      gjjRate: ((this.data.arrayLoanRateGjj[this.data.indexLoanRateZhGjj].value) * loanRateG / 100).toFixed(4),
      type:1
    }
    wx.setStorage({
      key: "resultData",
      data: resultData
    })
    wx.navigateTo({
      url: '../result/result',
    })
  }
})