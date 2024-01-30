import { RootState } from "../store";

export const selectContacts = (state: RootState) => state.contacts.contacts;
export const selectIsLoading = (state: RootState) => state.contacts.isLoading;
export const selectIsError = (state: RootState) => state.contacts.error;
