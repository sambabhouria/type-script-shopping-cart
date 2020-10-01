import Product from '../../Products/product';

export default  interface CartContextManager {
    clearCart: Function;
    removeItem: (id?: string )=> void ;
    addItem: (product:Product)=> void;
    hasInTheCart : (product: Product)=> boolean;
    products : Product[];
}
