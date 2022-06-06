const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');

const checkPassword = () => {
    if (password.value == confirmPassword.value){
        password.style.borderColor = 'green';
        confirmPassword.style.borderColor = 'green';
    } else {
        password.style.borderColor = 'red';
        confirmPassword.style.borderColor = 'red';
    }
};

password.addEventListener('keyup', checkPassword);
confirmPassword.addEventListener('keyup', checkPassword);