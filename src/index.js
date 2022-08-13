import "./css/public.css"
import "./css/index.css"

import 'jquery'
import './js/public'
import './js/nav'

// 1.通过解构的方式获取方法，可以触发treeshaking
// 2.调用的npm包必须使用EMSmodule 6 规范
// 3.同一文件的treeshaking有触发条件，条件就是mode=production
// 4.一定要注意使用解构来加载模块
import { get } from 'lodash'

// import _ from 'lodash'
console.log(get({
    a: 1,
  }, 'a'))