import { RootState } from "../store";

export const getUser = (state: RootState) => state.auth.user.name;
export const getIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;
export const isRefreshing = (state: RootState) => state.auth.isFetchingCurrentUser;
