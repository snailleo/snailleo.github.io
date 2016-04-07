//by20140920

function popWin(obj){
	var _z=9999999;	
	var _obj= $("#"+obj);
	var _clsbtn = _obj.find(".pop_cancle");
	var left=($(window).width()/2-135)+'px';
	var top =($(window).height()/2-90)+'px';
	_obj.css({	"left":left,"top":top,"display":"block","z-index":_z-(-1)});
	setTimeout(function(){
		_obj.addClass('in')	
	})	

	_clsbtn.on("click",function(){
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
