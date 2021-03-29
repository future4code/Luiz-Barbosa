let arrDespesas = []
imprimirDespesas(arrDespesas)
imprimirExtrato()


// PRIMEIRO
//Nessa função, é necessário implementar uma função de array que vá pegar o array de despesas que está chegando como parâmetro da função imprimirDespesas. Parâmetro esse que está sendo chamado de despesas;

function imprimirDespesas(despesas){
    let divDespesas = document.getElementById('despesas')
    divDespesas.innerHTML = '<p><u>Despesas Detalhadas</u></p>'


    despesas.forEach((item) => {
        divDespesas.innerHTML += `Valor da despesa: R$${item.valor}, Tipo: ${item.tipo}, Descrição: ${item.descricao} <br>`
    })
    
    
}


// SEGUNDO 
//pegar os valores inseridos e distribuir. Se for alimentação, somar em alimentação...
function imprimirExtrato(){
    let divExtrato = document.getElementById('extrato')
    let gastoTotal = 0
    let gastoAlimentacao = 0
    let gastoUtilidades = 0
    let gastoViagem = 0


    // AQUI VEM A IMPLEMENTAÇÃO
    const despesasSeparadas = arrDespesas.map((item) => {
        if (item.tipo === "alimentação") {
            gastoAlimentacao += item.valor
        } else if (item.tipo === "utilidades") {
            gastoUtilidades += item.valor
        } else {
            gastoViagem += item.valor
        }
    })
    
    gastoTotal = gastoAlimentacao + gastoUtilidades + gastoViagem;



    divExtrato.innerHTML = `<p>Extrato: Gasto Total: R$${gastoTotal} | Alimentação: R$${gastoAlimentacao} | 
                                        Utilidades: R$${gastoUtilidades} | Viagem: R$${gastoViagem}</p>`
}


function limparFiltros() {
    document.getElementById('tipoFiltro').value = ""
    document.getElementById('valorFiltroMin').value = ""
    document.getElementById('valorFiltroMax').value = ""
}



function adicionarDespesa(){
    let valorCdt = document.getElementById('valorCadastro')
    let tipoCtd = document.getElementById('tipoCadastro')
    let descricaoCtd = document.getElementById('descricaoCadastro')

    if(validarValor(valorCdt) && validarTipo(tipoCtd) && validarDescricao(descricaoCtd)){
        let novaDespesa = {
            valor: Number(valorCdt.value),
            tipo: tipoCtd.value,
            descricao: descricaoCtd.value,
        }

        arrDespesas.push(novaDespesa)
        
        valorCdt.value = ""
        tipoCtd.value = ""
        descricaoCtd.value = ""

        
        limparFiltros()
        imprimirDespesas(arrDespesas)
        imprimirExtrato()
    } else {
        alert("`Faltou algum valor ou algum valor é um número negativo`")
    }
}



// TERCEIRO
function filtrarDespesas(){
    let tipoFiltro = document.getElementById('tipoFiltro').value
    let valorMin = Number(document.getElementById('valorFiltroMin').value)
    let valorMax = Number(document.getElementById('valorFiltroMax').value)

    if(tipoFiltro !== '' && valorMin < valorMax && valorMin > 0) {
        let despesasFiltradas = arrDespesas.filter((item) => {  
            if(valorMax > 0 )      
        return tipoFiltro === item.tipo && item.valor >= valorMin && item.valor <= valorMax  
        }) 
        
        console.log(despesasFiltradas)
        // AQUI NESSA VARIÁVEL VEM A IMPLEMENTAÇÃO
    
        imprimirDespesas(despesasFiltradas)

    } else {
        alert('Por favor insira valores válidos nos filtros')
    }

   
}

const ordenarDespesas = arrDespesas.sort(function(a, b) {
    return a - b
})


console.log(ordenarDespesas)







// FunÇoes que fazem validaÇoes dos inputs de criaÇao de despesas 

// NÃO SE PREOCUPEM EM ENTENDER ESSAS FUNÇÕES

function validarValor(valor){
    if(valor.value.length > 0 && parseInt(valor.value) > 0){
        return true
    }
    return false
}

function validarTipo(tipo){
    if(tipo.value !== ""){
        return true
    }
    return false
}

function validarDescricao(texto){
    if(texto.value.replace(/ /g,"").length !== 0){
        return true
    }
    return false
}