
// array system
function save(nomeDB,dados) {
    const array = readData(nomeDB)
    array.push(dados)
    const arrayStr = JSON.stringify(array);
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