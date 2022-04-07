
    import BotaoConclui from "./components/concluirTarefa.js";
    import BotaoDeleta from "./components/deletaTarefa.js";
    /*
        O CORS serve para acessar o conteúdo de certo site por domínios diferentes. Caso o CORS não fosse usado 
        aqui o site não funcionaria pois agora estamos utilizando diferentes modulos (são consideradas rotas diferentes por mudar)
        o URL (dominio) para sua execução.

        OBS: É SÓ USAR O LIVE-SERVER.
    */
    //Função de criar tarefa
    const criarTarefa = (evento) => {
        evento.preventDefault();
        //buca a ul
        const lista = document.querySelector('[data-list]');
        //pega a info do input
        const input = document.querySelector('[data-form-input]');
        const valor = input.value;
        input.value = " ";

        //cria um elemento <li> para por o paragrafo dentro.
        const tarefa = document.createElement('li');
        //adicionando uma classe de CSS para a tarefa adicionada
        //neste caso queremos adicionar a classe task que da o contorno cinza
        tarefa.classList.add('task');
        //criar um novo paragrafo html usando template string-> ``
        const conteudo = `<p class="content">${valor}</p>`;

        //manda pro html
        tarefa.innerHTML = conteudo;
        //diz que li é filho de ul
        lista.appendChild(tarefa);
        //cria botão e escuta ele para quando for pressionado fazer algo (marcar concluida a tarefa ou deletar a tarefa)
        tarefa.appendChild(BotaoConclui());
        tarefa.appendChild(BotaoDeleta());
    }

    const novaTarefa = document.querySelector('[data-form-button]');
    novaTarefa.addEventListener('click', criarTarefa);

    /*
        IMPORTANTE: para construir códigos js seguindo as boas práticas é preciso "limitar" a aplicação ao usuário e não deixar 
        que outras pessoas tenham acesso as linhas de código pelo navegador. Normalmente sem usar nenhum método, todas as funções 
        estão alocadas em um escopo global. Caso qualquer usuário utilize o console do navegador e digite o nome da função, a resposta vaza as
        linhas do código dessa função.
        
        Por isso, usa-se a função IIFE(Immediately Invoked Function Expression) para tirar as funções de um escopo global e limitar a aplicação ao usuário.
    
        => Utilização: (()=>{
            SEU CÓDIGO AQUI;
        })()
    */

    /*
        No caso deste código, a proteção está sendo utilizada atravez de import e export.
    */