function sum() {

}

function Car(model) {
    this.model = model;
    this.nbWheels = 4;

    this.addWheels = function(nb) {
        this.nbWheels += nb;
    }
    this.removeWheels = function(nb) {
        this.nbWheels -= nb;
    }
}

let car1 = new Car("Mazda");
console.log(car1)
car1.addWheels(2)
console.log(car1)
car1.removeWheels(4)
console.log(car1)

const str = 'lorem ipsum'
console.log(str[4])
// for (let i = 0; i < str.length; i++) {
//     console.log(str[i]);
// }


const array = ["lorem", "ipsum", "dolor"];

// const ipsumIndex = array.findIndex((value) => value === "lorem");

// console.log(ipsumIndex)

// if (ipsumIndex >= 0) {
//     console.log(array.splice(ipsumIndex, 1));
// }

console.log(array)

console.log(array.join(' - '))

array.forEach((value) => {
    console.log(value)
})
const user = {
    firstName: 'John',
    lastName: 'Doe',
    role: 'moderator'
}
if (user.role === 'moderator' || user.role === 'administrator' || user.role === 'dev') {

}
if (['moderator', 'administrator', 'dev'].includes(user.role)) {
    if (['moderator', 'dev'].includes(user.role)) {

    }
    if (['administrator'].includes(user.role)) {

    }
}