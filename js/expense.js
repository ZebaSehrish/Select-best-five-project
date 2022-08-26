
document.getElementById('btn-calculate').addEventListener('click', function () {
    //new player
    const newPlayerInput = playerArray.length;
    //new amount
    const newPlayerInputAmount = getInputFieldValueById('player-field');

    //calculate 
    const totalPlayerExpense = newPlayerInput * newPlayerInputAmount;

    //set amount
    setTextElementvalueById('player-expenses', totalPlayerExpense);
})

document.getElementById('btn-calculate-total').addEventListener('click', function () {
    //player amount

    const newPlayerTotalInputAmount = getTextElementValueById('player-expenses');

    //manager amount
    const newManagerInputAmount = getInputFieldValueById('manager-field');

    //coach amount
    const newCoachInputAmount = getInputFieldValueById('coach-field');

    //calculate total expense

    const expenseTotal = newPlayerTotalInputAmount + newManagerInputAmount + newCoachInputAmount;

    //set total expense

    setTextElementvalueById('expenses-total', expenseTotal);
})




