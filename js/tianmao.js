$(function(){
	$(window).resize(function(){
		if($(window).width()<1230){
			$(".box1").css({width:1000})
			$(".box1 a:gt(7)").css({display:"none"})
			$(".banner4").css({display:"none"})
			$(".imgb").css({display:"none"})
		}else{
			$(".box1").css({width:1230})
			$(".box1 a:gt(7)").css({display:"block"})
			$(".banner4").css({display:"block"})
			$(".imgb").css({display:"block"})
		}
	})
	$(window).resize();
	//轮播
	var imgbox=$(".imga");
	var  btns=$(".btns li")
	var num=0;
	var t=setInterval(move,3000)
	function  move(){
			num++;
			if(num>=imgbox.length){
				num=0
			}
		//alert(imgbox.length)
			imgbox.animate({opacity:0},500)
		    imgbox.finish();
		    imgbox.eq(num).animate({opacity:1},500)
			btns.css("background","black").eq(num).css("background","red")
		if(num==0){
			$(".banner").css("background","#1BA2B6")
		}else if (num==1){
			$(".banner").css("background","#E8E8E8")
		}else if(num==2){
			$(".banner").css("background","#EE452E")
		}else if(num==3){
			$(".banner").css("background","#E8E8E8")
		}else if(num==4){
			$(".banner").css("background","#067D69")
		}else if(num==5){
			$(".banner").css("background","#F8AABC")
		}
	}
	//选项卡
	btns.hover(function(){
		var index=btns.index(this)
		btns.css("background","black")
		$(this).css("background","red")
		imgbox.animate({opacity:0})
		imgbox.finish();
		imgbox.eq(index).animate({opacity:1},500)
		//imgebox.csslx("opacity",0).eq(index).animate({opacity:1},500)
		num=index;
		if(num==0){
			$(".banner").css("background","#1BA2B6")
		}else if (num==1){
			$(".banner").css("background","#E8E8E8")
		}else if(num==2){
			$(".banner").css("background","#EE452E")
		}else if(num==3){
			$(".banner").css("background","#E8E8E8")
		}else if(num==4){
			$(".banner").css("background","#067D69")
		}else if(num==5){
			$(".banner").css("background","#FABED8")
		}
	})
	//停止时间函数
	$(".box").hover(function(){
		clearInterval(t)
	},function() {
		t = setInterval(move, 3000)
	})
	//白框
	$(".UL li").hover(function(){
		//alert(1)
		$(".baikuang").css("display","block")
		$(".bai").css("backdround","red")
	},function(){
		$(".baikuang").css("display","none")
	})
	//BK
	$(".BK").hover(function(){
		//alert(1)
		$(".BK").css("display","block")
	},function(){
		$(".BK").css("display","none")
	})
})



