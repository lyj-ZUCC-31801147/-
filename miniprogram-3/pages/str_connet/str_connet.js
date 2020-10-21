const app = getApp();
let str=new Array();
let request_click=0;
let time=new Date();
// pages/str_connet/str_connet.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    windowWidth: app.windowWidth,
    windowHeight: app.windowHeight,
    str_order:"",
    nowDifficulty:10
  },
  
  digGold:function(event){
    console.log(event.target.dataset.value)
    let key=event.target.dataset.value
    console.log("key="+key+"  index="+request_click)
    console.log(str)
    if(str[request_click]==key){
      request_click++
      console.log("YES")
      this.setData({
        pre_char:str[request_click-1]
      })
    }else{
      console.log("wrong")
    }
    if(request_click==10){
      this.finish()
    }
  },
  finish:function(){
    let now = new Date()
    let spends=(now-time)/1000
    wx.showModal({
      title:"你已完成测试",
      content:"用时:"+spends,
      
    })
  },
  generate_random_string: function(){
    let arrdigit= new Array()
    let arrchar = new Array()
    let numberOfDigit = 5
    let numberOfChar = 5
    let max_digit=20
    let min_digit=0
    let chars = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    for(let i=0;i<numberOfChar;i++){
      let r = Math.floor(Math.random()*26)
      arrchar.push(chars[r])
    }
    for(let i=0;i<numberOfDigit;i++){
      let f = Math.floor(Math.random()*max_digit+min_digit)
      arrdigit.push(f)
    }
    let str1 = new Array()
    for(let i=0;i<5;i++){
      str1.push(arrdigit[i])
      str1.push(arrchar[i])
    }
    
    let s=""
    for(let i=0;i<numberOfDigit+numberOfChar;i++){
      if(i!=numberOfDigit+numberOfChar-1){
        s=s+str1[i]+'->'
      }
      else{
        s=s+str1[i]     
      }
    }
    let str2 = new Array()
    for(let i=0;i<10;i++)
      str2.push(str1[i])
    for(let i =0;i<5;i++)
      str2 = this.shuffle_array(str2)
    let str_Matrix = [100];
    let index=this.generate_random_numbers() 
    //console.log("mark")
    for(let i =0;i<100;i++)
      str_Matrix[i]="."
    //console.log(str_Matrix)
    for(let i=0;i<10;i++){
      str_Matrix[index[i]]=str2[i]
    }  
    //console.log(str_Matrix)
    //console.log(str1)
    str=str1
    this.setData({
      str_order:s,
      mineMap:str_Matrix
    })
  },
  generate_random_numbers:function () {
    //产生10个不重复的数字
    let n=10,max=99,min=0,result=new Array()
    let i = 1
    while(i<=10){
      let x = Math.floor(Math.random()*max+min)
      let j = 0
      for(j=0;j<result.length;j++){
        if(result[j]==x){
          break;
        }
      }
      if(j==result.length){
        result.push(x)
        i++
      }
    }
    result.sort((a, b) => a - b)
    return result
  },
  shuffle_array:function(array){
      let x1=-1
      let x2=-1 
      while(x1==x2){
        x1=Math.floor(Math.random()*10+0)
        x2=Math.floor(Math.random()*10+0)
      }
    //console.log('x1='+x1+'  x2='+x2) 
    //console.log(array)
      //swap array[x1] and array[x2]
      let temp1=array[x1]
      let temp2=array[x2]
      array[x1]=temp2
      array[x2]=temp1
    //console.log(array)
    return array
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.generate_random_string()
    time=new Date()
    this.setData({
      pre_char:"无"
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

  }
})