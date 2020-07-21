// pages/index/index.js
// Component({
//   /**
//    * 组件的属性列表
//    */
//   properties: {

//   },

//   /**
//    * 组件的初始数据
//    */
//   data: {

//   },

//   /**
//    * 组件的方法列表
//    */
//   methods: {

//   }
  
  
// })
Page({
  data: {
    show: false,
  },
  getUserInfo: function(e) {
    wx.getUserInfo({
      complete: (res) => {
        console.log("成功",res)
      },
    })
  },
  showPopup() {
    this.setData({ show: true });
  },

  onClose() {
    this.setData({ show: false });
  },
});
