
function show(a){
     $(a+" .dadada").css({
        "font-size": '2vw'
    });
}

function hide(a){
     $(a +" .dadada").css({
        "font-size": '0vw'
    });
}




$("#jeden").mouseenter(function(){show("#jeden");})
$("#jeden").mouseleave(function(){hide("#jeden");})

$("#dwa").mouseenter(function(){show("#dwa");})
$("#dwa").mouseleave(function(){hide("#dwa");})


$("#trzy").mouseenter(function(){show("#trzy");})
$("#trzy").mouseleave(function(){hide("#trzy");})

$("#cztery").mouseenter(function(){show("#cztery");})
$("#cztery").mouseleave(function(){hide("#cztery");})