"use strict";
(() => {
    //forma inferida
    let productPrice = 100;
    productPrice = 12;
    console.log('productPrice', productPrice);
    //forma explicita
    let customerAge = 28;
    // forma erronea
    //customerAge = customerAge + '1'; //281
    //forma adecuada
    customerAge = customerAge + 1; //29
    console.log('customerAge', customerAge);
    //no quiero inicializar la variable, entonces por obligación la dejo de manera explicita
    let productInStock;
    console.log('productInStock', productInStock);
    if (productInStock > 10) {
        console.log('es mayor');
    }
    //lo convierten en INT si no lo lee dice NaN
    let discount = parseInt('100');
    console.log('discount', discount);
    if (discount <= 200) {
        console.log('aplica');
    }
    else {
        console.log('No aplica');
    }
    //exadecimal y binarios
    let hex = 0xFFF;
    console.log('hex', hex);
    let bin = 0b10100000000000000000000001111110000000;
    console.log('bin', bin);
    //simepre en minuscula
    //X const myNumber: Number = 10;
    const myNumber = 10;
})();
