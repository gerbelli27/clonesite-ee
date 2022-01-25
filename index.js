const botaoMenu = document.querySelector('.cabecalho__icone-lateral')
const menu = document.querySelector('.menu__mobile')

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('menu__mobile--ativo')
})


const botaoBuscar = document.querySelector('.buscar')
const buscarInput = document.querySelector('.busca-menu')

botaoBuscar.addEventListener('click', () => {
    buscarInput.classList.toggle('busca-menu--ativo')
})