import React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Segment } from 'semantic-ui-react';
import { Helmet } from 'react-helmet';

const Home: React.FC<RouteComponentProps> = () => {
  return (
    <Segment placeholder>
      <Helmet>
        <title>Bienvenue</title>
      </Helmet>
      <Link to="produits">
        <Button fluid size="massive">
          voirs les Produits
        </Button>
      </Link>
    </Segment>
  );
};

export default Home;
