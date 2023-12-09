/* Mudando cor do a do header */

//Selecionando todos os a do header-menu
const links = document.querySelectorAll('.header-menu a');

//Função para mudar a cor do link
function ativarLink(link){
    const url = location.href;
    const href = link.href;
    if(url.includes(href)){
        link.style.color = "#FFBB00";
    }
}

//Chamando a função com forEach
links.forEach(ativarLink);

/* Mudando input do radio do orçamento */

//Ativando itens do orçamento
const parametros = new URLSearchParams(location.search);

//Função para ativar o elemento checked do input
function ativarProduto(parametros){
    const element = document.getElementById(parametros);
    element.checked = true;
    console.log(parametros);
}

//Ativando a função de ativar o produto
parametros.forEach(ativarProduto);


/* Perguntas Frequentes */
const perguntas = document.querySelectorAll('.perguntas button');

//Função para o evento de ativarPergunta
function ativarPergunta(event){
    //Variavel de pergunta, para pegar o target
    const pergunta = event.currentTarget;
    //Variavel para pegar o atributo da aria-control
    const controls = pergunta.getAttribute('aria-controls');
    //Variavel de pegar o ID do elemento de resposta
    const resposta = document.getElementById(controls);
    //Mudando o ativa dele
    resposta.classList.toggle('ativa');
    const ativa = resposta.classList.contains("ativa");
    pergunta.setAttribute('arial-expanded', ativa);
}

//Função de clique das perguntas
function eventosPerguntas(pergunta){
    pergunta.addEventListener('click', ativarPergunta);
}

//Dando loop do eventoPerguntas
perguntas.forEach(eventosPerguntas);


/* Galeria de imagem */
const galeria = document.querySelectorAll('.bicicleta-imagens img');
const galeriaContainer = document.querySelector('.bicicleta-imagens');

function trocarImagem(event){
    const img = event.currentTarget;
    const media = matchMedia('(min-width: 1000px)').matches;
    if(media) {
        galeriaContainer.prepend(img);
    }
}

function eventosGaleria(img){
    img.addEventListener('click', trocarImagem);
}

galeria.forEach(eventosGaleria);

//Animação
if(window.SimpleAnime){
    new SimpleAnime();
}