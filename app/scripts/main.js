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
        pegaHeader.classList.add('ativo');
    }else{ 
        pegaHeader.classList.remove('ativo');
    } 
} 

window.addEventListener('scroll', debounce(function(){
    scrollOnHeader(scrollToId);
},50));

window.onload =  function(event) {
    // console.log('foi');
}; 
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

    */
    var btnMobile = document.querySelector(".menu-mobile");
    var listMenu = document.querySelector(".menu");

    var  ShowMenu = function() {
        if (listMenu.className === "menu") {
            listMenu.classList.add("menu-ativo");
        } else {
            listMenu.classList.remove("menu-ativo");
        }
    } 


    // ativando menu com clique no botao
    btnMobile.onclick = function(){
        ShowMenu();
    };


    // desativando menu ao clicar no item do menu
    var itensMenu = document.querySelectorAll('.menu .link');
    //obtendo quantidade    
    var itensMenuQnt = itensMenu.length
    //inicio de for
    for( i=0; i<itensMenuQnt ; i++ ){
        // armazenando em variavel cada item do menu
        var e = document.querySelectorAll('.menu .link')[i];  
        // ativação da função para cada clice no item do menu             
        e.onclick = function(){
            ShowMenu();
        }
    }







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
        /* 
            bloqueando função tag a padrao
        */
        e.preventDefault();  
        /*
            obtendo valor do href da tag clitado
        */
        var id = this.getAttribute('href');
        /*
            obtendo "HEIGHT" do header
        */
        var alturaMenuFixo = document.querySelector("header").offsetHeight;
        /*
            valor header menu ativo
        */
        var alturaMenuAtivo = 45;
        /*
            obtendo altura da seção com o mesmo nome igual ao ID clicado
        */
        //exibindo resultado
        //console.log(this.offsetHeight)

        var section = document.querySelector(id).offsetTop - alturaMenuAtivo ;

        window.scroll(
            {
                top: section,
                behavior: "smooth" 
            }
        ); 
    }
/* FIM SCROLL */