// for...in

var person = {
    name: 'John',
    age: 30,
    weight: 88.6,
}

for (var property in person) {
    console.log(property);
    console.log(person[property]);
}