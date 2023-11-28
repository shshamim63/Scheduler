import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getAddress } from '../../services/apiGeocoding';
import { loginUser, registerUser } from '../../services/apiAuth';

function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

export const fetchAddress = createAsyncThunk(
  'auth/fetchAddress',
  async function () {
    const positionObj = await getPosition();
    const position = {
      latitude: positionObj.coords.latitude,
      longitude: positionObj.coords.longitude,
    };

    const addressObj = await getAddress(position);
    const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

    return { position, address };
  },
);

export const signup = createAsyncThunk('auth/register', async function (data) {
  const userInfo = await registerUser(data);
  return userInfo;
});

export const login = createAsyncThunk('auth/login', async function (data) {
  const userInfo = await loginUser(data);
  return userInfo;
});

const initialState = {
  userInfo: null,
  authError: '',
  status: 'idle',
  position: {},
  address: '',
  error: '',
  accessToken: '',
};

const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchAddress.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAddress.fulfilled, (state, action) => {
        state.position = action.payload.position;
        state.address = action.payload.address;
        state.status = 'idle';
      })
      .addCase(fetchAddress.rejected, (state, action) => {
        state.error = action.error.message;
        state.status = 'error';
      })
      .addCase(signup.pending, (state) => {
        state.status = 'loading';
        state.authError = '';
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.status = 'idle';
        state.authError = '';
        state.userInfo = action.payload;
      })
      .addCase(signup.rejected, (state, action) => {
        state.authError = action.error.message;
        state.status = 'error';
      })
      .addCase(login.pending, (state, action) => {
        state.status = 'loading';
        state.authError = '';
        state.userInfo = action.payload;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = 'idle';
        state.authError = '';
        state.userInfo = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        (state.status = 'error'), (state.authError = action.error.message);
      }),
});

export default userSlice.reducer;

export const getUserContext = (state) => state.auth;

export const getUserInfo = (state) => state.auth.userInfo;
export const getAccessToken = (state) => state.auth.accessToken;
