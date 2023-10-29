// Stacks

// function : push, pop, peek , length 

var letters = []; // this is our stack 

var word = 'greenbanana'

var rword = "";

// put letter of word into stack
for(var i=0; i< word.length; i++){
    letters.push(word[i]);
}

//pop off the stack in reverse order
for(var i=0; i<word.length; i++){
    rword += letters.pop()

}

if(rword === word){
    // console.log(word + "is a fruit")
} else{
    // console.log(word + 'is not a fruit')
}



// Create a stack 

var Stack = function(){
    this.count = 0
    this.storage = {}

    //Adds a value onto the end of the stack 

    this.push = function(value){
        this.storage[this.count] = value;
        this.count++;
    }

    this.pop = function(){
        if(this.count===0){
            return undefined
        }
        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count]
        return result;
    }

    this.size = function (){
        return this.count;
    }

    // return the value at the end of the stack 
    this.peek = function(){
        return this.storage[this.count -1]
    }
}

var myStack = new Stack()

myStack.push(1)
myStack.push(2)
console.log(myStack.peek());//2
console.log(myStack.pop());//2
console.log(myStack.peek());//1

myStack.push("redbanana")

console.log(myStack.size());//2
console.log(myStack.peek());//redbanana
console.log(myStack.pop());//redbanana
console.log(myStack.peek());//1


