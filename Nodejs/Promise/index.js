const stateOrder = () => {
    return Math.random() < 0.8;
};

const myOrder = new Promise((resolve, reject) => {
    setTimeout(() => {
        stateOrder()
            ? resolve("Order successful his pizza this in path ")
            : reject("Order rejected. try again");
    }, 3000);
});

myOrder
    .then((resolve) => {
        console.log(resolve);
    })
    .catch((err) => {
        console.log(err);
    });
