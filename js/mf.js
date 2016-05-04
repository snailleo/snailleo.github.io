var MF = MF || {}

MF.vars = {
	h:272,
	nav:document.getElementById("nav"),
	content:document.getElementById("content"),
}

MF.utils = {
	showMenu:function(){
		MF.vars.nav.style.display = 'block';
		// MF.vars.nav.style.zIndex = '0';
		MF.vars.nav.style.transformOrigin = '0px 0px 0px';
		// MF.vars.content.style.webkitTransition = '0';
		// MF.vars.content.style.transition = '0';
		// MF.vars.content.style.webkitTransform = "translate3d(" + MF.vars.h + "px, 0, 0)";
		// MF.vars.content.style.transform = "translate(" + MF.vars.h + "px, 0)";
		setTimeout(function(){
			MF.vars.content.classList.add('in');
			MF.vars.content.style.height = window.innerHeight+"px";
		},10)
		setTimeout(function(){
			MF.vars.nav.style.zIndex = '0';
		},800)
		

		var lay = document.createElement('div');
		lay.className = "msite_overlay";
		MF.vars.content.appendChild(lay)

		lay.onclick = function(){
			$(this).remove();
			MF.vars.nav.style.zIndex = '-1';
			MF.vars.content.classList.remove('in');
			MF.vars.content.style.height = "auto";
			setTimeout(function(){
				MF.vars.nav.style.display = 'none';
				document.getElementsByClassName('shop_bottom')[0].style.position = "fixed";
				alert(123)
			},800)
		}
	},
	setLi:function(cla){
		var li = document.querySelectorAll('.'+cla+' li');
		var str = '';
		for(var i=0;i<li.length;i++){
			if(i == 0){
				str += '<li class="on"><a href="javascript:void(0);"></a></li>';
			}else{
				str += '<li><a href="javascript:void(0);"></a></li>';
			}
		}
		document.getElementById("scroll_position").innerHTML = str;
	}
}

function tanchu(text,type){
	var _z=9999999,_html;	
	// var _obj= $("<div class='tanchu'>"+text+"</div>");
	var _obj = document.createElement('div');
	_obj.className = 'tanchu';
	_obj.id = 'tanchu';

	if(type==1){
		_html = '<span class="tsucc"></span><p>'+text+'</p>'
	}else if(type == 2){
		_html = '<span class="ttan"></span><p>'+text+'</p>'
	}else{
		_html = '<p>'+text+'</p>'
	}

	document.body.appendChild(_obj);
	_obj.innerHTML = _html;

	var left=($(window).width()-$(".tanchu").width()-44)/2+'px';
	var top =($(window).height()-$(".tanchu").width())/2+'px';
	$(".tanchu").css({	"left":left,"top":top,"display":"block","z-index":_z-(-1)});
}

function pop_box(text,type){
	tanchu(text,type);
	setTimeout(function(){
		$(".tanchu").remove();	
	},3000)
}

;(function(){
	$(".menu").on('click',function(){
	   MF.utils.showMenu();
	})
})()

// var myscroll;
// function loaded(){
// 	myscroll=new iScroll("nav");
// }
// window.addEventListener("DOMContentLoaded",loaded,false)