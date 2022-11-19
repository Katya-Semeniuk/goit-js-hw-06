// const categories = document.querySelector('#categories');

// console.log(`Number of categories: ${categories.children.length}`);



// console.log(`Category: ${categories.children[0].querySelector('h2').textContent}`)
// console.log(`Elements: ${categories.children[0].querySelectorAll('li').length}`)



// console.log(`Category: ${categories.children[1].querySelector('h2').textContent}`)
// console.log(`Elements: ${categories.children[1].querySelectorAll('li').length}`)

// console.log(`Category: ${categories.children[2].querySelector('h2').textContent}`)
// console.log(`Elements: ${categories.children[2].querySelectorAll('li').length}`)



const itemsEl = document.querySelectorAll(".item")
console.log('Number of categories:', itemsEl.length);

itemsEl.forEach(myFunction);

function myFunction(category) {
    const categoryTitleEl = category.firstElementChild;
    console.log('Category:', categoryTitleEl.textContent);

    const categoryListEl = categoryTitleEl.nextElementSibling;
    console.log(categoryListEl.childElementCount)
}