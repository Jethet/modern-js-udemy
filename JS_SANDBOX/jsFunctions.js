// Giving default values for parameters:

function countTwo(x = 5, y = 1){  // 5 and 7 are default values
    return x + y;
}
console.log(countTwo(12, 17)); // = 29
console.log(countTwo());  // No parameters given, so default parameters: = 6

// IMMEDIATELY INVOKABLE FUNCTION EXPRESSIONS: IIFEs
// An IIFE is a function that is declared and run at the same time

(function(){
    console.log('IIFE Ran ....');
})();  // Parentheses are needed because this is a function !

(function(name){
    console.log('Hello ' + name);
})('default');

// Property methods: a function that is inside an object is a method
const todo = {
    add: function(){
        console.log('Add todo ..');
    },
    edit: function(id){
        console.log(`Edit todo ${id}`);
    }
};

// Define function outside of the object:
todo.delete = function(){
    console.log('Delete todo ...');
};

todo.add();
todo.edit(15);
todo.delete();