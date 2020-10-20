// pages/digit_match/digit_match.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num1:-1,
    num2:-1,
    num3:-1,
    num4:-1,
    num5:-1,
    num6:-1,
    count:0,
    time:new Date()
  },
  randon_generate_numbers:function(){
    if(this.data.count==20){
      this.data.time = new Date() - this.data.time
      wx.navigateTo({
        url: '../result/result?&time='+this.data.time+'&count'+this.data.count
      })
      return
    }
    let max = 100000
    let min = 10
    let random_index1 = Math.floor(Math.random()*6)+1
    let random_index2 = Math.floor(Math.random()*6)+1
    while(random_index1==random_index2){
      random_index2 = Math.floor(Math.random()*6)+1
    }
    if(random_index2<random_index1){
      var t = random_index1
      random_index1 = random_index2
      random_index2 = t
    }
    var temp = new Array(6)
    var i = 1
    while(i<=6){
      if(random_index2!=i)
        temp[i] = Math.floor(Math.random()*(max-min+1)+min) 
      i = i + 1
    }
    temp[random_index2]=temp[random_index1]
    i=1
    console.log(random_index1)
    console.log(random_index2)
    while(i<=6){
      console.log(temp[i])
      i++

    }
    this.setData({
      count:this.data.count+1 ,
      num1: temp[1] ,
      num2: temp[2] ,
      num3: temp[3] ,
      num4: temp[4] ,
      num5: temp[5] ,
      num6: temp[6] 
    });   
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
        this.randon_generate_numbers()
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
        this.randon_generate_numbers()
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
        this.randon_generate_numbers()
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
      this.data.selectFrm_num=this.data.num4
    }else{
      if(this.data.selectFrm==4){
        //nothing
      }else if(this.data.selectFrm_num==this.data.num4){
        //match success
        this.randon_generate_numbers()
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
        this.randon_generate_numbers()
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
        this.randon_generate_numbers()
        console.log("success")
      }else{
        //match failed
        this.data.selectFrm=6
        this.data.selectFrm_num=this.data.num6
      }
    }
  },
  exit:function(){
    console.log(new Date()- this.data.time)
    console.log(this.data.count-1)
    wx.navigateTo({
      url: '../result/result?&time='+(new Date()-this.data.time) +'&count='+(this.data.count-1)
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.randon_generate_numbers()
    this.data.time = new Date()
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