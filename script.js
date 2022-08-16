const form = document.getElementById("form")
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const passwordConfirmation = document.getElementById("password-confirmation")

form.addEventListener("submit", (e) => {
    e.preventDefault()
})

function checkInputs(){
    const usernameValue = username.value
    const emailValue = email.value
    const passwordValue = password.value
    const passwordConfirmationValue = passwordConfirmation.value
}

if(usernameValue === ''){
    setErrorFor(username, "O nome do usuário é obrigatório.")
}

function setErrorFor(input, message){
const formControl = input.parentElement; // esse parent element vai pegar a div pai desse input
const small = formControl.querySelector('small')

// Adiciona a mensagem de erro
small.innerText = message

// Adiciona a classe de erro


}

function setSucessFor(input){
    const formControl = input.parentElement;

    // Adicionar a classe de sucesso
}