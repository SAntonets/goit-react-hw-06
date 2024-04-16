/* reducer.js - файл оголошення функцій-редюсерів для оновлення стану */
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    contacts: [],
};  

const contactsSlice = createSlice({

 name: "contacts",
 
    initialState: initialState,
 
 reducers: {
     addContact(state, action) {
       state.contacts.push(action.payload);
     },
     deleteContact(state, action) { 
       state.contacts = state.contacts.filter(el => el.id !== action.payload);
     },
     changeFilter(state, action) {
       state.filter = action.payload;
     },
 },
});


export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
