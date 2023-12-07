// VALIDAR EMAIL
let emailInput = document.getElementById('email-input')
let emailHelper = document.getElementById('email-helper')

emailInput.addEventListener('change', function(e){

    let valor = e.target.value;

    if (valor.includes("@") && valor.includes(".com")){
        emailInput.classList.add('correct')
        emailInput.classList.remove('error')
        emailHelper.classList.remove('visible')
    } else {
        emailInput.classList.add('error')
        emailInput.classList.remove('correct')
        emailHelper.classList.add('visible')
        emailHelper.innerHTML = "Email inválido."
    }
})

// VALIDAR SENHA
let senhaInput = document.getElementById('senha-input')
let senhaHelper = document.getElementById('senha-helper')

function senha(e){
        let valor = e.target.value
        if (valor.length < 5){
            senhaInput.classList.add('error')
            senhaInput.classList.remove('correct')
            senhaHelper.classList.add('visible')
            senhaHelper.innerText = "Senha deve conter mais do que 4 caracteres."

        } else {
            senhaInput.classList.add('correct')
            senhaInput.classList.remove('error')
            senhaHelper.classList.remove('visible')
            
        }
    }

senhaInput.addEventListener('focus', senha)

senhaInput.addEventListener('blur', senha)

// ENCAMINHAR PARA PAGINA CADASTRO
let cadastro = document.querySelector('#btn-criar-conta')

cadastro.addEventListener('click', (e)=>{
    
    e.preventDefault()
    window.location.href = 'cadastro.html'

})

// TENTANDO VALIDAR OS TREM AQUI

let usuario = [
    {
        user: "devison",
        email: "devison@proz.com",
        senha: "admin"
    },
    {
        user: "emerson",
        email: "emerson@proz.com",
        senha: "admin"
    },
    {
        user: "deividson",
        email: "deividson@proz.com",
        senha: "admin"
    },
    {
        user: "gabriel",
        email: "gabriel@proz.com",
        senha: "admin"
    },
    {
        user: "alvaro",
        email: "alvinhu@proz.com",
        senha: "nota10"
    }
]

let submit = document.querySelector('#btn-submit')

submit.addEventListener('click', function(e){
    e.preventDefault()
    for (let i = 0; i < usuario.length; i++){
        let valid = false
        if (usuario[i].email == emailInput.value && usuario[i].senha == senhaInput.value){
            valid = true
            window.location.href = 'usuario.html'
            emailInput.classList.add('correct')
            emailInput.classList.remove('error')
            emailHelper.classList.remove('visible')
            senhaInput.classList.add('correct')
            senhaInput.classList.remove('error')
            senhaHelper.classList.remove('visible')
            break
        }

        if(valid == false){
            emailInput.classList.add('error')
            emailInput.classList.remove('correct')
            emailHelper.classList.add('visible')
            emailHelper.innerHTML = "Email ou senha incorretos, tente novamente."
            senhaInput.classList.add('error')
            senhaInput.classList.remove('correct')
        }

    }
})

// MOSTRANDO RECUPERAÇÃO DE SENHA
let esqueciSenha = document.querySelector('.forgot-pwd')
let blocoEsqueciSenha = document.getElementById('menu-esqueci-senha')

esqueciSenha.addEventListener('click', ()=>{
    blocoEsqueciSenha.classList.toggle('not-visible')
    
})

// ESQUECI MINHA SENHA
let showUsers = document.getElementsByClassName('spn-blue')
let listaUsers = document.getElementById('lista-users')


for(let i = 0; i < usuario.length; i++){
    let li = document.createElement('li')
    li.innerHTML = usuario[i].user
    listaUsers.appendChild(li)
}

showUsers[1].addEventListener('click', ()=>{
    listaUsers.classList.toggle('not-visible')
    listaUsers.classList.toggle('visible')
})


// RECUPERAÇÃO DE SENHA
let forgotSenhaInput = document.getElementById('forgot-pass-input')
let forgotSenhaHelper = document.getElementById('forgot-pass-helper')
let btnForgotPass = document.getElementById('btn-forgot-pass')


btnForgotPass.addEventListener('click', (e)=>{
    e.preventDefault()
    for(i = 0; i < usuario.length; i++){
        let valid = false

        if (usuario[i].user == forgotSenhaInput.value){
            valid = true
            forgotSenhaHelper.innerText = `Email: ${usuario[i].email}
            Senha: ${usuario[i].senha}`
            forgotSenhaHelper.classList.add('forgot-pass-style')
            forgotSenhaHelper.classList.remove('helper-text')
            forgotSenhaHelper.classList.remove('visible')
            break
        }

        if(valid == false){
            forgotSenhaHelper.classList.add('helper-text')
            forgotSenhaHelper.classList.remove('forgot-pass-style')
            forgotSenhaHelper.classList.add('visible')
            forgotSenhaHelper.innerText = "Usuario não encontrado, tente novamente."
        }

    }
})