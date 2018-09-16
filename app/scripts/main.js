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
    var itensMenu = document.querySelectorAll('.scroll');
    itensMenu.forEach( item => {
        item.addEventListener('click', scrollToId);
    })
    function scrollToId(e){
        console.log("oi");
        e.preventDefault(); 
        var id = this.getAttribute('href');
        var alturaMenuFixo = document.querySelector(".menu").offsetHeight;
        var section = document.querySelector(id).offsetTop - alturaMenuFixo;
        window.scroll(
            {
                top: section,
                behavior: "smooth" 
            }
        ); 
    }
/* FIM SCROLL */