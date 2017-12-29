var wxCharts = require('wxcharts.js');
var windowWidth = 320;
try {
  let res = wx.getSystemInfoSync();
  windowWidth = res.windowWidth;
} catch (e) {
  // do something when get system info failed
  console.log('wx-charts出现错误！', e)
}

Page({
  /**
   * 页面的初始数据
   */
  data: {
    debj:true,
    debx:false,
    loanSum:0,
    paySum:0,
    month:0,
    rate:0,
    firstMonthAmount: 0,//等额本金首月还款
    averageMonthAmount: 0,//等额本息月均还款
    PInterest: 0,//等额本息还款总额
    monthDecrease: 0,
    interest: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.getStorage({
      key: 'resultData',
      success: function (res) {        
        var data = res.data
        var sum = data.sum
        var month = data.month
        // type = 1时是组合贷款
        if(data.type == 1){
          // 不同的贷款利率和贷款额
          var syRate = data.syRate/12
          var gjjRate = data.gjjRate/12
          var sySum = data.sySum
          var gjjSum = data.gjjSum
          
          var syInterest = Math.ceil(((sySum / month + sySum * syRate) + sySum / month * (1 + syRate)) / 2 * month - sySum)
          var gjjInterest = Math.ceil(((gjjSum / month + gjjSum * gjjRate) + gjjSum / month * (1 + gjjRate)) / 2 * month - gjjSum)

          var syaverage = Math.floor(sySum * ((syRate * Math.pow((1 + syRate), month))) / (Math.pow((1 + syRate), month) - 1))
          var gjjaverage = Math.floor(gjjSum * ((gjjRate * Math.pow((1 + gjjRate), month))) / (Math.pow((1 + gjjRate), month) - 1))
          var actualInterest = syInterest + gjjInterest
          console.log(syaverage, gjjaverage)
          that.setData({
            loanSum: sum,
            month: month,
            interest:actualInterest,
            firstMonthAmount: Math.ceil(sum / month + sySum * syRate + gjjSum * gjjRate), //首月还款
            monthDecrease: Math.ceil(sySum / month * syRate + gjjSum / month * gjjRate),   //每月递减
            averageMonthAmount: Math.ceil(Number(syaverage) + Number(gjjaverage)),//等额本息月均还款
            PInterest: (Math.floor(Number(syaverage) + Number(gjjaverage)) * month),  //等额本息还款总额
            paySum: actualInterest+sum   
          })
        }else{
          // 非组合贷款的计算
          var rate = data.rate / 12
          that.setData({
            loanSum: sum,
            month: month,
            interest: Math.ceil(((sum / month + sum * rate) + sum / month * (1 + rate)) / 2 * month - sum),
            paySum: Math.ceil(((sum / month + sum * rate) + sum / month * (1 + rate)) / 2 * month - sum) + sum,
            firstMonthAmount: Math.ceil(sum / month + sum * rate),
            monthDecrease: Math.ceil(sum / month * rate),
            averageMonthAmount: Math.ceil(sum * ((rate * Math.pow((1 + rate), month))) / (Math.pow((1 + rate), month) - 1)), 
            PInterest: Math.ceil(Math.ceil(sum * ((rate * Math.pow((1 + rate), month))) / (Math.pow((1 + rate), month) - 1)) * month)
          });
        }
                
        // 等额本金环形图
        new wxCharts({
          animation: true,
          canvasId: 'debjRing',
          type: 'ring',
          extra: {
            ringWidth: 20,
            pie: {
              offsetAngle: 0
            }
          },
          title: {
            name: '等额本金',
            color: '#2896ff',
            fontSize: 15
          },
          subtitle: {
            name: '',
            color: '#666666',
            fontSize: 15
          },
          series: [{
            name: '本金',
            data: sum,
            stroke: false,
            color:"#2896ff",            
            format: function (val, name) {
              return this.data + '元';
            }
          }, {
            name: '利息',
            data: that.data.interest,
            stroke: false,
            color: "#ff1a66",
            format: function (val, name) {
              return this.data + '元';
            }
          }],
          disablePieStroke: false,
          width: windowWidth,
          height: 250,
          dataLabel: true,
          legend: true,
          padding: 0
        });
        // 等额本息环形图
        new wxCharts({
          animation: true,
          canvasId: 'debxRing',
          type: 'ring',
          extra: {
            ringWidth: 20,
            pie: {
              offsetAngle: -0
            }
          },
          title: {
            name: '等额本息',
            color: '#2896ff',
            fontSize: 15
          },
          subtitle: {
            name: '',
            color: '#666666',
            fontSize: 15
          },
          series: [{
            name: '本金',
            data: sum,
            stroke: false,
            color: "#2896ff",
            format: function (val, name) {
              return this.data + '元';
            }
          }, {
            name: '利息',
            data: that.data.PInterest-sum,
            stroke: false,
            color: "#ff1a66",
            format: function (val, name) {
              return this.data + '元';
            }
          }],
          
          disablePieStroke: false,
          width: windowWidth,
          height: 250,
          dataLabel: true,
          legend: true,
          padding: 0
        });
      }
    })
      
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
  phoneCall: function (e) {
    wx.makePhoneCall({
      phoneNumber: '4001391359'
    })
  },
  debj: function (e) {
    this.setData({
      debx: false,
      debj: true
    })
  },
   debx: function (e) {
     this.setData({
       debx: true,
       debj: false
     })
   }
})