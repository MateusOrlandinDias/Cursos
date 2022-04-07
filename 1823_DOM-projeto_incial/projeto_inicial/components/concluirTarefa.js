const BotaoConclui = () => {
    const botaoConclui = document.createElement('button');
    botaoConclui.classList.add('check-button');
    botaoConclui.innerText = 'concluir';
    botaoConclui.addEventListener('click', concluirTarefa);
    return botaoConclui;
}

const concluirTarefa = (evento) => {
    //quando eu clickar, quero saber em quem eu clickei
    const botaoConclui = evento.target;
    //acha o pai do botão (<li>) para que o rabisco de conclusão da tarefa seja acionado nesta.
    const tarefaCompleta = botaoConclui.parentElement;
    //de acordo com as classes da <li>, utiliza um toggle no css 'done' que da o efeito do rabisco.
    tarefaCompleta.classList.toggle('done');
}

export default BotaoConclui;
/*
Poissiveis sintaxes para export: 
export const BotaoConclui = ... => exporta a função
export:{
    BotaoConclui,
    concluirTarefa
}  => exporta mais de um component
export default BotaoConclui => exporta somente o modulo BotaoConclui
*/