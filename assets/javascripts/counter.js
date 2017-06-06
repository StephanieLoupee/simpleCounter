

(function(){

  //code inside here will only run once the entire page is loaded
  window.onload = function(){

      /*
        best practice is to pull all the element into variables to avoid searching the DOM for these elements more than once

        Note: You can use getElementById or querySelector. Both noted in code below
      */
      var incrementButton = document.querySelector("#increment"); //document.getElementById("increment")
      var decrementButton = document.querySelector("#decrement"); //document.getElementById("decrement")
      var counter     = document.querySelector("#counter"); //document.getElementById("counter")

      incrementButton.addEventListener("click", function() {
        //console.log("+ button clicked");

        //calculate new value for counter
        var newCounterValue = parseInt(counter.innerHTML) + 1;

        //if counter is >= 10, change text color to red
        if(newCounterValue >= 10){
          counter.style.color = "red";
        }

        //update the counter in the DOM
        counter.innerHTML = newCounterValue;

      })
     decrementButton.addEventListener("click", function() {
       //console.log("- button clicked");

       //calculate the new value for our counter
       var newCounterValue = parseInt(counter.innerHTML) - 1;

       if(counter.innerHTML > 0) {
         counter.innerHTML = newCounterValue;
       }

       if(newCounterValue < 10) {
         counter.style.color = "black";
       }

     })



  }

})();
