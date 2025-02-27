const email = document.getElementById('email');
const label = document.getElementById('label');
const password = document.getElementById('password');
const label2 = document.getElementById('label2');

email.addEventListener('mouseenter', () => {
    label.style.transform = 'translateY(-20px)';
})

email.addEventListener('mouseleave', () => {
    if (email.value.trim() === '') {
        label.style.transform = 'translateY(0)';
    }
});

password.addEventListener('mouseenter', () => {
    label2.style.transform = 'translateY(-20px)';
})

password.addEventListener('mouseleave', () => {
    if (password.value.trim() === '') {
        label2.style.transform = 'translateY(0)';
    }
});