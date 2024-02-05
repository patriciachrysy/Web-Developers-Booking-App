import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

// Define your session token functions
const setSessionToken = (token) => {
  localStorage.setItem('sessionToken', token);
};

const removeSessionToken = () => {
  localStorage.removeItem('sessionToken');
};

const initialState = {
  user: null,
  isAuthenticated: false,
  loading: false,
};

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      const { user, token } = action.payload;
      setSessionToken(token);
      toast.success(`Logged in Successfully Welcome ${user.name}`);
      state.user = user;
      state.isAuthenticated = true;
      state.loading = true;
    },
    loginFailure: (state) => {
      removeSessionToken();
      state.user = null;
      state.isAuthenticated = false;
      state.loading = false;
    },
    logout: (state) => {
      removeSessionToken();
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { loginSuccess, loginFailure, logout } = AuthSlice.actions;
export default AuthSlice.reducer;