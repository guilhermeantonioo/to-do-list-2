
// array system
function save(dados) {
    // obtem o banco de dados
    data = readData(array);
    // salve os dados novamente
    data.push(dados)
    // retorne o banco de dados
    return readData(data)
}
function readData(nome) {
    var data = localStorage.getItem(nome);
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
    console.log('DATA ESPERADA: "[ITENS,ITENS2,ITENS3]"');
    console.log("DATA: " + dataString);
    console.log("TAMANHO: " + data.length);
    console.log("TAMANHO(Bytes): " + bytes);
    console.log("TAMANHO(KB): " + kBytes);
    console.log("TAMANHO(MB): " + mBytes);
    // retorna os dados lidos
    return data
}