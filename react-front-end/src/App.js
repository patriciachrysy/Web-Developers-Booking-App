// App.jsx
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DeveloperList from './components/DeveloperList';
import DeveloperDetails from './components/DeveloperDetails';
import ReservationForm from './components/ReservationForm';
import MyReservations from './components/MyReservations';
import AddDeveloperForm from './components/AddDeveloperForm';
import DeleteDeveloperList from './components/DeleteDeveloperList';
import HomePage from './components/HomePage';
import WelcomePage from './components/WelcomePage';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/NavBar/Navbar';

function App() {
  return (
      <div className="App">
        <Navbar />
        <div className="content-container">
          <Routes>
          <Route path="/" element={<WelcomePage />} />
            {/* <Route path="/" element={<HomePage />} /> */}
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/developersList" element={<DeveloperList />} />
            <Route path="/add-developers" element={<AddDeveloperForm />} />
            <Route
              path="/delete-developer/:id"
              element={<DeleteDeveloperList />}
            />
            <Route path="/developerDetails" element={<DeveloperDetails />} />
            <Route path="/reservationForm" element={<ReservationForm />} />
            <Route path="/my-reservations" element={<MyReservations />} />
          </Routes>
        </div>
      </div>
  );
}

export default App;
