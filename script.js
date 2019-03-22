// Welcome to Kayne and Kim MadLibs!
// This game allows you to plug in certain parts of speech to a story depending on what the user types in.

//Directions: Create an input field and button for each part of speach in the story
//The first blank in this story is already completed for you. The value of what the user types in will be plugged into the story below. Try it out! Then use it as a guide when moving through this project 

var a;

$(".btn1").click(function(){
   a = $(".condition").val(); 
    console.log(a);
  $(".conditionVal").html(a);
});

var b;
$(".btn2").click(function(){
    b=$(".adjective1").val();
     console.log(b);
      $(".adjective1Val").html(b);
});
  
  var c;
$(".btn3").click(function(){
    c=$(".noun1").val();
     console.log(b);
      $(".noun1Val").html(c);
});
 
 
   var e;
$(".btn4").click(function(){
    e=$(".badSit").val();
     console.log(e);
      $(".badSitVal").html(e);
});
 
    var d;
$(".btn5").click(function(){
    d=$(".verb1").val();
     console.log(b);
      $(".verb1Val").html(d);
});
 
 
    var f;
$(".btn6").click(function(){
    f=$(".place").val();
     console.log(f);
      $(".placeVal").html(f);
});
      var g;
$(".btn7").click(function(){
    g=$(".verb2 ").val();
     console.log(g);
      $(".verb2Val").html(g);
});
 