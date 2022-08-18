document.getElementById('btn-deposit').addEventListener('click',function(){
    /*
    1. get the element by id
    2.get value from the element
    3.convert string value to a number
    */
   const newDepositeAmount = getInputFieldValueById('deposite-field');
   /*
    1.GET PREVIOUS DEPOSIT TOTAL BY ID
    */
   const previousDepositeTotal = getElementValueById('deposite-total');
   // calculate new deposit total
   const newDepositTotal = previousDepositeTotal + newDepositeAmount;
   //set deposit total value by id
   setTextElementValueById('deposite-total',newDepositTotal);
   //get previous balance by using the function
   const previousBalanceTotal = getElementValueById('balance-total');
   const newBalanceTotal = previousBalanceTotal + newDepositeAmount;
   setTextElementValueById('balance-total',newBalanceTotal)
})