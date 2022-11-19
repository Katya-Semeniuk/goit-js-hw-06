const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
       // 1=>

// const ulEl = document.querySelector('.gallery');

// const elements = images.map(option => {
 
//   const listEl = document.createElement('li');
//     listEl.classList.add('.img-list')

//   const imgEl = document.createElement('img');
//   imgEl.classList.add('.img-gallery');
//   imgEl.src = `${option.url}`;
//   imgEl.alt = `${option.alt}`;

//   listEl.append(imgEl);
 
// ulEl.append(listEl)
// console.log(ulEl)
// }
//   )

       // 2=>

const ulEl = document.querySelector('.gallery');



const elements = images
  .map((img) => `<li class="img-list"> <img class="img-gallery" src="${img.url}" alt="${img.alt}" > </li>`)
    .join('')

ulEl.insertAdjacentHTML("afterbegin", elements)

console.log(ulEl);