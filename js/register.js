const email = document.getElementById('email');
const label = document.getElementById('label');
const password = document.getElementById('password');
const label2 = document.getElementById('label2');
const phone = document.getElementById('phone');
const label3 = document.getElementById('label3');
const confirmPassword = document.getElementById('confirm');
const label4 = document.getElementById('label4');

email.addEventListener('mouseenter', () => {
    label.style.transform = 'translateY(-20px)';
})

email.addEventListener('mouseleave', () => {
    if (email.value.trim() === '') {
        label.style.transform = 'translateY(0)';
    }
});

phone.addEventListener('mouseenter', () => {
    label2.style.transform = 'translateY(-20px)';
})

phone.addEventListener('mouseleave', () => {
    if (phone.value.trim() === '') {
        label2.style.transform = 'translateY(0)';
    }
});

password.addEventListener('mouseenter', () => {
    label3.style.transform = 'translateY(-20px)';
})

password.addEventListener('mouseleave', () => {
    if (password.value.trim() === '') {
        label3.style.transform = 'translateY(0)';
    }
});

confirmPassword.addEventListener('mouseenter', () => {
    label4.style.transform = 'translateY(-20px)';
})

confirmPassword.addEventListener('mouseleave', ()  => {
    if (confirmPassword.value.trim() === '') {
        label4.style.transform = 'translateY(0)';
    }
});