// const wmfAll = document.querySelectorAll('#book-list li .name');

// Array.from(wmfAll).forEach(function(wmfAll){
//     console.log(wmfAll.textContent);
//     wmfAll.textContent += ' - Moonlight Story';
// })

const bookList = document.querySelector('#book-list');

bookList.innerHTML += '<p>This is the end of the story</p>';

console.log(bookList);

// const wmf = document.querySelector('#book-list li .name');

// console.log(wmfAll);

// console.log(wmf);