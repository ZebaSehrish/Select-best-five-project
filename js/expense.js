
document.getElementById('btn-calculate').addEventListener('click', function () {

    //player number
    const newPlayerInput = playerArray.length;

    //new amount
    const newPlayerInputAmount = getInputFieldValueById('player-field');

    //calculate player expense
    const totalPlayerExpense = newPlayerInput * newPlayerInputAmount;

    //set player expense
    setTextElementvalueById('player-expenses', totalPlayerExpense);

})

document.getElementById('btn-calculate-total').addEventListener('click', function () {

    //player expense
    const newPlayerTotalInputAmount = getTextElementValueById('player-expenses');

    //manager expense
    const newManagerInputAmount = getInputFieldValueById('manager-field');

    //coach expense
    const newCoachInputAmount = getInputFieldValueById('coach-field');

    //calculate total expense

    const expenseTotal = newPlayerTotalInputAmount + newManagerInputAmount + newCoachInputAmount;

    //set total expense

    setTextElementvalueById('expenses-total', expenseTotal);
})




