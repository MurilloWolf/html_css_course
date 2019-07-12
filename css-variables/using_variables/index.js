function troca_cor_de_fundo(cor){
    let root = document.querySelector(':root')
    let estilo = getComputedStyle(root)
    let cor_de_fundo = estilo.getProperty('--fundo')

    console.log('background:',cor_de_fundo)

    root.style.setProperty('--fundo','cor')
}