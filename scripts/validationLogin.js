const email = document.getElementById('email');
const password = document.getElementById('password');
const btnLogin = document.querySelector('#btnLogin');

let listaCredenciais = [];
let userFound = false;

btnLogin.addEventListener('click', function() {
    listaCredenciais = localStorage.getItem('listUsers');
    if (listaCredenciais) {
        let users = JSON.parse(listaCredenciais);
        for(const user of users){

            if (email.value == user.user && password.value == user.senha) {
                console.log('good');   
                userFound = true;
            }
        }
    }

    if(!userFound){
        console.log('bad');
    }
});