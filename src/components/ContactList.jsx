import { useSelector } from 'react-redux';
import ContactItem from './ContactItem';
import styled from 'styled-components';

const List = styled.div`
  margin-top: 2rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #fff;
  padding: 1rem; 
`;

const NoContacts = styled.p`
  text-align: center;
  padding: 1rem;
  color: #666;
`;

const ContactList = () => {
  const contacts = useSelector(state => state.contacts);

  return (
    <List>
      {contacts.length > 0 ? (
        contacts.map(contact => (
          <ContactItem key={contact.id} contact={contact} />
        ))
      ) : (
        <NoContacts>Nenhum contato encontrado.</NoContacts>
      )}
    </List>
  );
};

export default ContactList;
