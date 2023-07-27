// j Query code 

  $(document).ready(function(){
    $(window).scroll(function(){
      var scroll=(window).scrollTop();
      if(scroll > 300){
        $(".red").css("background" ,"black");
        
      }
      else{
        $(".red").css("background" ,"white");
          $ (".red").css("color" ,"black");
      }
    })
  })


   var count =setInterval(updated);
   var upto = 0;
   function updated(){
    var counter = document.getElementById("#counter-up1");
      counter.innerHTML=++upto;
  if(upto === 10){
    clearInterval(count);
  } 
   }