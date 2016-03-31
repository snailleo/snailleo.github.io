var S = S || {}

S.vars = {
	h:300,
	// nav:document.getElementById("nav"),
	content:document.getElementById("selColor"),
}

S.utils = {
	showMenu:function(){
		S.vars.content.style.display = 'block';
		S.vars.content.style.transformOrigin = '0px 0px 0px';
		S.vars.content.style.webkitTransition = '0';
		S.vars.content.style.transition = '0';
		S.vars.content.style.webkitTransform = "translate3d(0,-" + S.vars.h + "px, 0)";
		S.vars.content.style.transform = "translate(0,-" + S.vars.h + "px)";

		var lay = document.createElement('div');
		lay.className = "msite_overlay";
		S.vars.content.appendChild(lay)

		lay.onclick = function(){
			$(this).remove();
			S.vars.content.style.display = 'none';
			S.vars.content.style.webkitTransform = "translate3d(0, 0, 0)";
		}
	}
}

;(function(){
	$(".detail_size").on('click',function(){
	   S.utils.showMenu();
	})
})()