/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
/* eslint-disable camelcase */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { createReservation } from '../../redux/reservation/reservationSlice';
import '../../styles/reservation.css';
import Navbar from '../NavBar/Navbar';

const ReservationForm = () => {
  const [date, setDate] = useState('');
  const [city, setCity] = useState('');
  const [selectedDevelopers, setSelectedDevelopers] = useState([]);
  const developers = useSelector((state) => state.developers);
  const userId = useSelector((state) => state.users.user.id);
  const dispatch = useDispatch();

  const handleDeveloperSelection = (developer) => {
    setSelectedDevelopers((prevDevelopers) => [...prevDevelopers, developer.id]);
  };

  const addReservationHandler = async (e) => {
    e.preventDefault();

    if (!date || !city || selectedDevelopers.length === 0) {
      toast.error('Please fill in all fields');
      return;
    }

    try {
      let selectedDate = new Date(date);
      selectedDate.setDate(selectedDate.getDate() + 10);
      const Duration = selectedDate.toISOString().split('T')[0];
      const newReservation = {
        reservation: {
          date,
          Duration,
          city,
        },
        developer_ids: selectedDevelopers,
      };

      await dispatch(createReservation({ userId, newReservation }));
      toast.success('Reservation Added Successfully');
      setDate('');
      setCity('');
      setSelectedDevelopers([]);
    } catch (error) {
      console.error('Error adding reservation:', error);
      toast.error('Error adding reservation. Please try again.');
    }
  };

  const displayedDevelopers = developers.developers;

  return (
    <>
      {' '}
      <Navbar />
      <div className="reservationForm">
        <h1>Web Developer's Reservations</h1>
        <form>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="form-input"
          />
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="City"
            className="form-input"
          />

          <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingOne">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                  Available developers
                </button>
              </h2>
              <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                  <ul className="">
                    {displayedDevelopers.map((developer) => (
                      <li key={developer.id} className="boxes">
                        <input
                          type="checkbox"
                          value={developer.id}
                          onChange={() => handleDeveloperSelection(developer)} 
                        />
                        <label htmlFor={developer.id}>{developer.name}</label>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <button type="submit" onClick={addReservationHandler} className="form-btn">
            Add Reservation
          </button>
        </form>
      </div>
    </>
  );
};

export default ReservationForm;
