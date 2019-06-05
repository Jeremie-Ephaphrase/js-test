//to create an object using constructor functions, we simply write a standalone function containing the init functionality that went for our object.instead of calling init, this 


function Pastry(type, flavor, levels, price, occasion) {
    this.type = type;
    this.flavor = flavor;
    this.levels = levels;
    this.price = price;
    this.occasion = occasion;
}

//now to instantiate it ,instead of callng and then an intit function, well simply do

//new Pastry(type, flavor, levels, price, occasion);

function Pastry(type, flavor, levels, price, occasion) {
    this.type = type;
    this.flavor = flavor;
    this.levels = levels;
    this.price = price;
    this.occasion = occasion;
}

Pastry.prototype.decribe = function() {
    var description = " the " + this.type + " is a " + this.occasion + "pastry, has a " + this.flavor + " flavor, " + this.levels + " layer(s),and costs" + this.price + ".";
    return description;
}

//now using constuctor functions, we can instantiate our objects on just one line and have the same result: 

let muffin = new Pastry("muffin", "blueberry", 1, "R20", "breakfast");
let cake = new Pastry("cake", "vanilla", 1, "R30", "breakfast");

console.log(muffin.decribe());
console.log(cake.decribe());

//exercise 

function bake(step1, step2, step3) {
    this.step1 = step1;
    this.step2 = step2;
    this.step3 = step3;

}

function bake1(step1, step2, step3) {
    this.step1 = step1;
    this.step2 = step2;
    this.step3 = step3;

}

bake.prototype.decribe = function() {
    var description = " you first " + this.step1 + " then you " + this.step2 + " then you can " + this.step3 + ".";
    return description;
};

bake1.prototype.decribe = function() {
    var description = " you first " + this.step1 + " then you " + this.step2 + " then you can " + this.step3 + ".";
    return description;
}


//now using constuctor functions, we can instantiate our objects on just one line and have the same result: 

let instruction = new bake("buy the ingredients needed to bake ", " mix all your ingredients in a pot ", " put it in the oven and wait 30minutes ", );
let bake2 = new bake1(" take the cake out ", " you fetch a kitchen knife ", " eat it ");

console.log(instruction.decribe());
console.log(bake2.decribe());