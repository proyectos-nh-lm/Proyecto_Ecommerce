document.addEventListener('DOMContentLoaded', function() {
    validateLogin()
})

function validateLogin() {
    let boton = document.getElementById('boton')

    boton.addEventListener('click', function(event) {
        event.preventDefault() // Evita que el formulario se envíe automáticamente

        let email = document.getElementById('email').value
        let password = document.getElementById('password').value

        if (validateFields(email, password)) {
            submitForm(email, password)
        }
    })
}

function validateFields(email, password) {
    if (email === '' && password === '') {
        alert('El campo de email y password están vacíos')
        return false
    } else if (email.indexOf('@') === -1) {
        alert('El email no es válido')
        return false
    } else if (password.length < 6) {
        alert('La contraseña debe ser mayor a 6 caracteres')
        return false
    }
    return true
}

function submitForm(email, password) {
    fetch('http://localhost:3000/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    })
    .then(response => response.json())
    .then(data => {
        // todo si todo esta correcto se redirige a la pagina de inicio
        // todo aca tiene que redireccionar al menu el server 
        console.log(data)
    })
    .catch(error => {
        console.log(error)
    })
}