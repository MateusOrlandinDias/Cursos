const BotaoDeleta = ()=>{
    const botaoDeleta = document.createElement('button');
    botaoDeleta.innerText='deletar';
    botaoDeleta.addEventListener('click', deletarTarefa)
    return botaoDeleta;
}

const deletarTarefa = (evento)=>{
    const botaoDeleta=evento.target;
    const tarefaDeletar=botaoDeleta.parentElement;
    tarefaDeletar.remove();
}

export default BotaoDeleta;