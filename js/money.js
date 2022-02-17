
document.getElementById('deposit-button').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);


    const depositTotal = document.getElementById('deposit-total');


    // withdraw  amount

    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmoText = withdrawInput.value;
    const newwithdrawAmo = parseFloat(withdrawAmoText);


    const withdrawInput1 = document.getElementById('withdraw-input1');
    const withdrawAmoText1 = withdrawInput1.value;
    const newwithdrawAmo1 = parseFloat(withdrawAmoText1);

    const withdrawInput2 = document.getElementById('withdraw-input2');
    const withdrawAmoText2 = withdrawInput2.value;
    const newwithdrawAmo2 = parseFloat(withdrawAmoText2);

    const newTotelWithdrawAmount = newwithdrawAmo + newwithdrawAmo1 + newwithdrawAmo2;


    const withdrawTotal = document.getElementById('withdraw-total');
    const preWithdrawAmoText = withdrawTotal.innerText;
    const preWithdrawAmoTotal = parseFloat(preWithdrawAmoText);
    const newWithdrawTotal = preWithdrawAmoTotal + newTotelWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    //balance Total New

    if (newDepositAmount > newWithdrawTotal) {

        const balanceTotalNew = newDepositAmount - newWithdrawTotal;
        depositTotal.innerText = balanceTotalNew;
    }
});


