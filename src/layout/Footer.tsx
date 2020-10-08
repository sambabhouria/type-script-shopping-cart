import React from 'react';
import styled from 'styled-components';
import { Header, Icon } from 'semantic-ui-react';

const StyledFooter = styled.footer`
  width: 100%;
  min-height: 200px;
  background-color: #f26202;
  margin-top: 30px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <Header as="h2">
        <Icon name="cart" />
        <Header.Content>
          Shopping Cart
          <Header.Subheader>Exemple de projet d'achat</Header.Subheader>
        </Header.Content>
      </Header>
      <a
        style={{ color: '#000' }}
        href="https://github.com/sambabhouria/type-script-shopping-cart"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon name="github" size="large" />
      </a>
    </StyledFooter>
  );
};

export default Footer;
