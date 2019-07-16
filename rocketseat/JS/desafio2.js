var botao = document.getElementById('botao')
const nomes = ["Diego", "Gabriel", "Lucas"];


botao.onclick = function (){
    let div = document.createElement('div')

    div.style.background = 'red';
    div.style.width = '100px'
    div.style.height = '100px'

    div.onmouseover = function(){
        div.style.background = getRandomColor()
    }

    let body = document.getElementsByTagName('body')[0]
    console.log(body)
    body.appendChild(div)

}
// ==============================================================================


function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
 }


// ==============================================================================

    function ex3(){
        let ul = document.getElementsByTagName('ul')[0]
        nomes.forEach(element => {
            let novoElemento = document.createElement('li')
            let texto = document.createTextNode(element)

            novoElemento.appendChild(texto)
            ul.appendChild(novoElemento)
        });
    }

    ex3()

// ==============================================================================


function adicionar(){
    let nome = document.getElementsByTagName('input')[0].value
    let ul = document.getElementsByTagName('ul')[0]
    
    let novoElemento = document.createElement('li')
    let texto = document.createTextNode(nome)

    novoElemento.appendChild(texto)
    ul.appendChild(novoElemento)

    
}