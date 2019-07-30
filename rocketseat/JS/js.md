# **Curso JavaScript**
####Switch
[meu link](www.google.com "links")
switch( variavel ){
case 'M':

        break
        case 'F':

        break

        default :
    }

####indexOf()

    O método indexOf() retorna a posicao do primeiro índice em que o elemento pode ser encontrado
    no array, retorna -1 caso o mesmo não esteja presente.

    Ex:
    ´´´
    var skills = ["Javascript", "ReactJS", "React Native"];

    function temHabilidade(skills) {
        return skills.indexOf('Javascript') != -1
    }

    console.log(temHabilidade(skills)) // true ou false
    ´´´

####Operador ternário

    (condicao) ? 'se_condição_true' : 'se_condicao_false'

    Ex:
    var m = 18
    return (m >=18 ) ? 'maior de idade' : 'menor de idade'

####Intervalo : funcao que executa varias vezes dentro de um intervalo

    -definindo um intervalo
    setInterval('funcao','intervalo')

    Ex:
    function HelloWorld(){
        console.log('HelloWorld')
    }
    setInterval(HelloWorld, 1000);

    *Nao se usa 'HelloWorld()' com os parenteses
    pq se nao isso faz com que execute a função ao invés de
    referenciala, sempre que for referenciar uma função, nao
    se utiliza o '()'

####TimeOut: ao inves de executar varias vezes a cada um intervalo de tempo
ele vai esperar um tempo para executar a funcao referenciada

    -definindo um timeout
        setTimeout(HelloWorld, 5000)

\*\*O tempo tanto no TimeOut quanto no Interval é em milesegundos 'ms'

-- DOCUMENT
\*\*voce pode vincular um elemento html do DOM a uma variavel Js:
var elementoHTML = document.getElement[ById,ByTagName,ByClassName]('')

--document.getElementById('id') : sempre retorna um unico elemento ou null

--document.getElementByTagName('tagname'): retorna um HTMLColection(lista) de elementos html com aquela tag name
voce pode selecionar o elemento que voce quer colocando o indice dele na frente
Ex: document.getElementByTagName('input')[0]

--document.getElementByClassName('classname')

\*\*QuerySelector : Retorna apenas um elemento, para retornar uma lista de elementos usar querySelectorAll()

--document.querySelector('caminho do elemento') : com essa função js, voce consegue pegar o elemento passando o caminho dele  
 Ex: document.querySelector('content div#app input')

--document.querySelector('input[name=nome]') : pegando o elemento com tag input, que tem a propriedade 'name' = 'nome'
--document.querySelector('button.botao') : pegando o elemento da tag button que tem a classe botao

\*\* Tambem é possivel 'linkar' funções JS client-side a partir do documento .js  
 Ex:
var elementoHTML = document.querySelector('button.botao')
elementoHTML.onclick = function(){
alert('botao foi clicado')
}

    Pode realizar isso com qualquer função, como o keypress, onfocus, ...

\*\*CRIANDO UM NOVO ELEMENTO ATRAVEZ DO JS

-- Criar elemento:
var novoElemento = document.createElement('a'); // ('tag'), dentro do parenteses é colocado a tag que deseja criar;

-- Colocando atributos para o elemento
novoElemento.setAttribute('href', 'http://google.com');
novoElemento.setAttribute('title', 'site do goole');

-- colocando um texto dentro da tag criada (<a> TEXTO </a>)
var texto = document.createTextNode('Acessar o Google')

-- Adicionando um filho ao elemento criado
novoElemento.appendChild(texto)

-- Inserindo o elemento dentro do DOM
var div = document.querySelector('#app')
div.appendChild(novoElemento)

-- Tambem é possivel remover elementos do html pelo JS  
 Ex:
var div = document.querySelector('#app')
var elemento = document.querySelector('#inputIndesejado')

    div.removeChild(elemento)

-- Trocando atributos css
Ex:
var div = document.querySelector('.app')
div.sytle.width = 100
div.style.background = #F0A

-- funcao splice(posicao, quantidade)
Funcao que remove itens de um array partindo de uma posicao
Ex:
const arr= ['murillo','cunha','pao','will']
arr.splice(0,1) // vai remover elementos partindo da posicao 0, vai remover 1 elemento

-- STORAGE : armazenamento local

localStorage é uma variavel global que pode ser usada para armazenar e recuperar itens salvos de forma local

    Ex : Salvar um vetor.
    localStorage.setItem('nome_de_como_vai_ser_salvo', JSON.stringfy(vetor))

    Como o localStorage só salva 'string' temos que usar a função JSON.stringfy() que vai transformar o
    vetor em uma JSON em formato string, assim na hora de recuperar os dados é necessário realizar uma conversão também

    Ex: recuperar dados
    var dados = JSON.parse(localStorage.getItem('nome_de_como_vai_ser_salvo'))

-- Como definir valores padões para variaveis
Basta colocar ao lado o operador logico de 'ou', '||', e então o valor padrao
Ex:
var dados = JSON.parse(localStorage.getItem('variavel')) || ['hello', 'world']

Nesse caso se nao retornar nada do localStorage a variavel vai ter valor de um array '['hello','word']

--AJAX : requisição assincrona a algum back-end => fazer requisições ao servidor sem atualizar a pagina

- Como exemplo vamos utilizar uma api do github que retorna os dados de um usuario(perfil)

--Criar variavel para utilizar ajax
var xhr = new XMLHttpRequest();

--Definir o tipo de requisição e onde vai ser feito
xhr.open('GET','https://api.github.com/users/MurilloWolf')

xhr.send(null)

xhr.onreadystatechange = function (){
//valor 4 que a resposta da aquisição voltou
if( xhr.readyState === 4)
console.log(JSON.parse(xhr.responseText)
}

--PROMISES
declarando uma promise :
new Promise(function (resolve, reject){

})

- O resolve e reject são 2 funções tambem, resolve utilizamos quando temos como resultado um sucesso
  e o reject quando o resultado foi um erro/falha

\*\*COMO FAZER A CHAMADA DE UMA PROMISE:

como o JS nao vai esperar o retorno da promise para continuar executando, fazer da seguinte maneira
nao vai gerara o resultado esperado, ja que ele ira executar o 'console.log' sem a promise ter terminado :

var resultado = minhaPromise()
console.log(resultado)

o jeito certo de realizar isso é da seguinte maneira:

minhaPromise()
.then(function(response){

    })
    .catch(function(error){

    })

Desse modo quando a promise retornar algo no 'resolve' ele ira executar o '.then'
.then(function (response){

})

Quando a promise retornar algo no 'reject' ele ira executar o '.catch'
.catch(function( error ){

})

e tanto o 'response' quanto 'error' sao os resultados retornados

--AXIOS : uma biblioteca que facilita (Encapsula) a forma de fazer requisições ajax de apis
como utilizar via Cmd

<script src="https://unpkg.com/axios/dist/axios.min.js"></script>

forma de utilizar

axios.get('https://api.github.com/users/MurilloWolf')
.then(function(response){
console.log(response)
})
.catch(function(error){
console.warn(error)
})
