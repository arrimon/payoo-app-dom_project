// Login Function
document.getElementById('login-btn')
    .addEventListener('click', function(){
        // console.log('Login Button Clicked');
        // step:1 Input mobile number first;
        const inputNumber = document.getElementById('input-number');
        const contactNum = inputNumber.value;
        console.log(contactNum);
        // step:2 Input 4 digit pin;
        const inputPin = document.getElementById('input-pin');
        const userPass = inputPin.value;
        console.log(userPass);
        // Step:3 Match Mobile Number & Pin
        if(contactNum == '01871091229' && userPass == '1212'){
            // Step:3-1 True:: >> alart > Homepage
            alert('Loging Success')
            // window.location.replace('/home.html');
            window.location.assign('home.html');
        }
        else{
            // Step:3-2 False:: >> alart > Return
            alert('Loging Failed')

        }

    })