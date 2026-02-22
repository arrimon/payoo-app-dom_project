// console.log('Machine JS connected');
// machine id -> Input value
function getValueFromInput(id){
    const input = document.getElementById(id);
    const inputValue = input.value;
    // print with console.log
    console.log(`${id}: `, inputValue);
    return inputValue;
}

// Get balance Function
function getBalance(){
    const balanceElement = document.getElementById('balance');
    const balance = balanceElement.innerText;
    // print with console.log
    console.log(`Balance: `, balance);
    return Number(balance);
}

// set balance Function
function setBalance(value){
    const balanceElement = document.getElementById('balance');
    balanceElement.innerText = value;
}


// Machin id > Hide all ID && Specific Show id
function showOnly(id){
    const addMoney = document.getElementById('add-money');
    const cashOut = document.getElementById('cashout');
    const transferMoney = document.getElementById('transfer-money');
    const bonusMoney = document.getElementById('bonus-money');
    const paybillMoney = document.getElementById('paybill-money');
    // console.log(`Add Money => ${addMoney} , Cashout => ${cashOut}`)

    // All section are hidden
    addMoney.classList.add('hidden');
    cashOut.classList.add('hidden');
    transferMoney.classList.add('hidden');
    bonusMoney.classList.add('hidden');
    paybillMoney.classList.add('hidden');

    // Clickable id button show
    const selectedId = document.getElementById(id);
    selectedId.classList.remove('hidden');
}