import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Contact } from './contactsSlice';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const getContactsThunk = createAsyncThunk<Contact[], void, { rejectValue: string }>(
  'contacts/getContacts',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/contacts');
      return res.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContactsThunk = createAsyncThunk<Contact, Contact, { rejectValue: string }>(
  'contacts/addContacts',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/contacts', credentials);
      return res.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeContactsThunk = createAsyncThunk<string, string, { rejectValue: string }>(
  'contacts/removeContacts',
  async (id, thunkAPI) => {
    try {
      const res = await axios.delete(`/contacts/${id}`);
      thunkAPI.dispatch(getContactsThunk());
      return res.data.id;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
