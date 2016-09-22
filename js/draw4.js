$(function(){
    $(".box .tops ul li").click(function(){
        var index=$(".box .tops ul li").index(this);
        $(".box .bottoms .lefts ul").removeClass("xian").eq(index).addClass("xian")
        $(".box .tops ul li").removeClass("color").eq(index).addClass("color")
    })
    $(".box .bottoms .lefts ul li").click(function(){
        var index=$(".box .bottoms .lefts ul li").index(this)
        $(".box .bottoms .lefts ul li").removeClass("color").css("text-shadow","none").eq(index).addClass("color").css("text-shadow","0 0 2px red")
    })


    var canvas=$("canvas")[0]
    var copy=$(".copy")[0]
    var xp=$(".xp")[0]
    var cobj=canvas.getContext("2d")
    var obj=new shape(copy,cobj,xp);

    $(".box .bottoms .lefts ul:eq(1) li").click(function(){
        var types=$(this).attr("data-role");
        obj.type=types;
        if(types=="pen"){
            obj.pen();
        }else{
            if(types=="bian"){
                obj.bianNum=prompt("请输入边数","5")
            }
            if(types=="jiao"){
                obj.jiaoNum=prompt("请输入角数","5")
            }
            obj.draw();
        }
    })

    $(".box .bottoms .lefts ul:eq(2) li").click(function(){
        var styles=$(this).attr("data-role")
        obj.style=styles;
        obj.draw()
    })

    $(".str").change(function(){
        obj.strokeStyle=$(this).val()
    })


    $(".fill").change(function(){
        obj.fillStyle=$(this).val()
    })

    $(".box .bottoms .lefts ul:eq(4) li").click(function(){
        obj.lineWidth=$(this).attr("data-role")
        obj.draw()
    })

    $(".box .bottoms .lefts ul:eq(4) li input").change(function(){
        obj.lineWidth=$(this).val()
        obj.draw()
    })


   $(".tops ul li:last").click(function(){
           obj.clear()
   })

    $(".box .bottoms .lefts ul:eq(5) li input").change(function(){
        obj.xpsize=$(this).val()
        obj.clear()
    })



    $(".back").click(function(){
        obj.back()
    })
    $(".save").click(function(){
        if(obj.history.length>0){
            obj.history=[];
            location.href=canvas.toDataURL().replace("data:image/png","data:stream/octet");
        }
    })
    $(".new").click(function(){
        if(obj.history.length>0){
            var yes=confirm("是否保存");
            if(yes==true){
                location.href=canvas.toDataURL().replace("data:image/png","data:stream/octet");
                obj.history=[];
                obj.cobj.clearRect(0,0,canvas.width,canvas.height);
            }else{
                obj.history=[];
                obj.cobj.clearRect(0,0,canvas.width,canvas.height);
            }
        }
    })
})