import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: (state, action) => {
      state.push(action.payload);
    },
    removeContact: (state, action) => {
      return state.filter(contact => contact.id !== action.payload);
    },
    editContact: (state, action) => {
      const { id, updatedInfo } = action.payload;
      const contact = state.find(contact => contact.id === id);
      if (contact) {
        Object.assign(contact, updatedInfo);
      }
    }
  }
});

export const { addContact, removeContact, editContact } = contactsSlice.actions;
export default contactsSlice.reducer;
