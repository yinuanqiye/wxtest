// components/navi/navi.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    latest: Boolean,
    first: Boolean,
    title: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    leftSrc: "images/trigger@left.png",
    disLeftSrc: "images/trigger_dis@left.png",
    rightSrc: "images/trigger@right.png",
    diRightSrc: "images/trigger_dis@right.png"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLeft:function(event) {
      if(!this.properties.latest) {
        this.triggerEvent('left', {}, {})
      }
    },
    onRight:function(event) {
      if(!this.properties.first) {
        this.triggerEvent('right', {}, {})
      }
    }
  }
})
