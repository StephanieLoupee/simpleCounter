

(function(){

  //code inside here will only run once the entire page is loaded
  window.onload = function(){

      /*
        best practice is to pull all the element into variables to avoid searching the DOM for these elements more than once

        Note: You can use getElementById or querySelector. Both noted in code below
      */
      var incrementButton = $("#increment"); //document.getElementById("increment")
      var decrementButton = $("#decrement"); //document.getElementById("decrement")
      var counter     = $("#counter"); //document.getElementById("counter")

      incrementButton.click (function() {
        //console.log("+ button clicked");

        //calculate new value for counter
         var newCounterValue = parseInt(counter.html()) + 1;

         //if counter is >= 10, change text color to red
         if(newCounterValue >= 10){
           counter.css({color: "red"});
         }

         //update the counter in the DOM
         counter.html(newCounterValue);

       })

        decrementButton.click (function() {
        //  console.log("- button clicked");

        //calculate the new value for our counter
          var newCounterValue = parseInt(counter.html()) - 1;

          if(counter.html() > 0) {
            counter.html (newCounterValue);
          }

          if(newCounterValue < 10) {
            counter.css({color: "black"});
          }

     })

  }

})();
