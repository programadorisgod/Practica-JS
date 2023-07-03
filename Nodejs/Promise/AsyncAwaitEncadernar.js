function orderProducto(product) {
  return new Promise((resolve, reject) => {
    console.log(`Sorting out : ${product} de AtlongodSAS`);
    setTimeout(() => {
      if (product === 'taza') {
        resolve('Sorting out taza with logo the AtlongodSAS ')
      } else {
        reject('we re sorry the product not is availabe')
      }
    }, 3000)

  })
}



async function makeAnOrder(product) {
  try {
    console.log('Procesando respuesta');

    const respuesta = await orderProducto(product);
    console.log(respuesta);

  } catch (error) {
    console.log(error);

  }
}
makeAnOrder('taza')