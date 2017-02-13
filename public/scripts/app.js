document.addEventListener("DOMContentLoaded", function(event){
  var calculatorWindow = document.querySelector(".calculator-display-num");
  var calc = new Calculator(calculatorWindow);
  calc.addEventHandlers();
})

  function Calculator(calculatorWindow) {
    this.currentNums = [];
    this.newNums = [];
    this.calculatorWindow = calculatorWindow;
    this.pushToCurrentNums = this.pushToCurrentNums.bind(this)
  }

  Calculator.prototype = {

    nums:
    {
      '0': 'zero', '1': 'one', '2': 'two', '3': 'three', '4': 'four', '5': 'five',
      '6': 'six', '7': 'seven', '8': 'eight', '9': 'nine', 'AC': 'AC'
    },

    calcOperations:
    {
      '+': function add (currentVal, newVal) { return currrentVal + newVal },
      '-': function subtract (currrentVal, newVal) { return currrentVal - newVal },
      'x': function multiply (currentVal, newVal) { return currrentVal * newVal },
      '÷': function divide (currrentVal, newVal) { return currrentVal / newVal }
    },



    addEventHandlers: function(event) {
      var calcNums = document.querySelector('.calculator-nums')

      calcNums.addEventListener('click', function() {

      })
      // calcNums.addEventListener('click', this.clearDisplay)
    },

    pushToCurrentNums: function(event) {
      console.log('what pushToCurrentNums thinks this is', this)
      this.currentNums.push(Number(event.target.innerText))
      this.displayNums()
    },

    displayNums: function() {
      this.calculatorWindow.innerText = this.currentNums.join('')
    },

    clearDisplay: function() {
      this.currentNums = [];
      this.newNums = [];
      this.calculatorWindow = 0;
    }

  }




