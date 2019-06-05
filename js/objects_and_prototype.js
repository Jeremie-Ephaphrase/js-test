// lets add some more sweet-treats (patries), as well as a "type" property to distinguish betwwen multipe types of sweet-treats.


//object
let muffin = {
    type: "muffin",
    flavor: "blueberry",
    layers: 1,
    price: "R20",
    occasion: "breakfast",

    //describe the pastry
    describe: function() {
        var description = "The " + this.type + " is a " + this.occasion + " pastry, has a " + this.flavor + " flavor, " + this.layers + " layer(s), and costs " + this.price + ".";
        return description;
    }
};



//obejects and prototype 
// in addition to its special properties, every javascript object has an internal property called prototype. this is a link(known as reference) to another object.when trying to access a property that does not exist in an object js tries to find this property in the prototype of this object.

var anObject = {
    a: 2
};


//create anotherObject using anObject as a prototype 

var anotherObject = Object.create(anObject);
console.log(anotherObject.a); //will show 2

//this type of relationship betwwen JS objects is called delegation;
// an object delegates part of its operation to its prototype 

//cake prototype 

var Pastry = {
    type: "",
    flavor: "",
    layers: 0,
    price: "",
    occasion: "",

    //describe the pastry 
    describe: function() {
        var description = "The " + this.type + " is a " + this.occasion + " pastry, has a " + this.flavor + " flavor, " + this.layers + " layer(s), and costs " + this.price + ".";
        return description;
    }
};

let muffin = Object.create(Pastry);
muffin.type = "muffin";
muffin.flavor = "blueberry";
muffin.layers = 1;
muffin.layers = "R20";
muffin.occasion = "breakfast";

let cake = Object.create(Pastry);
cake.type = "cake";
cake.flavor = "vanilla";
cake.layers = 3;
cake.price = "R310";
cake.occasion = "birthday";

console.log(muffin.describe());
console.log(muffin.describe());

//the process of creating a pastrry is abit repetitive for each character, you must successively give a value to each of its properties, you can do better br creating a initialization function .

var Pastry = {
        //inintilize the pastry 
        init: function(type, flavor, layers, price, occasion) {
            this.type = type;
            this.flavor = flavor;
            this.layers = layers;
            this.price = price;
            this.occasion = occasion;
        },

        //decribe the pastry 
        describe: function() {
            var describe = " the " = this.type + " is a " + this.occasion + " pastry, has a " + this.flavor + " flavor, " + this.layer + " layers(s)",
        }

            let muffin = Object.create(Pastry);
        muffin.init("muffin", "blueberry", 1, "r20", "breakfast");

        let cake = Object.create(Pastry);
        cake.init("cake", "vanilla", 3, "R310", "birthday");

        console.log(muffin.describe());