var S = S || {}

S.vars = {
	h:51,
	close:document.getElementById("close"),
	content:document.getElementById("selColor"),
	gList:document.getElementById('gList')
}

S.utils = {
	showMenu:function(){
		S.vars.content.style.display = 'block';
		S.vars.content.style.transformOrigin = '0px 0px 0px';
		S.vars.content.style.webkitTransition = '0';
		S.vars.content.style.transition = '0';
		S.vars.content.style.webkitTransform = "translate3d(0,0, 0)";
		S.vars.content.style.transform = "translate(0,0)";
		
		S.vars.gList.style.display = 'block';
		getId("gSucc").style.display = 'none';

		var lay = document.createElement('div');
		lay.className = "msite_overlay";
		lay.style.background = "rgba(0,0,0,0.4)";
		document.body.appendChild(lay)

		lay.onclick = S.utils.closeMenu;
		S.vars.close.onclick = function(){S.utils.closeMenu.call(lay);}
	},
	closeMenu:function(){
		$(this).remove();
		S.vars.content.style.display = 'none';
		S.vars.content.style.webkitTransform = "translate3d(0, 0, 0)";
		//视作从添加购物车成功浮层空白处点击
		if (getId("gList").style.display == 'none') {
			$('.guige input[name="skuId"]').val('');
			$('.list_bot .shop_num span').html(1);
			$('.detail_dl p').html($('input[name="minPrice"]').attr('val'));
			var skuOptionArray = $('.kuai span.on');
			skuOptionArray.each(function(){
				$(this).removeClass('on');
			});
		}
	},
	bindDom:function(){
//		getId("add_shop").addEventListener('click',function(){
//			getId("gList").style.display = 'none';
//			getId("gSucc").style.display = 'block';
//		})
	}
}

function getId(id){
	return document.getElementById(id);
}

;(function(){
	$(".detail_size").on('click',function(){
	   S.utils.showMenu();
	})
	S.utils.bindDom()
})()