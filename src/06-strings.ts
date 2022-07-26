(() => {
  let productTitle = 'Balones';


  //nos arroja un error
  productTitle = null;
  productTitle = () => {};
  productTitle = 123;
  productTitle = 'guayos';
  console.log('productTitle', productTitle);

  //también con comilla doble
  const productDescription = "guayos blablablabla";
  console.log('productDescription', productDescription);

  let isNew: boolean = false;
  let productPrice = 100;


  //con el backtick me permite concatenar y escribir en varias lineas
  const summary = `
     title: ${productTitle}
     description: ${productDescription}
     price: ${productPrice}
     isNew: ${isNew}
  `;

  console.log('summary', summary);
})();
