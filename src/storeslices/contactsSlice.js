import {  createSlice } from '@reduxjs/toolkit';

const initialState = {
  allContacts:[],
  
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    loadContacts:(state,action)=> {
        const contacts=action.payload;
        state.allContacts=contacts;
    },
    removeContact:(state,action) => {
        var Id=action.payload;
        var filteredContacts=state.allContacts.filter(c => c.id!=Id);
        state.allContacts=filteredContacts;
    },
    addContact:(state,action) =>{
        var newContact=action.payload;
        state.allContacts=[...state.allContacts,newContact]
    }
    // Other reducers go here
  },
    extraReducers(builder) {

    }
});

export const {loadContacts,removeContact,addContact } = contactsSlice.actions;
export default contactsSlice.reducer;