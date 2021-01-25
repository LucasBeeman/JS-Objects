let Dog = {
    name: "Spot",
    numLegs: 4,
sayLegs: function() {return `This animal has ` + this.numLegs + " legs, and its name is " + Dog.name}
};

console.log(Dog.name);
console.log(Dog.numLegs);

document.getElementById("title").innerHTML = Dog.sayLegs();