define("mods/tile-demo-todolist/index.weex",["rax","@ali/tile-view","@ali/tile-image","@ali/tile-scrollview","@ali/tile-text","@ali/tile-input","@ali/tile-icon","@ali/tile-modules"],function(require,t,e){try{var n=require("rax")}catch(t){"undefined"!=typeof console&&console.log(t)}try{var o=require("@ali/tile-view")}catch(t){"undefined"!=typeof console&&console.log(t)}try{var i=require("@ali/tile-image")}catch(t){"undefined"!=typeof console&&console.log(t)}try{var r=require("@ali/tile-scrollview")}catch(t){"undefined"!=typeof console&&console.log(t)}try{var a=require("@ali/tile-text")}catch(t){"undefined"!=typeof console&&console.log(t)}try{var l=require("@ali/tile-input")}catch(t){"undefined"!=typeof console&&console.log(t)}try{var s=require("@ali/tile-icon")}catch(t){"undefined"!=typeof console&&console.log(t)}try{var u=require("@ali/tile-modules")}catch(t){"undefined"!=typeof console&&console.log(t)}return e.exports=function(t){function e(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return t[o].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";t.exports=n(1)},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var l=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),s=n(2),u=n(3),c=o(u),f=n(4),p=o(f),d=n(13),h=o(d),g=n(6),y=n(7),m=n(8),v=n(9),b=n(12),g=n(6),y=n(7),m=n(8),v=n(9),b=n(12),g=n(6),y=n(7),m=n(8),v=n(9),b=n(12),g=n(6),y=n(7),m=n(8),v=n(9),b=n(12),x=function(t){function e(){var t,n,o,a;i(this,e);for(var l=arguments.length,s=Array(l),u=0;u<l;u++)s[u]=arguments[u];return n=o=r(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(s))),o.state={list:[{id:1,text:"买张电影票"},{id:2,text:"回家吃饭",stared:!0},{id:3,text:"刷碗时间"},{id:4,text:"要起床了"},{id:5,text:"喝杯水",stared:!0},{id:6,text:"站起来运动下",done:!0,time:"3月4日 05:06:07"},{id:7,text:"睡觉",done:!0,time:"3月4日 05:06:07"},{id:8,text:"运动健身",done:!0,time:"3月4日 05:06:07",stared:!0},{id:9,text:"打电话给客户",done:!0,time:"3月4日 05:06:07"},{id:10,text:"去工地一趟",done:!0,time:"3月4日 05:06:07",stared:!0}],showFinishBox:!1},o.toggleFinishBox=function(){o.setState({showFinishBox:!o.state.showFinishBox},function(){o.save()})},o._changeItem=function(t,e){for(var n=0;n<o.state.list.length;n++)if(o.state.list[n].id===t){var i=JSON.parse(JSON.stringify(o.state.list));e(i[n]),o.setState({list:i},function(){o.save()});break}},o.toggleStar=function(t){o._changeItem(t,function(t){t.stared=!t.stared})},o.toggleDone=function(t,e){o._changeItem(t,function(t){t.done=!e,t.time=(new Date).toLocaleString()})},o.finishInput=function(t,e){o._changeItem(t,function(t){t.text=e})},o.addAction=function(t,e){var n=JSON.parse(JSON.stringify(o.state.list));n.push({id:(new Date).getTime(),text:t,stared:e,createTime:(new Date).toLocaleString()}),o.setState({list:n},function(){o.save()})},a=n,r(o,a)}return a(e,t),l(e,[{key:"save",value:function(){this.state.list&&this.state.list.length>0&&b.storage.setItem("todolist",JSON.stringify(this.state.list),function(t){"success"!==t.result&&console.log(t)})}},{key:"componentWillMount",value:function(){var t=this;b.storage.getItem("todolist",function(e){if(e.data){var n=void 0;try{n=JSON.parse(e.data),t.setState({list:n})}catch(t){}}else t.save()})}},{key:"render",value:function(){var t=this.state.list.filter(function(t){return!!t.done}),e=this.state.list.filter(function(t){return!t.done}),n=t.length>0&&0===e.length;return(0,s.createElement)(g,{style:c.default.appWrapper},(0,s.createElement)(y,{style:c.default.appBg,source:{uri:"https://img.alicdn.com/tfs/TB1PBL4XfxNTKJjy0FjXXX6yVXa-600-900.jpg"},resizeMode:"cover"}),(0,s.createElement)(m,{style:c.default.innerWrapper},(0,s.createElement)(p.default,{addAction:this.addAction}),(0,s.createElement)(h.default,{data:e,toggleStar:this.toggleStar,toggleDone:this.toggleDone,finishInput:this.finishInput}),t.length?(0,s.createElement)(g,null,(0,s.createElement)(g,{style:c.default.finishedItems,onClick:this.toggleFinishBox},(0,s.createElement)(v,{style:c.default.finishedItemsText},t.length," 个已完成任务")),this.state.showFinishBox||n?(0,s.createElement)(h.default,{data:t,type:"finished",toggleStar:this.toggleStar,toggleDone:this.toggleDone,finishInput:this.finishInput}):null):null))}}]),e}(s.Component);(0,s.render)((0,s.createElement)(x,null))},function(t,e){t.exports=n},function(t,e){"use strict";t.exports={appWrapper:{width:750,height:"100%",position:"relative"},appBg:{position:"absolute",width:750,height:"100%"},innerWrapper:{position:"absolute",width:750,height:"100%",paddingLeft:30,paddingRight:30},finishedItems:{opacity:.6,backgroundColor:"#000",width:240,alignItems:"center",borderRadius:8,marginBottom:40},finishedItemsText:{fontSize:24,paddingLeft:10,paddingRight:10,paddingTop:6,paddingBottom:6,color:"#FFF"}}},function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),l=n(2),s=n(5),u=function(t){return t&&t.__esModule?t:{default:t}}(s),c=n(6),f=(n(7),n(8),n(9),n(10)),p=n(11),c=(n(12),n(6)),f=(n(7),n(8),n(9),n(10)),p=n(11),d=(n(12),function(t){function e(){var t,n,r,a;o(this,e);for(var l=arguments.length,s=Array(l),u=0;u<l;u++)s[u]=arguments[u];return n=r=i(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(s))),r.val="",r.state={value:"添加一个任务...",stared:!1},r.onInput=function(t){if(t.value)return r.val=t.value,13===t.which||(t.value||"").slice(-1).indexOf("\n")>-1?(r._submit(),void r.setState({value:"",stared:!1})):void 0},r.toggleStar=function(){r.setState({stared:!r.state.stared,value:r.val})},r._submit=function(){r.props.addAction&&r.props.addAction(r.val.replace(/\n/,""),r.state.stared)},a=n,i(r,a)}return r(e,t),a(e,[{key:"render",value:function(){return(0,l.createElement)(c,{style:u.default.wrapper},(0,l.createElement)(f,{value:this.state.value,multiline:!0,style:u.default.input,onInput:this.onInput,onKeyDown:this.onInput}),(0,l.createElement)(c,{style:u.default.star,onClick:this.toggleStar},(0,l.createElement)(p,{style:this.state.stared?{color:"#e6322f"}:{},fontFamily:"iconfont",source:{uri:"//at.alicdn.com/t/font_417171_qggn7j62kp3hxgvi.ttf",codePoint:this.state.stared?"":""}})))}}]),e}(l.Component));e.default=d,t.exports=e.default},function(t,e){"use strict";t.exports={wrapper:{marginTop:40,marginBottom:40,width:690,height:80,backgroundColor:"#798070",borderRadius:8,position:"relative"},star:{position:"absolute",right:30,top:24,fontSize:36,color:"#b4b1a5"},input:{outline:"none",width:690,height:68,color:"#FFF",paddingTop:10,resize:"none",overflow:"hidden"}}},function(t,e){t.exports=o},function(t,e){t.exports=i},function(t,e){t.exports=r},function(t,e){t.exports=a},function(t,e){t.exports=l},function(t,e){t.exports=s},function(t,e){t.exports=u},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var l=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),s=n(2),u=n(14),c=o(u),f=n(15),p=o(f),d=n(6),d=(n(7),n(8),n(9),n(10),n(11),n(12),n(6)),d=(n(7),n(8),n(9),n(10),n(11),n(12),n(6)),h=(n(7),n(8),n(9),n(10),n(11),n(12),function(t){function e(){var t,n,o,a;i(this,e);for(var l=arguments.length,s=Array(l),u=0;u<l;u++)s[u]=arguments[u];return n=o=r(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(s))),o.state={data:o.props.data,type:o.props.type},o.toggleStar=function(t){o.props.toggleStar&&o.props.toggleStar(t)},o.toggleDone=function(t,e){o.props.toggleDone&&o.props.toggleDone(t,e)},o.finishInput=function(t,e){o.props.finishInput&&o.props.finishInput(t,e)},a=n,r(o,a)}return a(e,t),l(e,[{key:"componentWillReceiveProps",value:function(t){this.setState({data:t.data})}},{key:"render",value:function(){var t=this;return(0,s.createElement)(d,{style:c.default.wrapper},this.state.data.map(function(e){return(0,s.createElement)(p.default,{item:e,type:t.props.type,toggleStar:t.toggleStar,toggleDone:t.toggleDone,finishInput:t.finishInput})}))}}]),e}(s.Component));e.default=h,t.exports=e.default},function(t,e){"use strict";t.exports={wrapper:{width:690,marginBottom:40}}},function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),l=n(2),s=n(16),u=function(t){return t&&t.__esModule?t:{default:t}}(s),c=n(6),f=n(7),p=(n(8),n(9)),d=n(10),h=n(11),c=(n(12),n(6)),f=n(7),p=(n(8),n(9)),d=n(10),h=n(11),g=(n(12),function(t){function e(){var t,n,r,a;o(this,e);for(var l=arguments.length,s=Array(l),u=0;u<l;u++)s[u]=arguments[u];return n=r=i(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(s))),r.state={item:r.props.item,isEditMode:!1},r.toggleStar=function(t){r.props.toggleStar&&r.props.toggleStar(t)},r.toggleDone=function(t,e){r.props.toggleDone&&r.props.toggleDone(t,e)},r.finishInput=function(t,e){r.setState({isEditMode:!1},function(){e.value&&r.props.finishInput&&r.props.finishInput(t,e.value)})},r.inputValue=function(t,e){(13===e.which||(e.value||"").indexOf("\n")>-1)&&r.setState({isEditMode:!1},function(){r.props.finishInput&&r.props.finishInput(t,e.value.replace(/\n/,""))})},r.setEditMode=function(){r.setState({isEditMode:!0})},a=n,i(r,a)}return r(e,t),a(e,[{key:"componentWillReceiveProps",value:function(t){this.setState({item:t.item})}},{key:"render",value:function(){var t=this,e=this.state.item,n="finished"===this.props.type,o=this.state.isEditMode;return(0,l.createElement)(c,{style:[u.default.item,n?{opacity:.7}:{}]},(0,l.createElement)(d,{type:"checkbox",containerStyle:u.default.checkbox.container,checkboxStyle:u.default.checkbox.checkbox,checked:n,onChange:function(n){return t.toggleDone(e.id,n)}}),n?(0,l.createElement)(c,null,(0,l.createElement)(p,{style:[u.default.text,u.default.textFinish]},e.text),(0,l.createElement)(p,{style:u.default.text},e.time," 完成")):o?(0,l.createElement)(d,{multiline:!0,style:u.default.inputPending,value:e.text,onBlur:function(n){return t.finishInput(e.id,n)},onInput:function(n){return t.inputValue(e.id,n)}}):(0,l.createElement)(c,{style:u.default.textPending,onClick:this.setEditMode},e.text),(0,l.createElement)(c,{style:u.default.star,onClick:function(){return t.toggleStar(e.id)}},e.stared?(0,l.createElement)(f,{source:{uri:"https://img.alicdn.com/tfs/TB1KEP9X6ihSKJjy0FfXXbGzFXa-19-31.jpg"},style:u.default.image}):(0,l.createElement)(h,{style:u.default.star,fontFamily:"iconfont",source:{uri:"//at.alicdn.com/t/font_417171_qggn7j62kp3hxgvi.ttf",codePoint:""}})))}}]),e}(l.Component));e.default=g,t.exports=e.default},function(t,e){"use strict";t.exports={wrapper:{width:690,marginBottom:60},item:{width:690,height:76,borderRadius:8,paddingLeft:16,paddingRight:16,position:"relative",flexDirection:"row",justifyContent:"flex-start",alignItems:"center",backgroundColor:"#FFF",marginBottom:6,boxShadow:"1px 1px 1px #AAA"},checkbox:{container:{marginTop:6,width:30,height:30,marginRight:20},checkbox:{width:30,height:30}},textPending:{width:560,fontSize:24},inputPending:{width:500,marginRight:60,fontSize:24,borderColor:"#CCC",borderWidth:2,borderStyle:"solid",outlint:"none",paddingLeft:0,resize:"none"},text:{width:560,fontSize:24},textFinish:{textDecoration:"line-through"},star:{},image:{width:38,height:62,marginTop:-16,marginLeft:-4}}}])});