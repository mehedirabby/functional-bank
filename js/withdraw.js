/*
    1.Add Withdraw button event handler
    2.get withdraw amount by using getInputFieldValueById
    3.previous withdraw amount by using getTextElementValueById function
    4.calculate new withdraw total
    4.5--> set new withdraw total by usinng setTextElementValueById function
    5.get previous balance total
    6.calculate new balance total

*/


document.getElementById('btn-withdraw').addEventListener('click',function(){
    
    const newWithdrawAmount = getInputFieldValueById('withdraw-field');

    const previousWithdrawTotal = getElementValueById('withdraw-total');
    const newWithDrawTotal = previousWithdrawTotal + newWithdrawAmount;
    setTextElementValueById('withdraw-total',newWithDrawTotal);

    const previousBalanceTotal =  getElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    setTextElementValueById('balance-total',newBalanceTotal);

})
