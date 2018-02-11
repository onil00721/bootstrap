



$("#jejeje").mouseenter(function(){
   
    $("#jejeje").css({"font-size": '3vw'});
    
    //$(".rozwijanyTekst").css({"display": "lock"});
   
    console.log("in");
});

$("#jejeje").mouseleave(function(){
   
    $("#jejeje").css({"font-size": '1vw'});
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



