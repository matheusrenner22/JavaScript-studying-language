// função é um liquidificador

function fazerSuco(fruta1, fruta2) {
    var bananaFruit = fruta1.toUpperCase() === 'BANANA';
    var appleFruit = fruta2.toUpperCase() === 'APPLE';
    
    if (bananaFruit && appleFruit) {
        console.log('Batido de banana com maçã meu consagrado');   
    }
}

fazerSuco('banana', 'apple');
