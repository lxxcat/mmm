$(function(){
    var str = location.search;
    var id = str.slice(11)
    // console.log(id);
    $.ajax({
        url:"http://127.0.0.1:9090/api/getmoneyctrlproduct",
        dataType:"json",
        data:{
            "productid":id,
        },
        success:function(data){
            console.log(data);
            var tplStr1 = template("tpl1",data);
            $(".content").html(tplStr1);
            $(".center").html(data.result[0].productCity);
            $(".pl").html(data.result[0].productComment);
        },
        error:function(data){
            console.log("出错了")
        }
    })
    //  $.ajax({
    //     url:"http://127.0.0.1:9090/api/getmoneyctrlproduct",
    //     dataType:"json",
    //     data:{
    //         "productid":id,
    //     },
    //     success:function(data){
    //         console.log(data);
    //         var tplStr2 = template("tpl2",data);
    //         $(".tp3").html(tplStr2);
    //         // $(".center").html(data.result[0].productCity);
    //     },
    //     error:function(data){
    //         console.log("出错了")
    //     }
    // })
})