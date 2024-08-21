import { useDispatch } from 'react-redux';
import { removeContact, editContact } from '../redux/contactsSlice';
import styled from 'styled-components';

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #ddd;
  font-size: 1rem;

  &:last-child {
    border-bottom: none;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 0rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  margin-left: 10px;
  border: none;
  border-radius: 5px;
  background-color: #dc3545;
  color: #fff;
  cursor: pointer;
  font-size: 0.875rem;

  &:hover {
    background-color: #c82333;
  }
`;

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeContact(contact.id));
  };

  const handleEdit = () => {
    const updatedName = prompt('Novo Nome', contact.name);
    const updatedEmail = prompt('Novo E-mail', contact.email);
    const updatedPhone = prompt('Novo Telefone', contact.phone);

    if (updatedName && updatedEmail && updatedPhone) {
      dispatch(editContact({
        id: contact.id,
        updatedInfo: { name: updatedName, email: updatedEmail, phone: updatedPhone }
      }));
    }
  };

  return (
    <Item>
      <Info>
        <p>{contact.name}</p>
        <p>{contact.email}</p>
        <p>{contact.phone}</p>
      </Info>
      <ButtonContainer>
        <Button onClick={handleEdit}>Editar</Button>
        <Button onClick={handleRemove}>Remover</Button>
      </ButtonContainer>
    </Item>
  );
};

export default ContactItem;
