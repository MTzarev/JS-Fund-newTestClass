class Dog{
    constructor (name){
        this.name = name;

    }
    speak(){
       return (`${this.name} says Woof`);
    }
    litlleSpeak(){
        return (`${this.name} says guci-guci`)
    }
        
    
}
let dog = new Dog (`Djesa`)
let litlleDog = new Dog (`minion`)

console.log(dog.speak());
console.log(litlleDog.litlleSpeak());