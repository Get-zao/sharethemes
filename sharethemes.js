$(document).ready(function(){	
	var n=0;
	var next=0;
	var t=setInterval(move,5000)
	function move(){
		next=n+1;
		if(next>=$('.banner').length){
			next=0;
		}
		$(".banner").eq(n).hide();
		$(".banner").eq(next).show();
		n=next;
	}
	$(".left1").click(function(){
		next=n-1;
		if(next<0){
			next=$(".banner").length-1;
		}
		$(".banner").eq(n).hide();
		$(".banner").eq(next).show();		
		n=next;
	})
	$(".right1").click(function(){
		move();
	})
//	$(".banner-nei").hover(function(){
//		clearInterval(t);
//	},function(){
//		t=setInterval(move,5000)
//	})

		$('.banner-wai').mouseover(function(){
			clearInterval(t);
		});
		$('.banner-wai').mouseout(function(){
			t=setInterval(move,5000);
		});
	
		$(".chose-left-top").each(function(index){
		$(this).click(function(){
		$(".chose-left-top").css("background","#FAFAFA").eq(index).css("background","#fff")
	//	$(".chose-left-top a").css("border","0").eq(index).css("border-top","1px solid #79BE0B")
		$(".chose-left-nei").css("display","none").eq(index).css("display","block")
		})
	
	
})
	

	
	
	
})
