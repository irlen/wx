var app = getApp();

Page({
  data:{
    searchStyle:{
      top: "10px"
    },
    active: "product"
  },
  onLoad:function(){
    const data = app.globalData
    const top = data.menuButtonObject.top - 20;
    const width = data.windowWidth - data.menuButtonObject.width - 14;
    this.setData({
      searchStyle:{
        top,
        width
      }
    })

  },

  tabChange:function(e){
    const name = e.currentTarget.dataset.name;
    this.setData({
      active: name
    })
  }

})