



$("#dw").mouseenter(function(){
   
    $("#jejeje").css({"height": '300px'});
   
    console.log("in");
});

$("#dw").mouseleave(function(){
   
    $("#jejeje").css({"height": '100px'});
    console.log("out");
});

/*
$(".dwa").mouseout(function(){
    $(".jeden").css({"display": "none"});
    console.log("you click");
});

              
              */
    
$( "button" ).click(function() {
  
  $( ".je" ).fadeIn( 3000, function() {
    $( "span" ).fadeIn( 100 );
  });
  return false;
});

$( "button" ).click(function() {
  $( ".je" ).fadeIn( 3000);
  return false;
});



