// 搜索框1


var text=$(".look")[0];
	text.onfocus=function(){
		if(text.value=="每日秒杀千件"){
			text.value="";
			// text.style.color="red";
		}	
	}
	text.onblur=function(){
		if(text.value==""){
			text.value="每日秒杀千件"
	}
}


// 搜索框2

var text=$(".dzt")[0];
	text.onfocus=function(){
		if(text.value=="每日秒杀千件"){
			text.value="";
			// text.style.color="red";
		}	
	}
	text.onblur=function(){
		if(text.value==""){
			text.value="每日秒杀千件"
	}
}



