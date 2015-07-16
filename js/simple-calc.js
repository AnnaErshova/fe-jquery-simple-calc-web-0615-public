// I am going to permit negative numbers in variables even though the prototype doesn't

$(function(){

  // SETTING THE STAGE
  var 
    // naming the 4 variables shown on the page:
    num1       = 0,
    num2       = 0,
    operation = '', // this will take on 1 of 4 arithmetic operations, default is + 
    outcome = 0,

    // names equals button and outcome
    $equalsButton = $('#equals'),
    $resultForm = $('#result'),

    // name button elements for the 4 functions in +|-|/|*:
    $selectedOperation = $('#operation'),
      $addButton = $('#add'),
      $subtractButton = $('#sub'),
      $multButton = $('#mult'),
      $divButton = $('#div'),

    // affiliating buttons for 1st and 2nd variables
    $number1 = $('#number1'), // first button affiliation
    $number2 = $('#number2'), // second button affiliation 

      $plusButton1 = $number1.find('.incr'), // increment num1 by 1
      $minusButton1 = $number1.find('.decr'), // decrement num1 by 1
      $buttonShown1 = $number1.find('.number'), 

      $plusButton2 = $number2.find('.incr'), // increment num2 by 1
      $minusButton2 = $number2.find('.decr'), // increment num2 by 1
      $buttonShown2 = $number2.find('.number');

  // ACTUAL FUNCTIONS START HERE:

  // STARTS incrementing and decrementing num1 and num2
  $plusButton1.click(function(){
    num1 ++;
    $buttonShown1.text(num1);
  });

  $plusButton2.click(function(){
    num2 ++;
    $buttonShown2.text(num2);
  });

  $minusButton1.click(function(){
    num1 --;
    $buttonShown1.text(num1);
  });

  $minusButton2.click(function(){
    num2 --;
    $buttonShown2.text(num2);
  });
  // ENDS incrementing and decrementing num1 and num2

  // STARTS assigning arithmetic operations to click of 1 of 4 buttons
  $addButton.click(function(){
    operation = '+';
    $selectedOperation.text(operation);
  });

  $subtractButton.click(function(){
    operation = '-';
    $selectedOperation.text(operation);
  });

  $multButton.click(function(){
    operation = '*';
    $selectedOperation.text(operation);
  });

  $divButton.click(function(){
    operation = '/';
    $selectedOperation.text(operation);
  });
  // ENDS assigning arithmetic operations

  // STARTS processing results (equals button)
  $equalsButton.click(function(){
    switch(operation) { // implenenting 4 scenarios for 4 arithmetic operations
      case '+': 
        outcome = num1 + num2; 
          $resultForm.text(outcome); 
            break;
      case '-': 
        outcome = num1 - num2; 
          $resultForm.text(outcome); 
            break;
      case '*': 
        outcome = num1 * num2; 
          $resultForm.text(outcome); 
            break;
      case '/': 
        if (num2 == 0) {
          outcome = "can't divide by 0";
          $resultForm.text(outcome);
        }
        else if (num2 != 0) {
          outcome = num1 / num2;
          $resultForm.text(outcome); 
            break;}; // interestingly enough, it returns 'infinity' when divided by 0
    }
  });
  // ENDS processing results (equals button)
}); // ends function
