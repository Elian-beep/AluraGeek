let listaCredenciais = [];

recuperarLista();

//------------------------------FUNÇÃO PARA RECUPERAR OS DADOS DA LISTA
function recuperarLista() {
    let listaUsers = localStorage.getItem('listUsers'); //Recupera as informações salvas no local storage do navgeador
    if (!listaUsers) { //Se não houer items para serem recuperados
        console.log("Users not found");
        inserirCredenciais({
            user: 'admin',
            senha: 'admin'
        }, true);
    }else{
        console.log("Users found");
    }
}

//------------------------------FUNÇÃO PARA ADICIONAR UM NOVO ITEM
function inserirCredenciais(user, novoUser) {
    listaCredenciais.push(user);

    if (novoUser) {
        localStorage.setItem('listUsers', JSON.stringify(listaCredenciais));
    }
}

//------------------------------FUNÇÃO PARA GERAR UM ID ALEATÓRIO ENTRE 0-8000
function gerarId() {
    return Math.floor(Math.random() * 8000);
}