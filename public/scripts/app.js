document.addEventListener("DOMContentLoaded", function(event) {


//get my dom nodes
  var getAllNums = function() {
    return document.getElementsByClassName("calculator-font")
  }

//write a function that matches the num with the dom node

//add event listener to the dom nodes

//call function



})

var matchNums = function() {
 var nums = getAllNums();
 for(var i = 0; i < nums.length; i++) {
   if("AC" === nums[i].childNodes[0].nodeValue) {
     return nums[i].childNodes[0].nodeValue
   }
 }
}

