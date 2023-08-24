// use local storage to manage cart data
const addToDb = id => {
    let placeCart = getplaceCart();
    // add quantity
    const quantity = placeCart[id];
    if (!quantity) {
        placeCart[id] = 1;
    }
        localStorage.setItem('place-cart', JSON.stringify(placeCart));
}

const removeFromDb = id => {
    const placeCart = getplaceCart();
    if (id in placeCart) {
        delete placeCart[id];
        localStorage.setItem('place-cart', JSON.stringify(placeCart));
    }
}

const getplaceCart = () => {
    let placeCart = {};

    //get the place cart from local storage
    const storedCart = localStorage.getItem('place-cart');
    if (storedCart) {
        placeCart = JSON.parse(storedCart);
    }
    return placeCart;
}

const deleteplaceCart = () => {
    localStorage.removeItem('place-cart');
}

export {
    addToDb,
    removeFromDb,
    getplaceCart,
    deleteplaceCart
}
