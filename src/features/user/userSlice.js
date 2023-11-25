import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAddress } from '../../services/apiGeocoding';

function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

export const fetchAddress = createAsyncThunk(
  'user/fetchAddress',
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

const initialState = {
  currentUser: null,
  status: 'idle',
  position: {},
  address: '',
  error: '',
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    registerUser(state, action) {
      state.currentUser = action.payload;
      state.isAuthenticated = true;
    },
    login(state, action) {
      state.currentUser = action.payload;
      state.isAuthenticated = true;
    },
  },
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
      }),
});

export const { registerUser, login } = userSlice.actions;
export default userSlice.reducer;

export const getUser = (state) => state.user.currentUser;
export const getUserContext = (state) => state.user;
export const getIsAuthenticated = (state) => state.user.isAuthenticated;
