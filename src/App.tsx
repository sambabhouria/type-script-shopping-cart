import React, { useReducer } from 'react';
import styled from 'styled-components';
import layoutConstants from './layout/layout-constants';
import cartReducer from './reducers/cart-reducer';
import TYPES from './reducers/types';
import CartContext from './pages/cart/context/CartContext';
import Navbar from './layout/Navbar';
import Content from './layout/Content';
import CartStorage from './service/cart-storage';
import Product from './pages/Products/Product';
import Routes from './Routes';
import Footer from './layout/Footer';
import logo from './logo.svg';
import './App.css';



const StyledApp = styled.div`
  margin-top: ${layoutConstants.NAVBAR_HEIGHT}px;
`;

const initialValues = {
  products: CartStorage.getProductsCart(),
};

const App: React.FC = () => {

  const [state, dispatch] = useReducer(cartReducer, initialValues);
  function clearCart() {
    dispatch({ type: TYPES.CART_CLEAR });
  }

  function removeItem(id: string = '0'): void {
    dispatch({ type: TYPES.CART_REMOVE, id });
  }

  function addItem(product: Product): void {
    dispatch({ type: TYPES.CART_ADD, product });
  }

  function hasInTheCart(product: Product): boolean {
    return state.products.filter(p => p.id === product.id).length > 0;
  }


  return (

     <StyledApp>
      <CartContext.Provider
        value={{
          clearCart,
          products: state.products,
          removeItem,
          addItem,
          hasInTheCart,
        }}
      >
        <Navbar />
        <Content>
          <Routes />
        </Content>
        <Footer />
      </CartContext.Provider>
    </StyledApp>


  //   <StyledApp>
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.tsx</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  // </StyledApp>
  );
};

export default App;
