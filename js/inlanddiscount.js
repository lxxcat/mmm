$(function(){
    $.ajax({
        url:"http://127.0.0.1:9090/api/getinlanddiscount",
        dataType:"jsonp",
        success:function(data){
                console.log(data);
                var tplStr1 = template("tpl1",data);
                $(".product-list").html(tplStr1);
        },
        error:function(data){
            console.log("报错");
        }
    })
})