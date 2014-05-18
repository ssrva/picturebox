/***
	PictureBox - A simple jQuery LightBox
	Author: Srivathsan MS
	Production: Xproweb
	Website : www.cyberfreax.com
	Creation Date: 18th May, 2014
	license: GNU General Public License version 2 or later
**/

$(document).ready(function(){
	$('body').append("<div class = 'lightboxview'></div>");
	$('body').append("<div id = 'left'><div class = 'leftarrow'><img src = 'images/left.png' width = '32px'></div></div>");
	$('body').append("<div id = 'right'><div class = 'rightarrow'><img src = 'images/right.png' width = '32px'></div></div>");
	$('.lightboxview').append("<img id = 'limage'>");
	$('body').append("<div class = 'close'><img src = 'images/close.png' width = '28px'></div>");
	
	var images = [];
	
	$('.lightbox').children('img').each(function () {
		$(this).attr('onclick', 'showlightbox(' + $(this).attr('src') + ')');
		images.push($(this).attr('src'));
	});
	
	$('.lightbox').children('img').on('click', function () {
		
		var top = (window.pageYOffset || document.scrollTop)  - (document.clientTop || 0);
		$('.lightboxview').css("top", top);
		$('#left').css("top", top);
		$('#right').css("top", top);
		$('.close').css("top", top+15);
		$('.close').fadeIn();
		
		$('.close').mouseover(function(){
			$('.close').addClass("shadow");
		});
		
		$('#left').mouseover(function(){
			$('.leftarrow').children('img').addClass("shadow");
			$('.leftarrow').children('img').css("opacity", "1");
		});
		
		$('#right').mouseover(function(){
			$('.rightarrow').children('img').addClass("shadow");
			$('.rightarrow').children('img').css("opacity", "1");
		});
		
		$('.close').mouseleave(function(){
			$('.close').removeClass("shadow");
		});
		
		$('#left').mouseleave(function(){
			$('.leftarrow').children('img').removeClass("shadow");
			$('.leftarrow').children('img').css("opacity", "0.7");
		});
		
		$('#right').mouseleave(function(){
			$('.rightarrow').children('img').removeClass("shadow");
			$('.rightarrow').children('img').css("opacity", "0.7");
		});
		
		$('.close').click(function(){
			close();
		});
		
		$('.lightboxview').fadeIn();
		var src = $(this).attr('src');
		$('#left').show();
		$('#right').show();
		$('#limage').attr("src", src);
		
		document.onkeydown = function(e){
			if(e.keyCode == 39){
				right();
			}
			if(e.keyCode == 37){
				left();
			}
			if(e.keyCode == 27){
				close();
			}
		}
		
		$('#right').click(function(){
			right();
		});
		
		function right(){
			var x;
			for(x=0; x<images.length; x++){
				if(src==images[x]){
					break;
				}
			}
			if(x==images.length-1){
				x=-1;
			}
			$("#limage").css("opacity", "0");
			$('#limage').attr('src', images[x+1]);
			$("#limage").animate({opacity: 1});
			src = images[x+1];
		}
		
		$('#left').click(function(){
			left();
		});
		
		function left(){
			var x;
			for(x=0; x<images.length; x++){
				if(src==images[x]){
					break;
				}
			}
			if(x==0){
				x=images.length;
			}
			$("#limage").css("opacity", "0");
			$('#limage').attr('src', images[x-1]);
			$("#limage").animate({opacity: 1});
			src = images[x-1];
		}
		
		
	});
	
	function close(){
		$('.lightboxview').fadeOut();
		$('.close').fadeOut();
		$('#left').hide();
		$('#right').hide();
	}
	
});


