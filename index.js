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

// function searchProduct(products, productName) {
//   products.filter(product => {
//     return product.name.toLowerCase().indexOf(productName.toLowerCase()) > -1;
//   })
// };

console.log(responseByName);
// console.log(searchProduct(products, 'surface'));