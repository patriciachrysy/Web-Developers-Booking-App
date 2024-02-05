// DeleteDeveloper.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteDeveloper } from '../../redux/actions/DevelopersActions';
import { useNavigate, Link } from 'react-router-dom';

function DeleteDeveloper({ id }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDeleteDeveloper = () => {
    dispatch(deleteDeveloper(id));
    navigate.push('/developers');
  };

  return (
    <div>
      <h1>Delete Developer Page</h1>
      <p>Are you sure you want to delete this developer?</p>
      <button onClick={handleDeleteDeveloper}>Delete</button>
      <Link to="/developers">
        <button>Cancel</button>
      </Link>
    </div>
  );
}

export default DeleteDeveloper;
