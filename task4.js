const books = [
    {
        author: 'Jeremy Brook',
        title: 'My childhood',
        release: 2023
    },
    {
        author: 'Samantha Jhones',
        title: 'Living with ten cats',
        release: 2020
    },
    {
        author: 'Bob Summers',
        title: 'Exploring far space',
        release: 2021
    },
    {
        author: 'Bill Brown',
        title: 'Insects in our garden',
        release: 2023
    },
    {
        author: 'Jessica Love',
        title: 'Programming for begginers',
        release: 2023
    }
];
const newBooks = [];

for (let i = 0; i < books.length; i++) {
    if (books[i].release == 2023) {
        newBooks.push(books[i].title);
    }
}
console.log(newBooks);