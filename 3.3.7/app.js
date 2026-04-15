function rekniAhoj() {
    console.log("čus!!");
}

rekniAhoj();

let poydrav = "Pozdrav!";

function ukaypoydrav() {
    console.log(poydrav);
}

function testLokal() {
    let localVolume = 123;
    console.log(localVolume);
}

ukaypoydrav();
testLokal();


if (true) {
    var y = "var blok nerespektuje";
}
console.log(y);

// parametra a argument

function seyHello (name) { // name = parametr
    console.log("Ahoj " + name);
}

seyHello("Alice");

function addNumber(num1, num2) {
    console.log(num1 + num2);
}
addNumber(4,1);