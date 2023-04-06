import { getShoppingCart } from "../../utilities/fakedb";

const CartProductsLoader = async () => {
    const loadedProducts = await fetch('products.json');
    const products = await loadedProducts.json();
    // console.log(products)

    const savedCart = [];
    const storedCart = getShoppingCart();
    // console.log(storedCart)
    for(const id in storedCart){
        const addedCart = products.find(pd => pd.id === id);
        if(addedCart){
            const quantity = storedCart[id];
            addedCart.quantity = quantity;
            savedCart.push(addedCart);
        }
    }
    return savedCart;
}
export default CartProductsLoader;