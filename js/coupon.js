$(function(){
    $.ajax({
        url:"http://127.0.0.1:9090/api/getcoupon",
        dataType:"json",
        success:function(data){
            var tplStr = template("tpl",data);
            $(".center1").html(tplStr);
        }
    })
})