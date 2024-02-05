// DevelopersList.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDevelopers } from '../../redux/actions/DevelopersActions';
import {Link} from 'react-router-dom';
import DeveloperListCard from '../DeveloperListCard'

function DevelopersList() {
  const dispatch = useDispatch();
  const developers = useSelector((state) => state.developers);

  useEffect(() => {
    dispatch(fetchDevelopers());
  }, [dispatch]);

  return (
    <div>
      <h1>List of Developers Page</h1>
      <ul>
        {Array.isArray(developers) ? (
          developers.map((developer) => (
            <li key={developer.id}>
              <strong>{developer.fullName}</strong> - {developer.city}
              <Link to={`/developer/${developer.id}`}>
                <button>View Details</button>
              </Link>
            </li>
          ))
        ) : (
          <div>
            No developers to display
            <DeveloperListCard />
            </div>
        )}
      </ul>
    </div>
  );
}

export default DevelopersList;
