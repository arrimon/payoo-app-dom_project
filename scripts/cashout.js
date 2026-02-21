document.getElementById('cashout-btn')
    .addEventListener('click', function(){
        // step:1 Get Agent number validation
        const cashoutNumber = getValueFromInput('input-agent-number');
        console.log(cashoutNumber);
        if (cashoutNumber.length != 11 ){
            alert("Invalid Agent Number")
            return;
        }

        // srep:2 get the amount, valiudate, convert to number
        const cashoutAmountInput = getValueFromInput('cashout-amount');
        console.log(cashoutAmountInput)

        // srep:3 get the Current Balance, valiudate, convert to number
        const balanceElement = document.getElementById('balance');
        const balance = balanceElement.innerText;
        console.log(balance)
        // const balanceElement = getValueFromInnerText('balance');
        // console.log(balanceElement);

        // srep:4 Calculate the New Balance
        const newBalance = Number(balance) - Number(cashoutAmountInput)
        if(newBalance < 0){
            alert("Insufficient Balance");
            return;
        }
        // console.log(`new balance is: ${newBalance}`);

        // srep:5 Get the pin varify
        const pinVarify = getValueFromInput('cashout-pin');
        if(pinVarify == '1212'){

            // srep:5-1 True: Show alart > Set balance
            alert('Cashout Successfully')
            console.log(`new balance is: ${newBalance}`);
            balanceElement.innerText = newBalance;
            return;
        }
        else{
            // srep:5-1 False: Show error alart > return
            alert('Invalid Pin');
            return;
        }

    })


// // cashout very easy way to beginner friendly
// document.getElementById('cashout-btn')
//     .addEventListener('click', function(){
//         // console.log('Clicked Cashout Btn');
//         // step:1 Get Agent number validation
//         const cashOutNumInput = document.getElementById('input-agent-number');
//         const cashOutNumValue = cashOutNumInput.value;
//         console.log(cashOutNumValue);
//         if (cashOutNumValue.length != 11 ){
//             alert("Invalid Agent Number")
//             return;
//         }

//         // srep:2 get the amount, valiudate, convert to number
//          const cashOutAmountInput = document.getElementById('cashout-amount');
//         const cashOutAmountValue = cashOutAmountInput.value;
//         console.log(cashOutAmountValue);


//         // srep:3 get the Current Balance, valiudate, convert to number
//         const balanceElement = document.getElementById('balance');
//         const balance = balanceElement.innerText;
//         console.log(balance)


//         // srep:4 Calculate the New Balance
//         const newBalance = Number(balance) - Number(cashOutAmountValue)
//         if (newBalance < 0){
//             alert('Insufficient Balance');
//             return;
//         }
//         // console.log(`new balance is: ${newBalance}`);


//         // srep:5 Get the pin varify
//         const cashoutPinInput = document.getElementById('cashout-pin');
//         const pin = cashoutPinInput.value;
//         if(pin == '1212'){

//             // srep:5-1 True: Show alart > Set balance
//             alert('Cashout Seccessfull')
//             console.log(`new balance is: ${newBalance}`);
//             balanceElement.innerText = newBalance;
//         }
//         else{

//             // srep:5-1 False: Show error alart > return
//             alert('Invalid Pin');
//             return;
//         }
//         console.log(pin)
//     });