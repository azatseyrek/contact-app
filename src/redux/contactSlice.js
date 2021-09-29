import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

export const contactAdaptor = createEntityAdapter();

const initialState = contactAdaptor.getInitialState();

export const contactSelector = contactAdaptor.getSelectors(
  (state) => state.contacts
);

const contactSlice = createSlice({
  name: "contacts",
  initialState, //initialState = initialState yazmak yerine sadece initialState yazilabilinir.
  reducers: {
    addContact: contactAdaptor.addOne,
    addContacts: contactAdaptor.addMany,
    deleteContact: contactAdaptor.removeOne,
    removeAllContacts: contactAdaptor.removeAll,
    editContact: contactAdaptor.updateOne,
  },
});

export default contactSlice.reducer;

export const { addContact, addContacts, deleteContact, removeAllContacts, editContact } = contactSlice.actions;

//redux icerisindeki data normalized yapisi kullanilacak farkli olarak
