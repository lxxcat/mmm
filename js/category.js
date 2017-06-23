$(function(){
     $.ajax({
        url:"http://127.0.0.1:9090/api/getcategorytitle",
        dataType:"jsonp",
        success:function(data){
            console.log(data);
            var tplStr1 = template("tpl1",data);
            // console.log(tplStr1);
            $(".cote").html(tplStr1);
            $(".a1").on("click",function(){          
                var that = $(this);
                $(this).parent().find('ul').toggleClass('hide');
                console.log(that.children())
                if(that.parent().children().length == 1){
                    $.ajax({
                    url:"http://127.0.0.1:9090/api/getcategory",
                    dataType:"json",
                    data:{
                        "titleid":$(this).attr("titleId")
                    },
                    success:function(data){
                       console.log(data);
                        var tplStr2 = template("tpl2",data);
                        console.log(tplStr2);
                        that.parent().append(tplStr2);
                    }
                })
                }
                
            })
        }
    })
})