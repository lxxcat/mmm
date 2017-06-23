$(function(){

    var page=0;    
    var totalpage;
    render();
    function render(){
        $.ajax({
            url:"http://127.0.0.1:9090/api/getmoneyctrl",
            dataType:"json",
            data:{
            "pageid":page,
            },
             success:function(data){
                //  console.log(data);
            totalpage =Math.ceil(data.totalCount/data.pagesize);
            var tplStr2 = template("tpl2",data);
            console.log(tplStr2);
            $(".product-list").html(tplStr2);
            var str ="";
            str +='<select>';
            for(var i = 0; i < totalpage; i++){
                if(page == i){
                    str +='<option value="'+i+'" selected>'+(i+1)+'/'+totalpage+'</option>';
                }else{
                    str +='<option value="'+i+'">'+(i+1)+'/'+totalpage+'</option>';
                }
                
            }
            str +='</select>' ;
                
               
            
            $(".selectbox").html(str)
             }
     })
    } 
   
    $(".product-list").on("click",".span2",function(){
        console.log(1);
        if(page < totalpage){
            page++;
            render();
        }
        
    })
    $(".product-list").on("click",".span1",function(){
        if(page > 1){
            page--;
        render();
        }
        
    })

    $(".product-list").on("change","select",function(){
        page = $(this).val();
        render();
    })

})