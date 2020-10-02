import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Loader } from 'semantic-ui-react';
import styled from 'styled-components';

const Home = lazy(() => import('./pages/home'));
const Products = lazy(() => import('./pages/Products'));
const Cart = lazy(() => import('./pages/cart'));

const StyledContent = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
`;

const Routes: React.FC = () => {
  const loader = (
    <StyledContent>
      <Loader active inline="centered" size="massive">
        CARREGANDO...
      </Loader>
    </StyledContent>
  );
  return (
    <Suspense fallback={loader}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/produits" component={Products} />
        <Route path="/panier" exact component={Cart} />
        <Route path="*" render={() => <Redirect to="/" />} />
      </Switch>
    </Suspense>
  );
};

export default Routes;
