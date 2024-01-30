import { createSlice } from '@reduxjs/toolkit';
import {
  addContactsThunk,
  getContactsThunk,
  removeContactsThunk,
} from './operations';

const handlePending = (state: ContactsState) => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state: ContactsState, action: { payload?: string }) => {
  state.isLoading = false;
  state.error = action.payload;
};

export type Contact = {
  id: string,
  name: string,
  number: string,
}

type ContactsState = {
  contacts: Contact[],
  isLoading: boolean,
  error: string | null | undefined,
}

const initialState: ContactsState = {
  contacts: [],
  isLoading: false,
  error: null,
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = action.payload;
      })
      .addCase(getContactsThunk.rejected, handleRejected)
      .addCase(addContactsThunk.pending, handlePending)
      .addCase(addContactsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts.push(action.payload);
      })
      .addCase(addContactsThunk.rejected, handleRejected)
      .addCase(removeContactsThunk.fulfilled, (state, action) => {
        state.error = null;
        state.contacts = state.contacts.filter(
          contact => contact.id !== action.payload
        );
      })
      .addCase(removeContactsThunk.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
