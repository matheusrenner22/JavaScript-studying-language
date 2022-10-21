// if...else

var temperature = 36.9;
var highTemperature = temperature >= 37.5;
var mediumTemperature = temperature < 37.5 && temperature >= 37;

if(highTemperature) {
    console.log('Febre alta');
} else if(mediumTemperature) {
    console.log('Febre moderada');
} else {
    console.log('Saudável');
}