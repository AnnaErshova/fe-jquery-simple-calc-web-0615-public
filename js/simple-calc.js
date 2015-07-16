$(function(){

var num1       = 0,
    num2       = 0,
      
    operation     = '+',
    result        = 0,

    $number1      = $('#number1'),
    $number2      = $('#number2'),

    $addButton    = $('#add'),
    $subButton    = $('#sub'),
    $multButton   = $('#mult'),
    $divButton    = $('#div'),
    $equalsButton = $('#equals'),

    $opReport     = $('#operation'),

    $result       = $('#result');

    $n1PlusButton = $number1.find('.incr'), // increment num1 by 1
    $n1MinusButton = $number1.find('.decr'), // decrement num1 by 1
    $n1Report     = $number1.find('.number'), 

    $n2PlusButton = $number2.find('.incr'), // increment num2 by 1
    $n2MinusButton = $number2.find('.decr'), // increment num2 by 1
    $n2Report     = $number2.find('.number'),

  // STARTS detailing out incrementing and decrementing
  $n1PlusButton.click(function(){
    num1 += 1;
    $n1Report.text(num1);
  });

  $n1MinusButton.click(function(){
    if (num1 > 0) {
      num1 -= 1;
      $n1Report.text(num1);
    }
  });

  $n2PlusButton.click(function(){
    num2 += 1;
    $n2Report.text(num2);
  });

  $n2MinusButton.click(function(){
    if (num2 > 0) {
      num2 -= 1;
      $n2Report.text(num2);
    }
  });
  // ENDS detailing out incrementing and decrementing

  // STARTS assigning arithmetic operations
  $addButton.click(function(){
    operation = '+';
    $opReport.text(operation);
  });

  $subButton.click(function(){
    operation = '-';
    $opReport.text(operation);
  });

  $multButton.click(function(){
    operation = '*';
    $opReport.text(operation);
  });

  $divButton.click(function(){
    operation = '/';
    $opReport.text(operation);
  });
  // ENDS assigning arithmetic operations

  // STARTS processing results (equals button)
  $equalsButton.click(function(){
    switch(operation) { // implenenting 4 scenarios for 4 arithmetic operations
      case '+': 
        result = num1 + num2; 
          $result.text(result); 
            break;
      case '-': 
        result = num1 - num2; 
          $result.text(result); 
            break;
      case '*': 
        result = num1 * num2; 
          $result.text(result); 
            break;
      case '/': 
        result = num1 / num2;
          $result.text(result); 
            break;
      default : 
        result = NaN; 
          $result.text(result);
    }
  });
  // ENDS processing results (equals button)
}); // ends function
