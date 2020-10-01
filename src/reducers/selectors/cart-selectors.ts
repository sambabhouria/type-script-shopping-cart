import Product from '../../pages/products/product';
import CartStorage from '../../service/cart-storage';

export function clearSelect(): Product[] {
    CartStorage.clearCart();
    return [];
  }


export function removeSelect(products: Product[], id = ''): Product[] {
    CartStorage.removeProductOfCart(id);
    return products.filter(product => product.id !== id);
  }

  export function addSelect(products: Product[], product?: Product): Product[] {
    if (product && !products.find(p => p.id === product.id)) {
      CartStorage.addProductToCart(product);
      return [...products, product];
    }
    return products;
  }
