
// 引入spa类库
require('./lib/spa.min.js');
require('./lib/iscroll-probe.js');
require('./lib/swiper-3.3.1.min.js');


// 引入views
require('./views/index.js');
require('./views/home.js');
require('./views/kind.js');
require('./views/shopcar.js');
require('./views/my.js');

//SPA设置
SPA.config({
  indexView:'index'
});
