import React from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { deleteReservation } from '../../redux/actions/ReservationsActions';

function DeleteReservation({ reservationId }) {
  const dispatch = useDispatch();

  const handleDelete = async () => {
    try {
      // Dispatch the action to delete the reservation
      await dispatch(deleteReservation(reservationId));
      toast.success('Reservation Deleted Successfully');
    } catch (error) {
      console.error('Error deleting reservation:', error);
      toast.error('Error deleting reservation. Please try again.');
    }
  };

  return (
    <button onClick={handleDelete}>Delete Reservation</button>
  );
}

export default DeleteReservation;
