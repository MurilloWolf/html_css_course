var endereco = {
    rua: "Rua dos pinheiros",
    numero: 1293,
    bairro: "Centro",
    cidade: "São Paulo",
    uf: "SP"
}

function exe1(){
    return 'O usuario mora em '+endereco.cidade+' / '+endereco.uf+', no bairro '+endereco.bairro+', na '+endereco.rua+
    'com numero '+endereco.numero;
}

/* ====================================================================================================================== */

function pares(x, y) {
  for(var i = x; i < y ; i++){
    if((i%2)==0)      
    console.log(i)
  }

}


/* ====================================================================================================================== */


 function temHabilidade(skills) {
    var resultado = false
    skills.forEach(element => {
        if(element ==='Javascript')
            resultado =  true
    });

    return resultado
}
   var skills = ["Javascript", "ReactJS", "React Native"];
   console.log(temHabilidade(skills)) // true ou false


   //JEITO CERTO

   function temHabilidadeCorrigido(skills){
       return skills.indexOf('Javascript') != -1
   }

   /* ====================================================================================================================== */

   var usuarios = [
    {
    nome: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
   ];
