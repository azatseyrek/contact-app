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
  },
});

export default contactSlice.reducer;

export const { addContact, addContacts } = contactSlice.actions;

//redux icerisindeki data normalized yapisi kullanilacak farkli olarak
