const getValor = document.getElementById("valor");
const btnConverter = document.getElementById("btn");


btnConverter.addEventListener("click", lidarComConversao)


function calculaResultado(valorReferencia){
    const resultado = (parseFloat(getValor.value)) * valorReferencia;
    return resultado;
}


async function lidarComConversao() {
    const valor = parseFloat(getValor.value);
    const valorReferencia = await converterMoeda();
    const valorReferenciaFinal = valorReferencia.toFixed(2);
    const resultado = calculaResultado(valorReferencia);
    const resultadoFinal = resultado.toFixed(2);
    const p = document.getElementById("content");
    p.innerText = "BRL";
    const p2 = document.getElementById("value-content");
    p2.innerText = `$ ${resultadoFinal}`;
    const p3 = document.getElementById("content-referencia");
    p3.innerText = "(Brazilian Real)";
    const p4 = document.getElementById("value-referencia");
    p4.innerText = `$ ${valorReferenciaFinal}`;
    document.getElementById("valor").value = "";
}


async function converterMoeda(){
    const urlDaApi = "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_uCKuc7nr4GZ3tp4Fgaa4mhdhp2F4dz2y0zVzMgKX&currencies=BRL&base_currency=USD";
    const resposta = await fetch(urlDaApi);
    const dadosApi = await resposta.json();
    if(dadosApi && dadosApi.data && dadosApi.data.BRL){
        return dadosApi.data.BRL;
    }else {
        alert("Tivemos um problema, por favor tente novamente");
    }
    
}