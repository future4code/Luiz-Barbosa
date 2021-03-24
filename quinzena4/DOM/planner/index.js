//A sua tarefa de hoje é criar um planner semanal digital, em que o usuário digita uma tarefa, seleciona um dia da semana em uma lista de seleção e, ao clicar em um botão, a tarefa é criada no dia da semana correto.

/*1 - - Quando o botão for clicado, a tarefa deve ser criada no dia selecionado
- O elemento de digitar a tarefa (campo de texto) deve ser limpo assim que a tarefa for inserida.*/

/*1 - Crie uma função que é chamada ao clicar no botão "Criar Tarefa". Use um evento apropriado que identifique o clique no botão.*/



const criarTarefa = () => {
    let tarefaCriada = document.getElementById("tarefa").value
    let diaDaSemana = document.getElementById("dias-semana").value
    let primeiroInput = document.getElementById("tarefa").value
    let horario = document.getElementById('time').value > 0 ? document.getElementById('time').value : alert('Por favor, insira uma hora válida')
    
    if (primeiroInput === "") {
        alert("Por favor, insira um item!")
    } else {
        switch (diaDaSemana){
            case 'domingo':
                document.getElementById('domingo').innerHTML += '<span>' + horario + ' <span>h: '
                document.getElementById("domingo").innerHTML += tarefaCriada + "<br>"
                break
            case 'segunda':
                document.getElementById('segunda').innerHTML += '<span>' + horario + ' <span>h: '
                document.getElementById("segunda").innerHTML += tarefaCriada + "<br>"
                break
            case 'terca':
                document.getElementById('terca').innerHTML += '<span>' + horario + ' <span>h: '
                document.getElementById("terca").innerHTML += tarefaCriada + "<br>"
                break
            case 'quarta': 
                document.getElementById('quarta').innerHTML += '<span>' + horario + ' <span>h: '
                document.getElementById("quarta").innerHTML += tarefaCriada + "<br>"
                break
            case 'quinta':
                document.getElementById('quinta').innerHTML += '<span>' + horario + ' <span>h: '
                document.getElementById("quinta").innerHTML += tarefaCriada + "<br>"
                break
            case 'sexta':
                document.getElementById('sexta').innerHTML += '<span>' + horario + ' <span>h: '
                document.getElementById("sexta").innerHTML += tarefaCriada + "<br>"
                break
            case 'sabado':
                document.getElementById('sabado').innerHTML += '<span>' + horario + ' <span>h: '
                document.getElementById("sabado").innerHTML += tarefaCriada + "<br>"
        }

    }
    
    
    let meuInput = document.getElementById("tarefa")
        meuInput.value = "" 

}



function riscarTarefaDomingo() {
        document.getElementById('domingo').style.textDecoration = 'line-through';
           
}

function riscarTarefaSegunda() {
    document.getElementById('segunda').style.textDecoration = 'line-through';
       
}
function riscarTarefaTerca() {
    document.getElementById('terca').style.textDecoration = 'line-through';
       
}
function riscarTarefaQuarta() {
    document.getElementById('quarta').style.textDecoration = 'line-through';
       
}
function riscarTarefaQuinta() {
    document.getElementById('quinta').style.textDecoration = 'line-through';
       
}
function riscarTarefaSexta() {
    document.getElementById('sexta').style.textDecoration = 'line-through';
       
}
function riscarTarefaSabado() {
    document.getElementById('sabado').style.textDecoration = 'line-through';
       
}

 
const apagarTarefas = () => {
    document.getElementById('domingo').remove()
    document.getElementById('segunda').remove()
    document.getElementById('terca').remove()
    document.getElementById('quarta').remove()
    document.getElementById('quinta').remove()
    document.getElementById('sexta').remove()
    document.getElementById('sabado').remove()
}