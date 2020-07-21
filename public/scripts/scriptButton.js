const modalOverlay = document.querySelector('.modal-overlay')
const images = document.querySelectorAll('.image')

for(let image of images){
    image.addEventListener("click", function(){
        const imageId = image.getAttribute('id');
        window.location.href = `/recipe_page?id=${imageId}`
    
    })
}

function showContent_1(el) {
    var display = document.getElementById(el).style.display;
    var botao = document.getElementById("meuBotao1");

    if(display == "none") {
        document.getElementById(el).style.display = 'block';
        botao.innerHTML = "Esconder Conteúdo";
    }
    else {
        document.getElementById(el).style.display = 'none';
        botao.innerHTML = "Mostrar Conteúdo";
    }
}

function showContent_2(el) {
    let display = document.getElementById(el).style.display;
    let botao = document.getElementById("meuBotao2");

    if(display == "none") {
        document.getElementById(el).style.display = 'block';
        botao.innerHTML = "Esconder Conteúdo";
    }
    else {
        document.getElementById(el).style.display = 'none';
        botao.innerHTML = "Mostrar Conteúdo";
    }
}

function showContent_3(el) {
    let display = document.getElementById(el).style.display;
    let botao = document.getElementById("meuBotao3");

    if(display == "none") {
        document.getElementById(el).style.display = 'block';
        botao.innerHTML = "Esconder Conteúdo";
    }
    else {
        document.getElementById(el).style.display = 'none';
        botao.innerHTML = "Mostrar Conteúdo";
    }
}