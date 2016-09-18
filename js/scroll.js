 var obj;
 document.documentElement.scrollTop=1;
	if(document.documentElement.scrollTop){
		obj=document.documentElement;
	}else{
        obj=document.body;
	}
var box=$(".hsgdt")[0];
var flagdown="1"//开关是控制滚动条出现的位置，可以让它在一触发时就执行相对应的代码。
var flagup="1"
var sidebarleft=$(".sidebarleft")[0]

var floor=$(".hong");
var btnli=$(".sidebarleft2");
var colorarr=["#ea5f8d","#f7a945","#19c8a9","#f15453","#64c333","#0aa6e8","#131418","#131418"]
var now=0;
window.onscroll=function(){//滚动条一发生变化就开启执行代码
	if(obj.scrollTop>=1000){
		if (flagdown==1){
			animate(box,{top:0},200)
			animate(sidebarleft,{width:38,height:380},200)
			flagdown=2;	
		}
		flagup=1;
	}else
		{if(flagup==1){
			animate(box,{top:-50},200)
			animate(sidebarleft,{width:0,height:0},200)
		   flagup=2 ;  
		}
		flagdown=1;
	}
	for(var i=0;i<floor.length;i++){
		// console.log(floor[i].offsetTop)
	if(floor[i].offsetTop<=obj.scrollTop+200){
		for(var j=0;j<btnli.length;j++){
			btnli[j].style.background=""
		}btnli[i].style.background=colorarr[i]
			now=i;//在滑动滚动条有一个按钮点亮时，这时把鼠标移入到别的按钮上时，之前的按钮依然会点亮。
		   }else{
		   	btnli[i].style.background=""
		   }
		}

	////图片的按需加载
    //
	//var clientH=document.documentElement.clientHeight;
	////alert(clientH)
	//for(var i=0;i<floor.length;i++){
	//	if(floor[i].offsetTop<obj.scrollTop+clientH-100&&!floor[i].flag){
	//		//var imgs=hong[i].getElementsByTagName("img")
	//		var imgs=$("img",floor[i])
	//		alert(imgs.length)
	//		floor[i].flag=true;
	//		for(j=0;j<imgs.length;j++){
	//			imgs[j].src=imgs[j].getAttribute("url")
	//		}
    //
	//	}
	//}
}
		  
//当你滑滚动条时，每过一段距离时就会点亮左边的一个小按钮
	//单击事件每当我们单击左边的小按钮时，相应的小按钮的背景会点亮，
for(var i=0;i<btnli.length;i++){
	btnli[i].index=i;//移开时点亮的按钮是继续点亮的
	btnli[i].onclick=function(){
		now=this.index;//下标的控制
		// obj.scrollTop=floor[this.index].offsetTop;
		animate(obj,{scrollTop:floor[this.index].offsetTop-20},300)
	}
	//当移入小按钮时会改变每个按钮的颜色
btnli[i].onmouseover=function(){
	for(var j=0;j<btnli.length;j++){
		if(now!=j){//当鼠标移开：当前点亮的按钮依然是点亮时的颜色，别的会随着鼠标的移动而变色
		btnli[j].style.background=""	
		}
	  }
	this.style.background=colorarr[this.index];//鼠标移入时每个按钮的颜色在之前定义的数组的控制下变颜色
  }
btnli[i].onmouseout=function(){
	for(var j=0;j<btnli.length;j++){
		if(now!=j){
			btnli[j].style.background=""
		}
	  }
    }
}