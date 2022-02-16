//----totalpaid ----
function totalPaid(inputPaid) {
    const amontPaid = document.getElementById(inputPaid);
    const total = amontPaid.value;
    amontPaid.value = '';
    return total;
};



document.getElementById('calculate-btn').addEventListener('click', function () {
    const foodAmont = totalPaid('paid-food');
    const rentAmont = totalPaid('paid-rent');
    const clothesAmont = totalPaid('paid-clothes');
    let totalAmont = parseInt(foodAmont) + parseInt(rentAmont) + parseInt(clothesAmont);

    //--now last amont after paid ---
    const myIncome = document.getElementById('my-income');
    const totalIncome = myIncome.value;
    let balance = parseInt(totalIncome) - parseInt(totalAmont);

    const totalExpenses = document.getElementById('total-expenses').innerText = totalAmont;
    const haveBalance = document.getElementById('have-balance').innerText = balance;

});


//----------------------Saving-------------------------//

document.getElementById('save-btn').addEventListener('click', function () {
    const myIncome = document.getElementById('my-income');
    const totalIncome = myIncome.value;
    const save = document.getElementById('saving');
    const amontSave = save.value;
    const balance = document.getElementById('have-balance').innerText;
    let Saveing = parseInt(totalIncome) / 100;
    let totalSaveing = Saveing * amontSave;

    let finalBalance = parseInt(balance) - parseInt(totalSaveing);

    //---balance
    const mySaving = document.getElementById('saving-amount').innerText = totalSaveing;
    const lastBalance = document.getElementById('remaining-balance').innerText = finalBalance;


});