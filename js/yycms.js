function changeActionn(){
var url = document.getElementById('search_fromm').value;
    $("#search").attr("action", url);
}
function submit(){
	var str = document.getElementById('wd').value;
		if (str==""||str==null){
			alert("请输入影片关键词")
		}else{
			var s=$('#wd').val();
			var ss=$('#search').attr("action");
            s=s.replace(/\s/g,"");
			window.location.href=""+ss+"-"+s+".html";

		}
}
 $(document).ready(function(){
        $(".up-ul1 a").each(function(){
            $this = $(this);
            if($this[0].href==String(window.location)){  
                $(".up-ul1 a").removeClass("btn-warm");
                $this.addClass("btn-warm");  
            }  
        });  
	        $(".up-ul2 a").each(function(){
            $this = $(this);
            if($this[0].href==String(window.location)){  
                $(".up-ul2 a").removeClass("btn-warm");
                $this.addClass("btn-warm");  
            }  
        }); 
	        $(".up-ul3 a").each(function(){
            $this = $(this);
            if($this[0].href==String(window.location)){  
                $(".up-ul3 a").removeClass("btn-warm");
                $this.addClass("btn-warm");  
            }  
        }); 
       $(".up-ul4 a").each(function(){
            $this = $(this);
            if($this[0].href==String(window.location)){  
                $(".up-ul4 a").removeClass("btn-warm");
                $this.addClass("btn-warm");  
            }  
        }); 
		$(".up-ul5 a").each(function(){
            $this = $(this);
            if($this[0].href==String(window.location)){  
                $(".up-ul5 a").removeClass("btn-warm");
                $this.addClass("btn-warm");  
            }  
        });
		$(".up-ul6 a").each(function(){
            $this = $(this);
            if($this[0].href==String(window.location)){  
                $(".up-ul6 a").removeClass("btn-warm");
                $this.addClass("btn-warm");  
            }  
        });
    });
    
function tuichu(){//用户后台账号退出
     $.post("../../../sava/action.php",{yycms:"tuichu"},function(data){
	  layer.msg(data.msg);	 
     window.location.replace("/user/login.html"); 
	 },"json");	
};