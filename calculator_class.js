function Calculator() {
  this.currentNums = [];
  this.newNums = [];
  this.calculatorWindow = document.querySelector(".calculator-display-num");
}

Calculator.prototype = {

  displayNums: function() {
    this.calculatorWindow.innerText = this.currentNums.join('')
  }

  clearDisplay: function() {
    var result = parseInt(this.calculatorWindow.innerText) || 0
    currentNums.push(result);
  }

  multiply: function() {

  }

  addition: function() {

  }

  subtraction: function() {

  }

  division: function() {

  }

  percentage: function() {

  }

}



Calculator.prototype.subtraction = function() {

}

Calculator.prototype.division = function() {

}

Calculator.prototype.percentage = function() {

}

Calculator.prototype.decimal = function() {

}




















onclick = function() {

  if(event.target.innerText === x)
}

var multiply = function() {

}