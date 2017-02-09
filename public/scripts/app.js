document.addEventListener("DOMContentLoaded", function(event) {


//get my dom nodes
  // var getAllNums = function() {
  //   var data = document.getElementsByClassName("calculator-font");
  //   return data;
  // }

  // var getAllOperations = function() {
  //   var data = document.getElementsByClassName("calculator-operations-font");
  //   return data;
  // }

  // var operations =
  // {
  //   clear: getAllNums()[0].childNodes[0].nodeValue,
  //   plusOrNeg: getAllNums()[1].childNodes[0].nodeValue,
  //   percent: getAllNums()[2].childNodes[0].nodeValue,
  //   decimal: getAllNums()[13].childNodes[0].nodeValue,
  //   multiply: getAllOperations()[0].childNodes[0].nodeValue,
  //   add: getAllOperations()[1].childNodes[0].nodeValue,
  //   subtract: getAllOperations()[2].childNodes[0].nodeValue,
  //   divide: getAllOperations()[3].childNodes[0].nodeValue,
  // }
  //

  var calcNums = document.querySelector('.calculator-nums');
  calcNums.onclick = function calcNums(event) {
    var calculatorWindow = document.querySelector(".calculator-display-num");
    calculatorWindow.innerText = parseInt(calculatorWindow.innerText + event.target.innerText);
    var currentNums = calculatorWindow.innerText;

    var clearCalc = function() {
      var ac = document.querySelector('#ac');
      ac.onclick = function(event) {
        var calculatorWindow = document.querySelector(".calculator-display-num");
        calculatorWindow.innerText = 0
      }
    }

    var multiply = function() {
      var calculatorWindow = document.querySelector(".calculator-display-num");
      var newNums = calculatorWindow.innerText;
      var result = currentNums * newNums
      if(event.target.innerText === '='){
        return result
      }
    }

    if(event.target.innerText === 'AC') {
      clearCalc()
    } else if(event.target.innerText === 'x') {
      console.log('we are here now', event.target.innerText)
      var calculatorWindow = document.querySelector(".calculator-display-num");
      multiply()
    }
  }



})



