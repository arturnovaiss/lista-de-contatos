import React from 'react';
import styled from 'styled-components';
import ContactForm from './src/components/ContactForm';
import ContactList from './src/components/ContactList';
import GlobalStyle from './globalStyles';


const AppContainer = styled.div`
  max-width: 900px;
  margin: 2rem auto;
  padding: 2rem;
  background: #f8f9fa;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const Header = styled.header`
  background-color: #007bff;
  color: #fff;
  padding: 1rem;
  border-radius: 8px 8px 0 0;
  text-align: center;
  font-size: 1.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  width: 100%; 
  box-sizing: border-box; 
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Header>Lista de Contatos</Header>
        <ContactForm />
        <ContactList />
      </AppContainer>
    </>
  );
};

export default App;
