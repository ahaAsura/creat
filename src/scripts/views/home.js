var tplHome = require ('../templates/home.string');

//引入高亮公共方法
var util = require('../utils/fn.js');

SPA.defineView('home',{
	html:tplHome, 
	
	plugins:['delegated',{
		name: 'avalon',
		options: function(vm) {
			vm.livelist = [];
		}
	}],
	
	bindEvents: {
		'beforeShow': function() {
			var vm = this.getVM();						
			$.ajax({
				url: '/xiangmu/mock/livelist.json',
				type: 'get',
				data: {
					rtype: 'refresh'
				},
				success: function(rs){
					console.log(rs);
					vm.livelist = rs.data;
				}
			}); 
		},
		
	    'show' : function () {
	      var mySwiper = new Swiper('.banner', {
	        loop: true,
	        autoplay:2000,
	      });
	    }
	  }





});
