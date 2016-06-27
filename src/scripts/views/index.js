//视口
var tplIndex = require('../templates/index.string');
//引入高亮公共方法
var util = require('../utils/fn.js');
//定义视图
SPA.defineView('index', {
//	嵌套配置
  html: tplIndex,
// 载入插件列表
// delegated 实现tab事件的绑定
  plugins: ['delegated'],

// 初始化一些属性和方法
init:{
    // setFocus:function (e){
    //   $(e.el).addClass('active').siblings().removeClass('active');
    // }
},

//	定义子视图
	modules: [{
		name : 'content',//	名字（随便起一个）
		views: ['home','kind','shopcar','my'],//	定义N多子视图
		defaultTag:'home',//	确定谁是第一个视图
		container:'.l-container'//	容器 是Scroll的容器
	}],

//	绑定tab事件
  bindActions:{
    'switch.tabs': function ( e , data){
      //	设置当前tab高亮
      util.setFocus(e.el);
      //	切换子视图
//    console.log(data);
      this.modules.content.launch(data.tag);
    }

  },

  // 绑定视图的事件
  bindEvents: {
    beforeShow: function () {
      // console.log('beforeShow');
    },

    show: function () {
      // console.log('show');
    }
  }
});
