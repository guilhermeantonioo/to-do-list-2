
const add = document.querySelector('#add-btn');
const arrayCampoSemHora  = readData("campos");
// pre carregar funções do sistem
var readData;
var saveData;

function addItemSemHora (){

    const campo = document.querySelector('#campo').value;
    // clonar tamplate
    let template = document.querySelector('.template');

    let newItem = template.cloneNode(true);

    const nomeItem = newItem.querySelector('.name-item');
    // const mesItem = newItem.querySelector('.mes-item');
    saveData("campoSemHora",campo)

    // adicionar o nome no item 

    
    nomeItem.textContent = campo;

    // remover o template e o hide 

    newItem.classList.remove('template');
    newItem.classList.remove('hide');
    
    // pegar e add a ul 

    const list = document.querySelector('.result-list');
    list.appendChild(newItem);
    console.log(newItem);

    // remover item
    const trash = newItem.querySelector('.trash-btn').addEventListener('click' , function(){
        removeItem(this);
    });

    // done 
    const done = newItem.querySelector('.done-btn').addEventListener('click' , function(){
        doneItem(this);
    })
    document.querySelector('#campo').value = '';
}
function addItem(){

    const campo = document.querySelector('#campo').value;
    const hora = document.querySelector('#hora').value;
    const data = document.querySelector('#data').value;
    if(campo == ''){
        alert('preencha o campo de descrição')
    }else if(data == '' && hora == ''){
        addItemSemHora();
    } else{
    const dataFormatada = new Date(data).toLocaleDateString('pt-BR');

    // clonar tamplate
    let template = document.querySelector('.template');

    let newItem = template.cloneNode(true);

    const nomeItem = newItem.querySelector('.name-item');
    // const mesItem = newItem.querySelector('.mes-item');


    const dataItem = newItem.querySelector('.data-item');
    dataItem.textContent = ` -- Data :  ${dataFormatada} -- Hora: ${hora}h`
    // adicionar o nome no item 
    saveData("campo",campo)
    saveData("hora",hora)
    saveData("data",FormData)
    
    nomeItem.textContent = campo;

    // remover o template e o hide 

    newItem.classList.remove('template');
    newItem.classList.remove('hide');
    
    // pegar e add a ul 

    const list = document.querySelector('.result-list');
    list.appendChild(newItem);
    console.log(newItem);
    console.log(dataFormatada);

    // remover item
    const trash = newItem.querySelector('.trash-btn').addEventListener('click' , function(){
        removeItem(this);
    });

    // done 
    const done = newItem.querySelector('.done-btn').addEventListener('click' , function(){
        doneItem(this);
    })


    document.querySelector('#campo').value = '';
}
}



document.addEventListener('keyup' , function(e){
    if(e.key=== 'Enter'){
        addItem();
    }
})

function removeItem(item){
    // acessando o pai do item e removendo com o true
    item.parentNode.remove(true);
    removeItem()
}

function doneItem(item){
    const done = item.parentNode;
    done.classList.toggle('done');
}
add.addEventListener('click' , function(e){
    e.preventDefault();

    addItem();
})
// array system
function saveData(nomeDB,dados) {
    // obtem o banco de dados
    const array = readData(nomeDB)
    // armazena os dados informados ao usuario
    array.push(dados)
    // transforma em string para que o localStorage aceite
    const arrayStr = JSON.stringify(array);
    // salva no localStorage
    localStorage.setItem(nomeDB,arrayStr)
    // retorne o banco de dados
    return readData(nomeDB)
}
function readData(nomeDB) {
    const dataStr = localStorage.getItem(nomeDB);
    var data = JSON.parse(dataStr);
    // Verifica se o banco de dados não exitse
    if (!data) {
    // define o banco de dados como o padrão se não encntrar
    data = []
    }
    // calculos para medição de uso de dados
    const dataString = JSON.stringify(data)
    const bytes = dataString.length
    const kBytes = (bytes / 1000).toFixed(2)
    const mBytes = (kBytes / 1000).toFixed(2)

    // apenas para saber o que esta acontecendo
    console.log("-------DATA-SYSTEM------");
    console.log("DATA: " + dataString);
    console.log("TAMANHO: " + data.length);
    console.log("TAMANHO(Bytes): " + bytes);
    console.log("TAMANHO(KB): " + kBytes);
    console.log("TAMANHO(MB): " + mBytes);
    console.log("DATA ESPERADA: [ITENS,ITENS2,ITENS3]");
    // retorna os dados lidos
    return data
}

for (let i = 0; i < arrayCampoSemHora.length; i++) {
    const element = arrayCampoSemHora[i];
    // adicionar task com o nome do elemet
}