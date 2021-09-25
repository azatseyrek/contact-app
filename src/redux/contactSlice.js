import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

export const contactAdaptor = createEntityAdapter();

const initialState = contactAdaptor.getInitialState();

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
