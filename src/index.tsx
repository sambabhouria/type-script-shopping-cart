import React from 'react';
import ReactDOM from 'react-dom';
import Helmet from 'react-helmet';
import { BrowserRouter } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';



const Root: React.FC = () => (
  <BrowserRouter>
    <Helmet titleTemplate="%s | Shopping Cart" defaultTitle="Shopping Cart" />
    <App />
  </BrowserRouter>
);

ReactDOM.render(<Root />, document.getElementById('root'));
serviceWorker.unregister();
