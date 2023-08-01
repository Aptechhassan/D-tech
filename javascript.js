// j Query code 




 //  var count =setInterval(updated);
 //  var upto = 0;
 //  function updated(){
 //   var counter = document.getElementById("counter1");
 //     counter.innerHTML=++upto;
 // if(upto === 250){
 //   clearInterval(count);
 // } 
 //  }
 let counts = setInterval(updated);
        let upto = 0;
        function updated() {
            let count = document.getElementById("counter");
            count.innerHTML = ++upto;
            if (upto === 10) {
                clearInterval(counts);
            }
        }

        let count = setInterval(updated);
        let aupto = 0;
        function updated() {
            let count = document.getElementById("counter3");
            count.innerHTML = ++aupto;
            if (aupto === 950) {
                clearInterval(counts);
            }
        }