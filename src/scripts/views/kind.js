var tplKind = require ('../templates/kind.string');
//引入高亮公共方法
var util = require('../utils/fn.js');

SPA.defineView('kind',{
	html:tplKind,
	
	plugins: ['delegated'],
	
	init:{
    // setFocus:function (e){
    //   $(e.el).addClass('active').siblings().removeClass('active');
    // }
},

bindActions:{
    'switch.tabs': function ( e , data){
      //	设置当前tab高亮
      util.setFocus(e.el);
//    console.log(1)
      //	切换子视图
//    console.log(1);
      this.modules.content.launch(data.tag);
    }

  }




});
