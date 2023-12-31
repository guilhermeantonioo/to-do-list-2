// array system
export function saveData(nomeDB,dados) {
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
export function readData(nomeDB) {
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