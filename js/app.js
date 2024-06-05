let amigos = [];

//Adiciona os amigos digitados na lista de amigos
function adicionar(){
    //Recuperar nome do amigo
    nomeAmigo = document.getElementById('nome-amigo');
    listaAmigos = document.getElementById('lista-amigos');

    //Validação de nome amigo em branco
    if (nomeAmigo.value == ""){
        alert('Favor digitar um nome de amigo para incluir na lista de amigos!');
        return;
    }

    //Validação de nomes repetidos
    if (amigos.includes(nomeAmigo.value)){
        alert('O nome digitado já está na lista de amigos. Favor incluir outro amigo!');
        nomeAmigo.value = "";
        return;
    }


    //Incluir na lista de incluídos
    listaAmigos.textContent = (listaAmigos.textContent == "" ? nomeAmigo.value : `${listaAmigos.textContent}, ${nomeAmigo.value}`);
    amigos.push(nomeAmigo.value);
    nomeAmigo.value = "";
}

//Realiza o sorteio dos amigos
function sortear(){

    //Validar sorteio com apenas 1 amigo
    if (amigos.length < 2){
        alert('Não é possível fazer sorteio com menos de 2 amigos. Inclua mais amigos!');
        return;
    }

    //Embaralha o array de amigos
    embaralha(amigos);

    let nomesSorteados = document.getElementById('lista-sorteio');

    //Percorre o array embaralhado e faz o 1º nome do array sortear o próximo
    for (let i = 0; i < amigos.length; i++){

        if (i == amigos.length - 1){
            //O último sorteia o primeiro
            nomesSorteados.innerHTML += `${amigos[i]} -> ${amigos[0]}`
        } else {
            nomesSorteados.innerHTML += `${amigos[i]} -> ${amigos[i + 1]}<br />`
        }

    }

    document.getElementById('lista-sorteio').innerHTML = nomesSorteados.innerHTML;
}

//Função para embaralhar um array
function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

//Limpar todos os campos
function reiniciar(){
    document.getElementById('nome-amigo').value = "";
    document.getElementById('lista-amigos').innerHTML = "";
    document.getElementById('lista-sorteio').innerHTML = "";
    amigos = [];
}