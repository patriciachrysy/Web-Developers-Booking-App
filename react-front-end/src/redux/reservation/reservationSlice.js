import { createSlice } from '@reduxjs/toolkit';
import { fetchReservations, createReservation as createReservationThunk } from './thunk';

const initialState = {
  reservations: [],
  isLoading: false,
  error: false,
  errMsg: '',
};

const reservationSlice = createSlice({
  name: 'reservationsList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReservations.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(fetchReservations.fulfilled, (state, action) => {
        state.isLoading = false;
        state.reservations = action.payload;
      })
      .addCase(fetchReservations.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
        state.errMsg = 'Failed to fetch reservations.';
      })
      .addCase(createReservationThunk.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(createReservationThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.reservations = action.payload;
      })
      .addCase(createReservationThunk.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
        state.errMsg = 'Failed to create reservation.';
      });
  },
});

export const { createReservation } = reservationSlice.actions;

export default reservationSlice.reducer;
