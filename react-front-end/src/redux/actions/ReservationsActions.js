// ReservationsActions.js
import axios from 'axios';

export const fetchReservations = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:3000/api/reservations');
    dispatch({ type: 'FETCH_RESERVATIONS', payload: response.data });
  } catch (error) {
    console.error('Error fetching reservations:', error.message);
  }
};

export const addReservation = (reservation) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:3000/api/reservations', reservation);
    dispatch({ type: 'ADD_RESERVATION', payload: response.data });
  } catch (error) {
    console.error('Error adding reservation:', error.message);
  }
};

export const deleteReservation = (id) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:3000/api/reservations/${id}`);
    dispatch({ type: 'DELETE_RESERVATION', payload: id });
  } catch (error) {
    console.error('Error deleting reservation:', error.message);
  }
};
