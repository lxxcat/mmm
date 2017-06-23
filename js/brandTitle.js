$(function(){
    $.ajax({
        url:"http://127.0.0.1:9090/api/getbrandtitle",
        dataType:"json",
        // data
        success:function(data){
            var tplStr1 = template("tpl1",data);
            $(".cote").html(tplStr1);
        }
    })
})