//— Написать поиск товаров, который не чувствительный к регистру.
//- Поиск всех вхождений вместо find() - filter()

const products = [
  { name: 'Macbook Pro 13', currency: 1300 },
  { name: 'Matebook Pro 15', currency: 1100 },
  { name: 'SurfaceBook Pro 13', currency: 1200 },
  { name: 'SurfaceBook Pro 15', currency: 5000 },
];

let productName = 'surface';

const responseByName = products.filter(product => {
  return product.name.toLowerCase().indexOf(productName.toLowerCase()) > -1;
})


// ЭТОТ ВАРИАНТ ПОЧЕМУ-ТО ВЫДАЕТ UNDEFINED ((

// function searchProduct(products, productName) {
//   products.filter(product => {
//     return product.name.toLowerCase().indexOf(productName.toLowerCase()) > -1;
//   })
// };
// console.log(searchProduct(products, 'surface'));


console.log(responseByName);