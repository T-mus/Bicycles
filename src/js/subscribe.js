let form = document.getElementById('subscribe__form'),
    emailInput = document.getElementById('email');

form.addEventListener('submit', function(e) {
    if(checkEmail(emailInput)) {
        emailInput.classList.add('error');
        e.preventDefault();
    }
});

emailInput.addEventListener('focus', function() {
    if(this.classList.contains('error')) {
        this.classList.remove('error');
    }
});

function checkEmail(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}