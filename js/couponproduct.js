$(function(){
    var str = location.search;
    var id=str.slice(10);
    // console.log(id);
    $.ajax({
        url:"http://127.0.0.1:9090/api/getcouponproduct",
        dataType:"json",
        data:{
            couponid:id,
        },
        success:function(data){
            console.log(data);
            // 渲染
            var tplStr = template("tpl",data);
            $(".product-list").html(tplStr);
            // 点击显示事件
            var index;
            $(".a").on("click",function(){
                $(".layer").removeClass("h");
                var str = $(this).children(".pic").children("img").attr("src");
                $(".img2").attr("src",str);
                var index = $(this).index();
                // 下一张
                $(".sp2").on("click",function(){
                    index++;
                    if(index> $(".a").length){
                        index=$(".a").length;
                        alert("最后一张了")
                    }
                    var str = $(".a").eq(index).children(".pic").children("img").attr("src");
                    $(".img2").attr("src",str);
                })
                // 上一张
                $(".sp1").on("click",function(){
                    index--;
                    if(index<=0){
                        index=0;
                        alert("已经是第一张了")
                    }
                    var str = $(".a").eq(index).children(".pic").children("img").attr("src");
                    $(".img2").attr("src",str);
                })
                // 点击隐藏事件
                $(".sp3").on("click",function(){
                    $(".layer").addClass("h");
                })
            })
        }
    })






$(function(){
    var seach = window.location.search;
    seach = seach.slice(10);
    $.ajax({
        url:"http://127.0.0.1:9090/api/getcouponproduct",
        dataType:"json",
        data:{
            couponid:seach
        },
        success:function(data){
            var index;
            var str;
            //渲染
            var tpl = template("tpl",data);
            $(".favourable").append(tpl);
                $(".preferential").on("click",function(){
                    //图片标签
                    str = $(this).children(".liher").children("img").attr("src");
                    $(".bigImg").removeClass("hidden");
                    $(".mesimg").attr("src",str);
                     index = $(this).index();
                    //点击隐藏
                    $(".bgi").on("click",function(){
                        $(".bigImg").addClass("hidden");
                    })
                    
                })
                //下一张
                $(".icon-xiayizhang").on("click",function(){
                    index++;
                    if(index >= $(".preferential").length ){
                        index = $(".preferential").length;
                        alert("最后一张了.");
                    }
                    // 替换图片地址
                    str = $(".preferential").eq(index).children(".liher").children("img").attr("src");
                    $(".mesimg").attr("src",str);
                })
                    //上一张
                  $(".icon-shangyizhang").on("click",function(){
                    index--;
                    if(index < 0 ){
                        index = 0;
                        alert("最前面一张了.");
                    }
                    //替换图片地址
                    str = $(".preferential").eq(index).children(".liher").children("img").attr("src");
                    $(".mesimg").attr("src",str);
                })
            }
        })
    })








    
})