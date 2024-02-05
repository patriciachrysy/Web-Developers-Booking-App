// DevelopersActions.js
import axios from 'axios';

export const fetchDevelopers = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:5000/api/developers');
    dispatch({ type: 'FETCH_DEVELOPERS', payload: response.data });
  } catch (error) {
    console.error('Error fetching developers:', error.message);
  }
};

export const getDeveloper = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`http://localhost:5000/api/developers/${id}`);
    dispatch({ type: 'GET_DEVELOPER', payload: response.data });
  } catch (error) {
    console.error('Error fetching developer:', error.message);
  }
};

export const addDeveloper = (developer) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:5000/api/developers', developer);
    dispatch({ type: 'ADD_DEVELOPER', payload: response.data });
  } catch (error) {
    console.error('Error adding developer:', error.message);
  }
};

export const deleteDeveloper = (id) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:5000/api/developers/${id}`);
    dispatch({ type: 'DELETE_DEVELOPER', payload: id });
  } catch (error) {
    console.error('Error deleting developer:', error.message);
  }
};
