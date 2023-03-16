const registration = document.querySelector('.login-form')

registration.addEventListener('submit', submitReg)

function submitReg(event) {
    event.preventDefault()
    
    const registrationElements = event.currentTarget.elements;

    let mail = registrationElements.email.value;
    let password = registrationElements.password.value;

    if (mail === '' || password === '') {
        return alert("Всі поля необхідно заповнити !")
    }

    const objRegistration = { mail, password }
    
    console.log(objRegistration);
   registration.reset()
}
