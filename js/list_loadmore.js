var myScroll,
	pullUpEl, pullUpOffset,
	generatedCount = 0;



function loaded() {
	pullUpEl = document.getElementById('pullUp');	
	pullUpOffset = pullUpEl.offsetHeight;	
	
	myScroll = new iScroll('content', {
		useTransition: true,
		hScroll:false,
		onScrollMove: function () {
			if (this.y < (this.maxScrollY - 5) && !pullUpEl.className.match('flip')) {
				pullUpEl.className = 'flip';
				pullUpEl.querySelector('.la_more').innerHTML = '松开加载更多...';
				this.maxScrollY = this.maxScrollY;
			} else if (this.y > (this.maxScrollY + 5) && pullUpEl.className.match('flip')) {
				pullUpEl.className = '';
				pullUpEl.querySelector('.la_more').innerHTML = '上拉加载更多...';
				this.maxScrollY = pullUpOffset;
			} 
		},
		onScrollEnd: function () {
			if (pullUpEl.className.match('flip')) {
				pullUpEl.className = 'loading';
				pullUpEl.querySelector('.la_more').innerHTML = '加载中...';				
				pullUpAction();
			}
		}
	});
	
	// setTimeout(function () { document.getElementById('wrapper1').style.left = '0'; }, 800);
	
}



document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);

document.addEventListener('DOMContentLoaded', function () { setTimeout(loaded, 200); }, false);