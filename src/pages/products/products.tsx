import React, { Fragment, useContext, useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import { RouteComponentProps } from 'react-router-dom';
import { Header, Segment } from 'semantic-ui-react';


const Products: React.FC<RouteComponentProps> = () => {

    return (
        <Fragment>
          <Helmet>
            <title>Produtos</title>
          </Helmet>
          </Fragment>
    )
 }

export default Products;
