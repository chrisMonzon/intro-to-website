(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"1a71":function(t,o,s){"use strict";s.r(o);var e=function(){var t=this,o=t.$createElement,s=t._self._c||o;return s("div",{staticClass:"container",attrs:{align:"center"}},[s("div",{staticClass:"box",attrs:{align:"left"}},[t._v("\n    "+t._s(t.exp)+"\n  ")]),s("div",{staticClass:"box"},[t._l(3,(function(o){return s("div",{key:o},[s("div",{staticClass:"row"},[t._l(3,(function(e){return s("q-btn",{key:e,on:{click:function(s){t.addNum(6+e-3*(o-1))}}},[t._v("\n          "+t._s(6+e-3*(o-1))+"\n        ")])})),s("q-btn",{staticStyle:{width:"40px"},on:{click:function(s){return t.addNum(t.operator[o-1])}}},[t._v(" "+t._s(t.operator[o-1])+" ")])],2)])})),s("div",{staticClass:"row",attrs:{align:"left"}},t._l(t.bottomRow,(function(o,e){return s("q-btn",{key:o.id,style:t.styleString,on:{click:function(o){return t.addNum(t.bottomRow[e])}}},[t._v(t._s(t.bottomRow[e]))])})),1),s("div",{staticClass:"row",attrs:{align:"left"}},[s("q-btn",{staticStyle:{height:"45px",width:"40px"},on:{click:function(o){return t.del()}}},[t._v("del")]),s("q-btn",{staticStyle:{height:"45px",width:"120px"},on:{click:function(o){return t.calc()}}},[t._v("=")])],1)],2)])},n=[],i={data(){return{outp:null,operators:[],operands:[],operator:["/","*","-","+"],bottomRow:["0",".","+/-","+"],exp:"0",opIndex:0,opList:[],end:0,styleString:"height: 40px; width: 40px;"}},methods:{addNum:function(t){this.exp="0"===this.exp?t:this.exp+""+t,this.$forceUpdate()},calc:function(){let t="";for(let o=0;o<this.exp.length;o++)console.log(t),this.operator.includes(this.exp[o])?(this.operands.push(parseFloat(t)),t="",this.operators.push(this.exp[o])):t+=this.exp[o],o===this.exp.length-1&&this.operands.push(parseFloat(t));while(0!==this.operators.length){console.log("62 "+this.operands),console.log("63"+this.operators);const t=this.eval(parseFloat(this.operands.shift()),parseFloat(this.operands.shift()),this.operators.shift());console.log("newNum:"+t),this.operands.unshift(t),console.log("67 "+this.operands),console.log("68 "+this.operators)}console.log(this.operands[0]),this.exp=this.operands[0],this.operands=[],console.log(this.operands),console.log(this.operators)},del:function(){this.exp=this.exp.substring(0,this.exp.length-1),console.log("deleted")},eval:function(t,o,s){return console.log("eval",t,o,s),"+"===s?(console.log("addition"),t+o):"-"===s?(console.log("subtraction"),t-o):"*"===s?t*o:"/"===s?t/o:0}}},l=i,a=(s("b200"),s("2877")),r=s("9c40"),c=s("eebe"),p=s.n(c),h=Object(a["a"])(l,e,n,!1,null,null,null);o["default"]=h.exports;p()(h,"components",{QBtn:r["a"]})},"9a8d":function(t,o,s){},b200:function(t,o,s){"use strict";var e=s("9a8d"),n=s.n(e);n.a}}]);