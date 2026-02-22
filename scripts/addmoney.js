document.getElementById('add-money-btn')
    .addEventListener('click', function(){
        // Step:1 Select bank
        const selectBank = getValueFromInput('add-money-bank');
        if(selectBank == 'Select A Bank'){
            alert('Please at first select a Bank')
            return;
        }
        console.log(selectBank);

        // Step:2 get bank Account Number
        const bankAccountNumber = getValueFromInput('bank-account-number');
        if(bankAccountNumber.length != 11){
            alert('Invalid Account Number');
            return;
        }
        // console.log(bankAccountNumber);

        // Step:3 get add amount 
        const addAmount = getValueFromInput('add-amount');
        // console.log(addAmoount);

        // Step:4 get current balance after add amount 
        const currentNewBalance = Number(getBalance()) + Number(addAmount)
        console.log(currentNewBalance);

        // Step:5 Set current balance with verify Pin number
        const pin = getValueFromInput('add-money-pin');
        if(pin == '1212'){
            // Step:5-1 verify with pin
            const newBalance = setBalance(currentNewBalance)
            // console.log(newBalance)
            alert(`Payment Added successfully`)
            return;
        }
        else{
            // Step:5-2 Wrong Pin show this message
            alert(`Please input Correct Pin`)
            return;
        }
    })