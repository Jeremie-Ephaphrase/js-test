//whats an object?

//think about objects in the non - programming sense, like a pen. a pen can have different ink colors, be a bic or any other make 

//javascript with objects 

//creste sn object
//here is a javascript representation of a blue Bic ballpoint pen.

let pen = {
    type: "ballpoint",
    color: "blue",
    brand: "bic"
};

//after creaing and object you can access the result of its properties using dit notation such as myobject.myproperty.

console.log(pen.type); //will be ballpoint
console.log(pen.color); //will be blue
console.log(pen.brand); //will be bic

console.log("i am using a " + pen.brand + pen.color + " pen"); //this how you concatinate


//creating a cake with flavor, price, layers
//and concatiante it 

let cake = {
    flavor: "choclate",
    price: "R49",
    layers: 4,
    occassion: "wedding",
}



//the cake is actually for an annivasary 

cake.occassion = "anniversarry";
cake.layers = 6 + 3;

console.log("i baught " + cake.flavor + " for " + cake.price + " it had " + cake.layers + " for my aunts " + cake.occassion);


//methods to objects 
//describe a cake 

function describe(cake) {
    var description = " The " + cake.occassion + " cake has a " + cake.flavor + " flavor, " + cake.layers + " layers, and costs " + cake.price + ".";
    return description;
}

console.log(describe(cake));


//now for an alternative approach creating a describe property yhat houses a method


let cakes = {
    flavor: "choclate",
    price: "R49",
    layers: 4,
    occassion: "wedding",

    //describe the  cake 

    //   function describes(cakes) {
    //    var describes = " The " + cakes.occassion + " cake has a " + cakes.flavor + " flavor, " + cakes.layers + " layers, and costs " + cakes.price + ".";
    //    return describes;
    //  }
};

//console.log(cakes.describes());



//creating a student and giving it properties (characteristics)

let student = {
    name: "jeremie",
    gender: "male",
    age: 23,
    height: 1.79,
    location: "cape town",
    transport: "taxi",
    course: "javascript and php",


    describe: function() {
        var feedback = "My name is " + this.name + " im " + this.gender + " im " + this.age + " years old standing " + this.height + " tall living in " + this.location + " i travel by " + this.transport + " i learned " + this.course + " during my time at codespace ."

        return feedback;
    }
};

console.log(student.describe());