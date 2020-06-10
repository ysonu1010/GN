const app=new Vue({
    el:"#app",
    data:{
        title: 'Basic Todo App',
        newTodo:'',
         todos: []
        
    },
    methods: {
        addTodo(){
            this.todos.push({
                done:false,
                content: this.newTodo
              });
            this.newTodo = '';
        },
        
        removeTodo(todo){
            const todoIndex=this.todos.indexOf(todo);
            this.todos.splice(todoIndex,1);
        }
        
    }

});