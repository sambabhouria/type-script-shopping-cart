import React, { useReducer } from 'react';
import styled from 'styled-components';
import layoutConstants from './layout/layout-constants';
import cartReducer from './reducers/cart-reducer';
import TYPES from './reducers/types';
import CartContext from './pages/cart/context/cart-context';
import Content from './layout/content';
import CartStorage from './service/cart-storage';
import logo from './logo.svg';
import './App.css';



const StyledApp = styled.div`
  margin-top: ${layoutConstants.NAVBAR_HEIGHT}px;
`;

const initialValues = {
  products: CartStorage.getProductsCart(),
};

const App: React.FC = () => {

  return (
    <StyledApp>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
  </StyledApp>
  );
};

export default App;
