// console.log('Machine JS connected');
// machine id -> Input value
function getValueFromInput(id){
    const input = document.getElementById(id);
    const inputValue = input.value;
    // print with console.log
    console.log(`${id}: `, inputValue);
    return inputValue;
}
// machine id -> Input value
// function getValueFromInnerText(id){
//     const valueFromInnerText = document.getElementById(id);
//     const valueFromInnerTextValue = valueFromInnerText.innerText;
//     // print with console.log
//     console.log(`${id}: `, valueFromInnerTextValue);
//     return valueFromInnerTextValue;
// }