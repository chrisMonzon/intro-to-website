(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"5dfa":function(t,r,e){"use strict";e.r(r);var o=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",[e("q-btn",{on:{click:function(r){return t.initBoard()}}},[t._v("print")])],1)},n=[];class s{constructor(t,r,e,o){this.level=t,this.color=r,this.x=e,this.y=o}getLevel(){return this.level}getColor(){return this.color}getX(){return this.x}getY(){return this.y}}class u{constructor(){this.board=[],this.turn=!0;let t=[],r="";for(let e=0;e<3;e++){t=[];for(let o=0;o<4;o++)r=o*e%2===0?new s("p","b",o,e):" ",t.push(r);this.board.push(t)}this.board.push(t);for(let e=0;e<3;e++){t=[];for(let r=0;r<9;r++)t.push(" ");this.board.push(t)}for(let e=0;e<3;e++){t=[];for(let o=0;o<4;o++)r=o*e%2===0?new s("p","w",o,e):" ",t.push(r);this.board.push(t)}}getBoard(){return this.board}outOfBounds(t,r,e,o){return!(t>7||e>7||r>7||o>7||t<0||e<0||r<0||o<0)}}var i={data(){return{}},methods:{initBoard:function(){const t=new u;console.log(t.getBoard())}}},l=i,h=e("2877"),a=e("9c40"),c=e("eebe"),d=e.n(c),p=Object(h["a"])(l,o,n,!1,null,null,null);r["default"]=p.exports;d()(p,"components",{QBtn:a["a"]})}}]);