
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


for (let i = 0; i < array.length; i++) {
    const element = array[i];
    // adicionar task com o nome do elemet
}