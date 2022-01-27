const botaoMenu = document.querySelector('.cabecalho__icone-lateral')
const menu = document.querySelector('.menu__mobile--lista-mobile')
const fechar = document.querySelector('.fechar')
const botaoBuscar = document.querySelector('.buscar')
const buscarInput = document.querySelector('.input__busca')

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('menu__mobile--ativo')
})

    botaoBuscar.addEventListener('click', () => {
    buscarInput.classList.remove('input__busca')
})

    fechar.addEventListener('click', () => {
    buscarInput.classList.toggle('input__busca')
})