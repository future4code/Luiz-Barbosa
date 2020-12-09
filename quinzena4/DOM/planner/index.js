//A sua tarefa de hoje é criar um planner semanal digital, em que o usuário digita uma tarefa, seleciona um dia da semana em uma lista de seleção e, ao clicar em um botão, a tarefa é criada no dia da semana correto.

/*1 - - Quando o botão for clicado, a tarefa deve ser criada no dia selecionado
- O elemento de digitar a tarefa (campo de texto) deve ser limpo assim que a tarefa for inserida.*/

/*1 - Crie uma função que é chamada ao clicar no botão "Criar Tarefa". Use um evento apropriado que identifique o clique no botão.*/

const criarTarefa = () => {
    let tarefaCriada = document.getElementById("tarefa").value
    let diaDaSemana = document.getElementById("dias-semana").value
    let primeiroInput = document.getElementById("tarefa").value
    
    if (primeiroInput === "") {
        alert("Por favor, insira um item!")
    } else {
        switch (diaDaSemana){
            case 'domingo':
                document.getElementById("domingo").innerHTML += tarefaCriada + "<br>"
                break
            case 'segunda':
                document.getElementById("segunda").innerHTML += tarefaCriada + "<br>"
                break
            case 'terca':
                document.getElementById("terca").innerHTML += tarefaCriada + "<br>"
                break
            case 'quarta': 
                document.getElementById("quarta").innerHTML += tarefaCriada + "<br>"
                break
            case 'quinta':
                document.getElementById("quinta").innerHTML += tarefaCriada + "<br>"
                break
            case 'sexta':
                document.getElementById("sexta").innerHTML += tarefaCriada + "<br>"
                break
            case 'sabado':
                document.getElementById("sabado").innerHTML += tarefaCriada + "<br>"
        }

    }
    
    
    let meuInput = document.getElementById("tarefa")
        meuInput.value = "" 
}

