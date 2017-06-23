$(function(){
    $.ajax({
        url:"http://127.0.0.1:9090/api/getbaicaijiatitle",
        dataType:"json",
        success:function(data){
            // console.log(data);
            var tplStr = template("tpl",data);
            $(".ul2").html(tplStr);

            // console.log((data.result).length);
            var count = (data.result).length
            var liArr = document.querySelectorAll("li");
            // var ul = document.querySelector("ul");
            // console.log(liArr);
            var sum = 0
            for(var i = 0;i<liArr.length;i++){
                sum += $("#wapper ul li").eq(i).width() +1;
                console.log(sum)
                
            }
            
            
            $("ul").css({"width":sum});

            
           
            // 菜单内容
            var id = data.result[0].titleId;
             $.ajax({
                url:"http://127.0.0.1:9090/api/getbaicaijiaproduct",
                dataType:"json",
                data: {
                    titleid:id
                },
                success:function(data){
                // console.log(data);
                var tpl2 = template("tpl2",data);
                // console.log(tplStr2);
                $('#main').append(tpl2);
                }
            })
        }
    })
    
            
     

    // 点击导航栏

    
    $("nav").on("click","li",function(){
        // alert(111);
        // 添加颜色
        $(this).addClass("under").siblings("li").removeClass("under");
        // console.log($(this).index());
        var id1 = $(this).index();
         $.ajax({
                url:"http://127.0.0.1:9090/api/getbaicaijiaproduct",
                dataType:"json",
                data: {
                    titleid:id1
                },
                success:function(data){
                // console.log(data);
                var tpl2 = template("tpl2",data);
                // console.log(tpl2);
                $('#main').html(tpl2);
                
                }
            })
    })
   
})

            var myScroll;
            function loaded () {
                setTimeout(function() {
                    myScroll = new IScroll('#wapper', { 
                    scrollX: true,   // 横向
                    scrollY: false   // 纵向
                });
                }, 300);
                
            }