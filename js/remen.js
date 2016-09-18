// 获取类名
//var box=getClass("box");
//var zhezhao=getClass("zhezhao")
//// 样式
//for( var i=0;i<box.length;i++){
//	box[i].aa=i;// 把它当做对象来处理 加属性 记录下标  给它一个下标可以找到这个事件
//	box[i].onmouseover=function(){
//       zhezhao[this.aa].style.display="block"
//	}
//	box[i].onmouseout=function(){
//       zhezhao[this.aa].style.display="none"
//	}
//}

// this.aa 当前元素的下标

//图片的透明度
var mahuan=$(".mahuan")
for (var i = 0; i <mahuan.length; i++) {
	mahuan[i].aa=i
	mahuan[i].onmouseover=function(){
		mahuan[this.aa].style.opacity="0.7"
	}
	mahuan[i].onmouseout=function(){
		mahuan[this.aa].style.opacity="1"
	}
};


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

// 图片的放大
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





// banner上面的白色遮照

var btnli=$("li",$(".btn")[0]);
var ul=$("li",$(".UL")[0])
//alert(ul)
var baikuang=$(".baikuang")
// alert(baikuang.length)
for(var i=0;i<ul.length;i++){
   ul[i].pp=i;
	ul[i].onmouseover=function(){
      ul[this.pp].style.background="red"
      baikuang[this.pp].style.display="block"
      for(var j=0;j<baikuang.length;j++){
   	baikuang[j].jj=j;
   	baikuang[j].onmouseover=function(){
      baikuang[this.jj].style.display="block"
      ul[this.jj].style.background="red"
   	}
   	baikuang[j].onmouseout=function(){
      baikuang[this.jj].style.display="none"
      ul[this.jj].style.background=""
   	}
   }
  }
  ul[i].onmouseout=function(){
      ul[this.pp].style.background=""
      baikuang[this.pp].style.display="none"
  }
}
   



// 右边紧邻移入效果开始
var SS=$(".SS")
//var SS7=$(".S7")
//var SS9=$(".SS9")


// alert(SS.length)
var RR=$(".RR")
 // alert(RR.length)
 for(i=0;i<RR.length;i++){
 	RR[i].mm=i
    RR[i].onmouseover=function(){
		//SS7.style.marginTop="100px"
 	// SS[this.mm].style.display="block"
	 animate(SS[this.mm],{left:-90,opacity:1},500)

 	}
 	RR[i].onmouseout=function(){
 	// SS[this.mm].style.display="block"
	 animate(SS[this.mm],{left:-180,opacity:0},500)

 	}
 }

// 二维码
var RR1=$(".RR1")[0]
var S9=$(".S9")[0]
 RR1.onmouseover=function(){
	 animate(S9,{left:-155,opacity:1},500)

 	}
 	RR1.onmouseout=function(){
	 animate(S9,{left:-310,opacity:0},500)

 	}