// Person constructor: a function with a name that starts with a Capital
function Person(name, dob) {
    this.name = name; //this variable will be assigned, it has FUNCTION scope
    this.birthday = new Date(dob);
    this.calculateAge = function(){
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }   
}

// Instantiate an object using 'new'
// const helen = new Person('Helen', 24);
// const john = new Person('John', 35);
// const mary = new Person('Mary', 45);

// use 'this' outside of the constructor function:
console.log(this);
// outside of the constructor, this is in the GLOBAL scope
// it is a WINDOW object, e.g. this.alert(1); will send an alert '1'

const helen = new Person('Helen', '9-10-81');
console.log(helen.calculateAge());
