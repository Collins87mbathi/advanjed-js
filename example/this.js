

const person = {
    name: 'collins',
    sayMyName : function () {
        console.log(`my name is ${this.name}`);
    }
}

person.sayMyName(); 