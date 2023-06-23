let password = document.getElementById('pss');
let box = document.getElementById('bpx-pass');
let error_msg=document.querySelector("span");
let save=document.getElementById('sub');



let PasswordSignup=document.getElementById('fam_name');

let error_msg_sign=document.getElementById('sign_span');
let save_sign=document.getElementById('btn1');




let pass = /^[A-Z]\w*\d+\w*(&+|@+|%+|§+|#+)/;
password.addEventListener('input', function () {
    let ArrayPass = password.value.split('');
    if (ArrayPass.length < 8 || !pass.test(password.value)) {
        box.classList.remove('correct');
        box.classList.add('wrong');
        save.disabled = true;

        error_msg.textContent = "Wrong password! Password must be greater than 8 characters and begins with uppercase and has at least one digit and one character from those(&#@%§)";
        error_msg.classList.add('wrongpass');
        error_msg.classList.remove('correctpass');
    } else if (ArrayPass.length >= 8 && pass.test(password.value)===true) {
        box.classList.remove('wrong');
        box.classList.add('correct');
        error_msg.textContent = 'Correct';
        error_msg.classList.add('correctpass');
        error_msg.classList.remove('wrongpass');
        save.disabled = false;
    }
});

PasswordSignup.addEventListener('input', function () {
    let ArrayPass_sign = PasswordSignup.value.split('');
    if (ArrayPass_sign.length < 8 || !pass.test(PasswordSignup.value)) {
        PasswordSignup.classList.remove('correct');
        PasswordSignup.classList.add('wrong');
        save_sign.disabled = true;

        error_msg_sign.textContent = "Wrong password! Password must be greater than 8 characters and begins with uppercase and has at least one digit and one character from those(&#@%§)";
        error_msg_sign.classList.add('wrongpass');
        error_msg_sign.classList.remove('correctpass');
    } else if (ArrayPass.length >= 8 && pass.test(password.value)===true) {
        PasswordSignup.classList.remove('wrong');
        PasswordSignup.classList.add('correct');
        error_msg_sign.textContent = 'Correct';
        error_msg_sign.classList.add('correctpass');
        error_msg_sign.classList.remove('wrongpass');
        save_sign.disabled = false;
    }
});