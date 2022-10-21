/*
    Buscando e contando dados em Arrays

    Baseado no Array de Livros por categoria abaixo, faça os seguintes desafios

        * Contar o número de categorias e o número de livros em cada categoria
        * Contar o número de autores
        * Mostrar livros do autor Augusto Cury
        * Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
*/

var booksByCategory = [
    {
        category: 'Riqueza',
        books: [
            {
                title: 'Os segredos da mente milionaria',
                author: 'T. Harv Eker',
            },
            {
                title: 'O homem mais rico da Babilõnia',
                author: 'George S. Clason',
            },
            {
                title: 'Pai rico, pai pobre',
                author: 'Robert T. Kiyosaki e Sharon L. Lechter',
            },
        ],
    },
    {
        category: 'Inteligência Emocional',
        books: [
            {
                title: 'Você é Insubstituivel',
                author: 'Augusto Cury',
            },
            {
                title: 'Ansiedade - Como enfrentar o mal do século',
                author: 'Augusto Cury',
            },
            {
                title: 'Os 7 hábitos das pessoas altamente eficazes',
                author: 'Stephen R. Covey',
            },
        ],
    },
];

var totalCategories = booksByCategory.length;
console.log(`Total de categorias: ${totalCategories}`);

for (var categories of booksByCategory) {
    console.log(`Total de livros da categoria: ${categories.category}`);
    console.log(`${categories.books.length} livros`);
}

function countAuthors() {
    var authors = [];

    for (var category of booksByCategory) {
        for (var book of category.books) {
            if (authors.indexOf(book.author) == -1) {
                authors.push(book.author);
            }
        }
    }

    return `total de autores ${authors.length}`;
}

console.log(countAuthors());


function booksOfAuthor(author) {
    var books = [];

    for (var category of booksByCategory) {
        for (var book of category.books) {
            if (book.author === author) {
                books.push(book.title);
            }
        }
    }

    return `Os livros do autor ${author}: ${books.join(', ')}`;
}

console.log(booksOfAuthor('Augusto Cury'));