const botaoAbrir = document.querySelector(".header-mobile > button")
const botaoFechar = document.querySelector(".header-mobile nav button")

const body = document.querySelector("body")
const nav = document.querySelector(".header-mobile nav")

botaoAbrir.addEventListener('click', abrirMenu)
botaoFechar.addEventListener('click', fecharMenu)

function abrirMenu() {
    body.classList.add("escurecer")
    nav.classList.add("abrir")
}

function fecharMenu() {
    body.classList.remove("escurecer")
    nav.classList.remove("abrir")
}

if (localStorage.getItem('dark-mode') === 'true') {
    document.body.classList.add('dark-mode');
}

function alternarModoNoturno() {
    body.classList.toggle('dark-mode');
    localStorage.setItem('dark-mode', body.classList.contains('dark-mode'));
}

const botaoMobile = document.getElementById('theme-toggle-mobile');
const botaoDesktop = document.getElementById('theme-toggle-desktop');

if (botaoMobile) botaoMobile.addEventListener('click', alternarModoNoturno);
if (botaoDesktop) botaoDesktop.addEventListener('click', alternarModoNoturno);