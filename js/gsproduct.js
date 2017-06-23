$(function(){
    // 图片 价格
    var shopid = 0;
    var areaid = 0;
    $.ajax({
        url:"http://127.0.0.1:9090/api/getgsproduct",
        dataType:"json",
        data:{
            shopid:0,
            areaid:0,
        },
        success:function(data){
            console.log(data);
            var tplStr3 = template("tpl3",data);
            $(".center1").html(tplStr3);
        }
    })
    
//  京东
    $.ajax({
        url:"http://127.0.0.1:9090/api/getgsshop",
        dataType:"json",
        success:function(data){
            console.log(data);
            var tplStr1 = template("tpl1",data);
            $(".popsort").html(tplStr1);
            $(".on").on("click",function(){
                $(".popsort").toggleClass("h");
                $(".a1").on("click",function(){
                    $(".popsort").addClass("h");
                    var id1 = $(this).index();
                    $.ajax({
                        url:"http://127.0.0.1:9090/api/getgsproduct",
                        dataType:"json",
                        data:{
                            shopid:id1,
                            areaid:0,
                        },
                        success:function(data){
                            console.log(data);
                            var tplStr3 = template("tpl3",data);
                            $(".center1").html(tplStr3);
                        }
                    })
                })
            })
        }
    })
   
            




    // 华北地区
    $.ajax({
        url:"http://127.0.0.1:9090/api/getgsshoparea",
        dataType:"json",
        success:function(data){
            console.log(data);
            var tplStr2 = template("tpl2",data);
            $(".popcat").html(tplStr2);
            // 点击事件
             $(".on1").on("click",function(){
                $(".popcat").toggleClass("h");
                $(".a2").on("click",function(){
                    $(".popcat").addClass("h");
                    // 请求图片事件
                    var id2 = $(this).index();
                    $.ajax({
                            url:"http://127.0.0.1:9090/api/getgsproduct",
                            dataType:"json",
                            data:{
                                shopid:0,
                                areaid:id2,
                            },
                            success:function(data){
                                console.log(data);
                                var tplStr3 = template("tpl3",data);
                                $(".center1").html(tplStr3);
                            }
                        })
                })
            })
            
        }
    })
   



    
    


})

    