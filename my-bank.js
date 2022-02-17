//----totalpaid and myIncome value ----
function inputAmont(input) {
    const amontPaid = document.getElementById(input);
    const total = amontPaid.value;
    //amontPaid.value = '';
    return total;
};


document.getElementById('calculate-btn').addEventListener('click', function () {
    const foodAmont = inputAmont('paid-food');
    const rentAmont = inputAmont('paid-rent');
    const clothesAmont = inputAmont('paid-clothes');
    const totalIncome = inputAmont('my-income');

    // Check error for input
    if (foodAmont < 0 || isNaN(foodAmont)) {
        alert('opps! not allow negative number and string, Please enter positive number in Food.');
    } else if (rentAmont < 0 || isNaN(rentAmont)) {
        alert('opps! not allow negative number and string, Please enter positive number in Rent.');
    }
    else if (clothesAmont < 0 || isNaN(clothesAmont)) {
        alert('opps! not allow negative number and string, Please enter positive number in clothes.');
    }
    else if (totalIncome < 0 || isNaN(totalIncome)) {
        alert('opps! not allow negative number and string, Please enter positive number in Income.');

    } else {
        let totalAmont = parseInt(foodAmont) + parseInt(rentAmont) + parseInt(clothesAmont);

        //now last amont after paid
        let balance = parseInt(totalIncome) - parseInt(totalAmont);

        //add error meassage income  totalamount
        if (totalAmont > totalIncome) {
            alert('opps! your income is low');
        } else {
            const totalExpenses = document.getElementById('total-expenses').innerText = totalAmont;
            const haveBalance = document.getElementById('have-balance').innerText = balance;
        };
    };
});


//----------------------Saving-------------------------//
document.getElementById('save-btn').addEventListener('click', function () {
    const totalIncome = inputAmont('my-income');
    const amontSave = inputAmont('saving');
    if (amontSave < 0 || isNaN(amontSave)) {
        alert('opps! not allow negative number and string, Please enter positive number in saveing.');
    } else {
        const balance = document.getElementById('have-balance').innerText;
        let Saveing = parseInt(totalIncome) / 100;
        let totalSaveing = Saveing * amontSave;
        let finalBalance = parseInt(balance) - parseInt(totalSaveing);

        //---balance final and error handle
        if (totalSaveing > balance) {
            alert('Not enough amounts have!');
        } else {
            const mySaving = document.getElementById('saving-amount').innerText = totalSaveing;
            const lastBalance = document.getElementById('remaining-balance').innerText = finalBalance;
        };
    };
});