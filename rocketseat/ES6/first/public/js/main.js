class TodoList{
    //primeiro metodo a ser executado toda vez que for estanciado
    constructor(){
        this.todos =[];
    }

    addTodo(){
        this.todos.push('Novo todo')
        console.log(this.todos)
    }
}
const MinhaLista = new TodoList();
document.getElementById('novo').onclick = function(){
    MinhaLista.addTodo()
}
/*
const MinhaLista = new TodoList();

function adicionarTodo(){
    MinhaLista.addTodo();
}
*/