function compute() {
  // Get the values from user inputs
  var principal = parseInt(document.getElementById('principal').value);
  var rate = document.getElementById('rate');
  var years = parseInt(document.getElementById('years').value);

  // Validation if user input a correct value
  if (isNaN(principal) || principal <= 0) {
    alert('Enter a positive number');
    document.getElementById('principal').focus();
  } else {
    // Calculate the interest base on user input
    var interest = (principal * years * rate.value) / 100;
    //Convert the number of year to actual year
    var actualYear = new Date().getFullYear() + years;
    //Output the result
    var result = document.getElementById('result');
    var resultStr = `If you deposit <span class="mark">${principal}</span>,<br/>
  at an interest rate of <span class="mark">${rate.value}%</span>.<br/>
  You will receive an amount of <span class="mark">${interest}</span>,<br/>
  in the year <span class="mark">${actualYear}</span>`;
    result.innerHTML = resultStr;
  }
}

function interestRate() {
  //Display and update the interest rate
  const iRate = document.getElementById('iRate');
  iRate.innerHTML = rate.value;
}
