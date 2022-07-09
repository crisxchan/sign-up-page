const inputs = document.querySelectorAll('.input-field');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');
const submitBtn = document.querySelector('input[type="submit"]');
const form = document.getElementById('main-form');

const setValidClass = input => {
    input.classList.add('valid');
    input.classList.remove('invalid');
}

const setInvalidClass = input => {
    input.classList.remove('valid');
    input.classList.add('invalid');
}

const checkPassword = () => {
    if (password.value == confirmPassword.value){
        setValidClass(password);
        setValidClass(confirmPassword);
    } else {
        setInvalidClass(password);
        setInvalidClass(confirmPassword);
    }
}

const validate = (input) => {
    if(input.value != ''){
        switch(input.dataset.type){
            case 'first-name':
            case 'last-name':
                if(input.value.length > 4) setValidClass(input);
                else setInvalidClass(input);
                break;
    
            case 'email':
                let validEmailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                if((input.value).match(validEmailFormat)) setValidClass(input);
                else setInvalidClass(input);
                break;

            case 'contact':
                let validContactFormat = /09[0-9]{9}/;
                if((input.value).match(validContactFormat)) setValidClass(input);
                else setInvalidClass(input);
                break;

            case 'password':
            case 'confirm-password':
                if(password.value != '' && confirmPassword.value != '') checkPassword();
                break;
        }
    }
    else if (input.dataset.type == 'password' || input.dataset.type == 'confirm-password'){
        password.classList = 'input-field';
        confirmPassword.classList = 'input-field';
    }
    else input.classList = 'input-field';

    let validInputs = Array.from(inputs).filter(input => input.classList.contains('valid'));
    submitBtn.disabled = (validInputs.length === inputs.length) ? false : true;
}

inputs.forEach(input => input.addEventListener('blur', () => {
    validate(input);
}));
