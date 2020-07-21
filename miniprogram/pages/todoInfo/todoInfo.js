// pages/todoInfo/todoInfo.js
const db=wx.cloud.database();
const todos=db.collection("todos");
var id;
var url;
var id1;
Page({

  /**
   * 页面的初始数据
   */ 
  data: {
    task:{},
    checked: false,
  },
  pageData:{
    
  },
  /**
   * 生命周期函数--监听页面加载
   */

  onLoad: function (options) {

    this.pageData.id=options.id
    todos.doc(options.id).get().then(res =>{
      this.setData({
        task:res.data,
      })
      id=res.data._id
      url=res.data.image
      console.log (id);
      console.log (url);
    })
  },
  viewLocation:function(){
    wx.openLocation({
      latitude: this.data.task.location.latitude,
      longitude: this.data.task.location.longitude,
      name: this.data.task.location.name,
      address: this.data.task.location.address,
    })
  },
  delete(){
    todos.doc(id).remove({
      success:function(res){
        console.log("输出成功",res)
        wx.navigateTo({
          url: '../../pages/index/index',
        })
      },fail:function(res)
      {
        console.log("删除失败",res)
      }
    })
    wx.cloud.deleteFile({
      fileList:[url],
    })
  },
  complete(){
    wx.cloud.callFunction({
      name: 'revise',
      data: {
        id1: id
      },
      success:function(res){
        console.log("成功",id1)
        wx.navigateTo({
          url: '../../pages/index/index',
        })
      },
      fail:console.error
    })
    
  }
})