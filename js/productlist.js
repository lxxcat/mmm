
$(function(){
   
    var str = location.search

    var id = str.slice(12);
    var page=1;
    var totalpage;
    $.ajax({
        url:"http://127.0.0.1:9090/api/getcategorybyid",
        dataType:"json",
        data:{
            "categoryid":id,
        },
        success:function(data){
            console.log(data);
            var tplStr1 = template("tpl1",data);
            $(".title").html(tplStr1);
        }
    })
    render();
    function render(){
        $.ajax({
            url:"http://127.0.0.1:9090/api/getproductlist",
            dataType:"json",
            data:{
            "categoryid":id,
            "pageid":page,
            },
             success:function(data){
                 console.log(data);
            totalpage = Math.ceil(data.totalCount/data.pagesize);
            var tplStr2 = template("tpl2",data);
            $(".p2").html(tplStr2)
            var str ="";
            str +='<select>';
            for(var i = 1; i <= totalpage; i++){
                if(page == i){
                    str +='<option value="'+i+'" selected>'+i+'/'+totalpage+'</option>';
                }else{
                    str +='<option value="'+i+'">'+i+'/'+totalpage+'</option>';
                }
                
            }
            str +='</select>' ;
                
               
            
            $(".selectbox").html(str)
             }
     })
    } 
   
    $(".p2").on("click",".span2",function(){
        if(page < totalpage){
            page++;
            render();
        }
        
    })
    $(".p2").on("click",".span1",function(){
        if(page > 1){
            page--;
        render();
        }
        
    })

    $(".p2").on("change","select",function(){
        page = $(this).val();
        render();
    })

})
