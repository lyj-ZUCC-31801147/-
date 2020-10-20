// pages/lianxi/lianxi.js
var cnt = 0
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num1:12,
    num2:44,
    num3:35,
    num4:563,
    num5:591,
    num6:12,
    selectFrm:-1,
    selectFrm_num:-1
  },
  selectFrm1:function(){
    if(this.data.selectFrm==-1){
      this.data.selectFrm=1
      this.data.selectFrm_num=this.data.num1
    }else{
      if(this.data.selectFrm==1){
        //nothing
      }else if(this.data.selectFrm_num==this.data.num1){
        //match success
        this.match_success()
      }else{
        //match failed
        this.data.selectFrm=1
        this.data.selectFrm_num=this.data.num1
      }
    }
  },
  selectFrm2:function(){
    if(this.data.selectFrm==-1){
      this.data.selectFrm=2
      this.data.selectFrm_num=this.data.num2
    }else{
      if(this.data.selectFrm==2){
        //nothing
      }else if(this.data.selectFrm_num==this.data.num2){
        //match success
        this.match_success()
        console.log("success")
      }else{
        //match failed
        this.data.selectFrm=2
        this.data.selectFrm_num=this.data.num2
      }
    }
  },
  selectFrm3:function(){
    if(this.data.selectFrm==-1){
      this.data.selectFrm=3
      this.data.selectFrm_num=this.data.num3
    }else{
      if(this.data.selectFrm==3){
        //nothing
      }else if(this.data.selectFrm_num==this.data.num3){
        //match success
        this.match_success()
        console.log("success")
      }else{
        //match failed
        this.data.selectFrm=3
        this.data.selectFrm_num=this.data.num3
      }
    }
  },
  selectFrm4:function(){
    if(this.data.selectFrm==-1){
      this.data.selectFrm=4
      this.match_success()
      this.data.selectFrm_num=this.data.num4
    }else{
      if(this.data.selectFrm==4){
        //nothing
      }else if(this.data.selectFrm_num==this.data.num4){
        //match success
        this.match_success()
        console.log("success")
      }else{
        //match failed
        this.data.selectFrm=4
        this.data.selectFrm_num=this.data.num4
      }
    }
  },
  selectFrm5:function(){
    if(this.data.selectFrm==-1){
      this.data.selectFrm=5
      this.data.selectFrm_num=this.data.num5
    }else{
      if(this.data.selectFrm==5){
        //nothing
      }else if(this.data.selectFrm_num==this.data.num5){
        //match success
        this.match_success()
        console.log("success")
      }else{
        //match failed
        this.data.selectFrm=5
        this.data.selectFrm_num=this.data.num5
      }
    }
  },
  selectFrm6:function(){
    if(this.data.selectFrm==-1){
      this.data.selectFrm=6
      this.data.selectFrm_num=this.data.num6
    }else{
      if(this.data.selectFrm==6){
        //nothing
      }else if(this.data.selectFrm_num==this.data.num6){
        //match success
        this.match_success()
        console.log("success")
      }else{
        //match failed
        this.data.selectFrm=6
        this.data.selectFrm_num=this.data.num6
      }
    }
  },
  match_success:function() {
    cnt=cnt+1
    this.setData({
      num1:24,
      num2:1255,
      num3:1212,
      num4:1236,
      num5:1423,
      num6:1236
    });
    if(cnt==2){
      wx.navigateTo({
        url: '../instruction/instruction',
      })
    }
  },
  exit:function(){
    wx.navigateTo({
      url: '../instruction/instruction',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  }
})