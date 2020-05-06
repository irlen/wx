Component({
  data: {
    active: "home"
  },
  methods:{
    changeTab:function(e){
      const value = e.currentTarget.dataset;
      const name = value.name;
      this.setData({
        active: name
      })
    }
  }
  
  
  
});