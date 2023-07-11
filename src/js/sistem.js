
// array system
function save(array) {

}
function readData(nome){
    var data = localStorage.getItem(nome);
    if(!data){
        data = []
    }
    const dataString = JSON.stringify(data)
    const bytes = dataString.length
    const kBytes = (bytes/1000).toFixed(2)
    const mBytes = (kBytes/1000).toFixed(2)

    // apenas para saber o que esta acontecendo
    console.log("-------DATA-SYSTEM------");
    console.log('DATA ESPERADA: "[ITENS,ITENS2,ITENS3]"');
    console.log("DATA: " + dataString);
    console.log("TAMANHO: " + data.length);
    console.log("TAMANHO(Bytes): " + bytes);
    console.log("TAMANHO(KB): " + kBytes);
    console.log("TAMANHO(MB): " + mBytes);
  }