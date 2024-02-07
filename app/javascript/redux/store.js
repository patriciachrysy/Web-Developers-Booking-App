// store.js
import { configureStore } from '@reduxjs/toolkit';
import {thunk} from 'redux-thunk';
import developersReducer from './actions/DevelopersActions';
import reservationsReducer from './actions/ReservationsActions';
import authenticationReducer from './Auth/AuthSlicer';
import skillsReducer from './Slicers/skillsSlicer';

const rootReducer = {
  developers: developersReducer,
  reservations: reservationsReducer,
  authentication: authenticationReducer,
  skills: skillsReducer,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;