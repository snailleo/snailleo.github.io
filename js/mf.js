var MF = MF || {}

MF.vars = {
	h:272,
	nav:document.getElementById("nav"),
	content:document.getElementById("content"),
}

MF.utils = {
	showMenu:function(){
		// MF.vars.nav.style.display = 'block';
		MF.vars.nav.style.transformOrigin = '0px 0px 0px';
		// MF.vars.content.style.webkitTransition = '0';
		// MF.vars.content.style.transition = '0';
		// MF.vars.content.style.webkitTransform = "translate3d(" + MF.vars.h + "px, 0, 0)";
		// MF.vars.content.style.transform = "translate(" + MF.vars.h + "px, 0)";
		setTimeout(function(){
			MF.vars.content.classList.add('in');
		},10)
		

		var lay = document.createElement('div');
		lay.className = "msite_overlay";
		MF.vars.content.appendChild(lay)

		lay.onclick = function(){
			$(this).remove();
			MF.vars.nav.style.display = 'none';
			// MF.vars.content.style.webkitTransform = "translate3d(0, 0, 0)";
			MF.vars.content.classList.remove('in');
		}
	}
}

;(function(){
	$(".menu").on('click',function(){
	   MF.utils.showMenu();
	})
})()