////图片的透明度
//var mahuan=$(".mahuan")
//for (var i = 0; i <mahuan.length; i++) {
//	mahuan[i].aa=i
//	mahuan[i].onmouseover=function(){
//		mahuan[this.aa].style.opacity="0.7"
//	}
//	mahuan[i].onmouseout=function(){
//		mahuan[this.aa].style.opacity="1"
//	}
//};
//
//这招
var box=$(".box0");
var zhezhao=$(".zhezhao")
// 样式
for( var i=0;i<box.length;i++){
	box[i].aa=i;// 把它当做对象来处理 加属性 记录下标  给它一个下标可以找到这个事件
	box[i].onmouseover=function(){
		zhezhao[this.aa].style.display="block"
	}
	box[i].onmouseout=function(){
		zhezhao[this.aa].style.display="none"
	}
}
//
///// 图片的放大
var lyf=$(".lyf")//大盒子
// alert(lyf.length)
var ym=$(".ym")//图片
for( var i=0;i<lyf.length;i++){
	lyf[i].cc=i;
	lyf[i].onmouseover=function(){
		ym[this.cc].style.height="155px"
		ym[this.cc].style.width="155px"
	}
	lyf[i].onmouseout=function(){
		ym[this.cc].style.height="140px"
		ym[this.cc].style.width="140px"
	}
}
//
//
//图片的左右移动
var msb=$(".msb")
// alert(msb.length)
for (var i = 0; i <msb.length; i++) {
	msb[i].bb=i
	msb[i].onmouseover=function  () {
		msb[this.bb].style.cssText="position:relative;right:5px;"
	}
	msb[i].onmouseout=function  () {
		msb[this.bb].style.cssText=""
	}
};
//
//
//
//// banner上面的白色遮照
//
//var btnli=$("li",$(".btn")[0]);
//var ul=$("li",$(".UL")[0])
////alert(ul)
//var baikuang=$(".baikuang")
//// alert(baikuang.length)
//for(var i=0;i<ul.length;i++){
//	ul[i].pp=i;
//	ul[i].onmouseover=function(){
//		ul[this.pp].style.background="red"
//		baikuang[this.pp].style.display="block"
//		for(var j=0;j<baikuang.length;j++){
//			baikuang[j].jj=j;
//			baikuang[j].onmouseover=function(){
//				baikuang[this.jj].style.display="block"
//				ul[this.jj].style.background="red"
//			}
//			baikuang[j].onmouseout=function(){
//				baikuang[this.jj].style.display="none"
//				ul[this.jj].style.background=""
//			}
//		}
//	}
//	ul[i].onmouseout=function(){
//		ul[this.pp].style.background=""
//		baikuang[this.pp].style.display="none"
//	}
//}
//
//
//
//
// 右边紧邻移入效果开始
////var SS=$(".SS")
//// alert(SS.length)
//var RR=$(".RR")
//// alert(RR.length)
//for(i=0;i<RR.length;i++){
//	RR[i].mm=i
//	RR[i].onmouseover=function(){
//		// SS[this.mm].style.display="block"
//		animate(SS[this.mm],{left:-90,opacity:1},500)
//
//	}
//	RR[i].onmouseout=function(){
//		// SS[this.mm].style.display="block"
//		animate(SS[this.mm],{left:-180,opacity:0},500)
//
//	}
//}
////
//// 二维码
//var RR1=$(".RR1")[0]
//var S9=$(".S9")[0]
//RR1.onmouseover=function(){
//	animate(S9,{left:-155,opacity:1},500)
//
//}
//RR1.onmouseout=function(){
//	animate(S9,{left:-310,opacity:0},500)
//
//}
//
//
//
////楼层跳转
//var obj;
//document.documentElement.scrollTop=1;
//if(document.documentElement.scrollTop){
//	obj=document.documentElement;
//}else{
//	obj=document.body;
//}
//var box=$(".hsgdt")[0];
//var flagdown="1"//开关是控制滚动条出现的位置，可以让它在一触发时就执行相对应的代码。
//var flagup="1"
//var sidebarleft=$(".sidebarleft")[0]
//var floor=$(".hong");
////alert(floor.length)
//var btnli=$(".sidebarleft2");
////alert(btnli)
//var colorarr=["#ea5f8d","#f7a945","#19c8a9","#f15453","#64c333","#0aa6e8","#131418","#131418"]
//var now=0;
////当你滑滚动条时，每过一段距离时就会点亮左边的一个小按钮
//window.onscroll=function(){
//	btnli[i].onmouseover=function(){
//		for(var j=0;j<btnli.length;j++){
//			if(now!=j){//当鼠标移开：当前点亮的按钮依然是点亮时的颜色，别的会随着鼠标的移动而变色
//				btnli[j].style.background=""
//			}
//		}
//		this.style.background=colorarr[this.index];//鼠标移入时每个按钮的颜色在之前定义的数组的控制下变颜色
//	}
//	btnli[i].onmouseout=function(){
//		for(var j=0;j<btnli.length;j++){
//			btnli[j].style.background=""
//		}
//	}
//	if(obj.scrollTop>=800){
//		if (flagdown==1){
//			animate(box,{top:0},200)
//			animate(sidebarleft,{width:38,height:364},200)
//			flagdown=2;
//		}
//		flagup=1;
//	}else
//	{if(flagup==1){
//		animate(box,{top:-50},200)
//		animate(sidebarleft,{width:0,height:0},200)
//		flagup=2 ;
//	}
//		flagdown=1;
//	}
//	for(var i=0;i<floor.length;i++){
//		// console.log(floor[i].offsetTop)
//		if(floor[i].offsetTop<=obj.scrollTop+200){
//			for(var j=0;j<btnli.length;j++){
//				btnli[j].style.background=""
//			}
//			btnli[i].style.background=colorarr[i]
//			now=i;//在滑动滚动条有一个按钮点亮时，这时把鼠标移入到别的按钮上时，之前的按钮依然会点亮。
//			// }else{
//			// 	btnli[i].style.background=""
//		}
//	}
//}
////单击事件每当我们单击左边的小按钮时，相应的小按钮的背景会点亮，
//for(var i=0;i<btnli.length;i++) {
//	btnli[i].index = i;//移开时点亮的按钮是继续点亮的
//	btnli[i].onclick = function () {
//		now = this.index;//下标的控制
//		// obj.scrollTop=floor[this.index].offsetTop;
//		animate(obj, {scrollTop: floor[this.index].offsetTop - 20}, 300)
//	}
//	//当移入小按钮时会改变每个按钮的颜色
//}
//
//
////获得焦点
//// 搜索框1
//var text=$(".look")[0];
//text.onfocus=function(){
//	if(text.value=="每日秒杀千件"){
//		text.value="";
//		// text.style.color="red";
//	}
//}
//text.onblur=function(){
//	if(text.value==""){
//		text.value="每日秒杀千件"
//	}
//}
//
//
//// 搜索框2
//
//var text=$(".dzt")[0];
//text.onfocus=function(){
//	if(text.value=="每日秒杀千件"){
//		text.value="";
//		// text.style.color="red";
//	}
//}
//text.onblur=function(){
//	if(text.value==""){
//		text.value="每日秒杀千件"
//	}
//}
//
//
////猫头
//var changtiaobox=$(".main-bottom-right")
//var maoli=$("li",changtiaobox[0])
//var maotou=$(".ZMMS1")
//for (var j = 0; j < maoli.length; j++) {
//	maoli[j].bb=j
//	maoli[j].onmouseover=function  () {
//		animate(maotou[this.bb],{height:18},200)
//	}
//	maoli[j].onmouseout=function  () {
//		animate(maotou[this.bb],{height:0},200)
//	}
//};
