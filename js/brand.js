$(function(){
    // 电视哪个牌子好
    var id =(location.search).slice(14);
    console.log(id)
    $.ajax({
        url:"http://127.0.0.1:9090/api/getbrand",
        dataType:"json",
        data:{
            "brandtitleid":id,
        },
        success:function(data){
            console.log(data);
            var tplStr1 = template("tpl1",data);
            $(".cote").html(tplStr1);
        }
    })

    // 电视销售排行请求
    $.ajax({
        url:"http://127.0.0.1:9090/api/getbrandproductlist",
        dataType:"json",
        data:{
            "brandtitleid":id,
            "pagesize":4,
        },
        success:function(data){
            console.log(data);
            var tplStr2 = template("tpl2",data);
            $(".p2").html(tplStr2);
            console.log(data.result[0].productId);
             
            // 网友评价请求
            $.ajax({
                url:"http://127.0.0.1:9090/api/getproductcom",
                dataType:"json",
                data:{
                    productid:data.result[0].productId,
                },
                success:function(data){
                    console.log(data);
                    var tplStr3 = template("tpl3",data);
                     $(".zx").html(tplStr3);

                    
                   
                //    再次请求电视销量 取图片和描述
                    $.ajax({
                    url:"http://127.0.0.1:9090/api/getbrandproductlist",
                    dataType:"json",
                    data:{
                        "brandtitleid":id,
                        "pagesize":4,
                    },
                    success:function(data){
                        // console.log(data);
                        console.log(data.result[0].productImg);
                        $(".ls").html(data.result[0].productName);
                        $(".pic1").html(data.result[0].productImg);
                    }
                })

                   
                }
            })
           
        }
    })
    


















})