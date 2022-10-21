// Estrutura de repetição
// for

// O continue pula tudo que está prestes a acontecer dentro do escopo do for após ele
for(let i = 0; i < 10; i++) {
    if(i === 5) {
        continue;
    }

    console.log(i);
}