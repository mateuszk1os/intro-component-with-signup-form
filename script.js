let input = document.querySelectorAll('.in');
let submit = document.querySelector('.submit');
let p = document.querySelectorAll('#action');

let first = document.querySelector('.firstError');
let last = document.querySelector('.lastError');
let email = document.querySelector('.emailError');
let password = document.querySelector('.passwordError');

let listArr = [first, last, email, password];
let textArray = ['First Name cannot be empty', 'Last Name cannot be empty', 'Looks like this is not an email', 'Password cannot be empty'];


submit.addEventListener('click', ()=>{
    for(let i=0; i < input.length; i++){
        if(input[i].value == ''){
            input[i].classList.add('input');
            listArr[i].textContent = textArray[i];
        }
        input[i].value = null;
    }
})

for(let i = 0; i < input.length; i++){
    input[i].addEventListener('focus', ()=>{
        if(input[i].contains('input')){
            input[i].classList.remove('input');
            input[i].classList.add('action');
        }
    })
    input[i].addEventListener('blur', ()=>{
        input[i].classList.remove('input');
        listArr[i].textContent = '';
    })
}