// debounce

/*
o debounce é usado para forçar o SCROLL a exigir menos processamento do dispositivo
assim cada SCROLL na pagina ira executar apenas 1 vez a função por cada scroll
*/

const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
      const context = this;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };
// fim


function scrollOnHeader(){
    // obtendo "altura" da janela
    var alturaWindow = window.pageYOffset;
    // armazenando em variavel o elemento
    var pegaHeader = document.querySelector('header');
    // obtendo "HEADER" do header na variavel
    var HeaderHeight = pegaHeader.offsetHeight;

       
    if( alturaWindow > HeaderHeight){
        foi = "ativo";
        pegaHeader.classList.add('ativo');
    }else{
        foi = "n ativo";
        pegaHeader.classList.remove('ativo');
    }
    console.log(foi);
}


window.addEventListener('scroll', debounce(function(){
    scrollOnHeader();
},50));
/*
    Nome: Anderson Lopes
    Data: 27/06/2018
    Versão: 01

    -- ~ / ~ --

    Função para abrir e fechar o menu responsivo
    2 variaveis:
     1 - o botao do menu
     2 - lista do menu

    ao clicar no botao adiciona uma classe a lista que os exibe
    ao clicar no item da lista, a lista remove a classe voltando a esconder o menu
    tanto no mobile tanto no descktop tambem ira rodar a função da lista


    var btnMobile = document.querySelector(".menu-btn");
    var listMenu = document.querySelector(".menu-list");
    var  ShowMenu = function() {
        if (listMenu.className === "menu-list") {
            listMenu.classList.add("active");
        } else {
            listMenu.classList.remove("active");
        }
    }
    btnMobile.onclick = function(){
        ShowMenu();
    };
    listMenu.onclick = function(){
        listMenu.classList.remove("active");
    };
/*  FIM MENU */
/* SCROLL */
    var itensMenu = document.querySelectorAll('.link');

    itensMenu.forEach( item => {
        item.addEventListener('click', scrollToId);
    })

    function scrollToId(e){
        console.log("oi");
        e.preventDefault(); 
        var id = this.getAttribute('href');
        var alturaMenuFixo = document.querySelector("header").offsetHeight;
        console.log(alturaMenuFixo)
        var section = document.querySelector(id).offsetTop - alturaMenuFixo;

        window.scroll(
            {
                top: section,
                behavior: "smooth" 
            }
        ); 
    }
/* FIM SCROLL */