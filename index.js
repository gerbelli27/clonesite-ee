const botaoMenu = document.querySelector('.cabecalho__icone-lateral')
const menu = document.querySelector('.menu__mobile--lista-mobile')

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('menu__mobile--ativo')
})


const botaoBuscar = document.querySelector('.buscar')
const buscarInput = document.querySelector('.input__busca')

botaoBuscar.addEventListener('click', () => {
    buscarInput.classList.toggle('busca-menu--ativo')
})