//by20140920

function popWin(obj){
	var arr = [];
	var intst = [];
	var _z=9999999;	
	var _obj= $("#"+obj);
	var _clsbtn = _obj.find(".pop_cancle");
	var _yestn = _obj.find(".pop_yes");
	var left=($(window).width()/2-160)+'px';
	var top =($(window).height()/2-90)+'px';
	_obj.css({	"left":left,"top":top,"display":"block","z-index":_z-(-1)});
	setTimeout(function(){
		_obj.addClass('in')	
	})	

	_clsbtn.on("click",function(){
		$(this).parents("#detail").hide().removeClass('in').siblings("#maskLayer").remove();
	});
	_yestn.on("click",function(){console.log('click')
		$('.pop_top .on').each(function(i,a){
			arr.push(a.innerHTML);
			intst.push(a.id)
		})
		$('#ok').val(arr);
		per.interest.value = intst.join(',')
		$(this).parents("#detail").hide().removeClass('in').siblings("#maskLayer").remove();
	});
	
	var $mask = $('<div id="maskLayer" class="fade"></div>');
	$mask.appendTo("body").css({
		"background":"#000","top":0,"left":0,"position":"absolute","zIndex":_z
	});
	setTimeout(function(){
		$mask.css({"opacity":".4"})
	})
	
	reModel();

	$(window).bind("resize",function(){reModel();});

	function reModel(){
		
		height = $(window).height(),
		width = $(window).width();
		$("#maskLayer").css({
			"height": height,"width": width
		});
	};
}

function malert(text){
    var _z=9999999,_html;   
    var _obj = document.createElement('div');
    _obj.className = 'tanchu';
    _obj.id = 'tanchu';

    _html = '<p>'+text+'</p>';
    document.body.appendChild(_obj);
    _obj.innerHTML = _html;

    var left=($(window).width()-$(".tanchu").width()-44)/2+'px';
    var top =($(window).height()-$(".tanchu").width())/2+'px';
    $(".tanchu").css({  "left":left,"top":top,"display":"block","z-index":_z-(-1)});

    setTimeout(function(){
        $(".tanchu").remove();  
    },3000)
}


function pops(obj){
	var _z=9999999;	
	var _obj= $("#"+obj);
	console.log(_obj.height())
	var _clsbtn = _obj.find(".pop_cancle");
	var left=($(window).width()/2-_obj.width()/2)+'px';
	var top =($(window).height()/2-_obj.height()/2+document.body.scrollTop)+'px';
	//alert(window.innerHeight)
	_obj.css({	"left":left,"top":top,"display":"block","z-index":_z-(-1)});
	setTimeout(function(){
		_obj.addClass('in')	
	})	

	_clsbtn.on("click",function(){
		$(this).parents("#"+obj).hide().removeClass('in').siblings("#maskLayer").remove();
	});
	
	var $mask = $('<div id="maskLayer" class="fade"></div>');
	$mask.appendTo("body").css({
		"background":"#000","top":0,"left":0,"position":"absolute","zIndex":_z
	});
	setTimeout(function(){
		$mask.css({"opacity":".4"})
	})
	

	$(window).bind("resize",function(){reModel();});

	function reModel(){
		setTimeout(function(){
			var top =($(window).height()/2-_obj.height()/2+document.body.scrollTop-30)+'px';
		_obj.css({	"left":left,"top":top,"z-index":_z-(-1)});
		},1000)
		
		// alert(document.body.scrollTop);
		// height = $(window).height(),
		// width = $(window).width();
		// $("#maskLayer").css({
		// 	"height": document.body.offsetHeight,"width": width
		// });
	};
}