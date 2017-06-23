$(function(){
    var str = location.search;
    // console.log(location.search);
    // console.log(str.slice(11));
    // var id = str.slice(11);
   
    // 标题
    var id1  = str.split("&");
    var id0 = id1[0];
    var id = id0.slice(11);
    //  console.log(id);


     var id3 = id1[1];
     var id4 = id3.slice(11);

            $.ajax({
                url:"http://127.0.0.1:9090/api/getcategorybyid",
                dataType:"json",
                data:{
                    "categoryid":id4,
                },
                success:function(data){
                    // console.log(data);
                    var tplStr4 = template("tpl4",data);
                    $.ajax({
                        url:"http://127.0.0.1:9090/api/getproduct",
                        dataType:"json",
                        data:{
                            "productid":id,
                        },
                        success:function(data){
                            console.log(data);
                            var str = data.result[0].productName;
                            str = str.split(' ')[0];
                        $(".titleName").html(str);
                        }
                    })
                    $(".title").html(tplStr4);
        }
    })

   
    
// 图和描述
    $.ajax({
        url:"http://127.0.0.1:9090/api/getproduct",
        dataType:"json",
        data:{
            "productid":id,
        },
        success:function(data){
           
            var tplStr2 = template("tpl2",data);
            $(".d1").html(tplStr2);
        }
    })


$.ajax({
        url:"http://127.0.0.1:9090/api/getproductcom",
        dataType:"json",
        data:{
            "productid":id,
        },
        success:function(data){
            var tplStr3 = template("tpl3",data);
            $(".ul").html(tplStr3);
        }
    })


})

