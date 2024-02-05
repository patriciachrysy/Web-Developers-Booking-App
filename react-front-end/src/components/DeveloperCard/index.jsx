import React from 'react';
import developerImage from '../../images/developer.jpg';
import '../../styles/developersDetails.css';
import { Link } from 'react-router-dom';
import developerData from '../testingData'; // Adjust the path as needed
import '@fortawesome/fontawesome-free/css/all.min.css';
import SkillsModal from '../SkillsModal'; 

function DeveloperCard() {
  const developer = developerData[0]; // Choose a developer from the array

  const skillsProgress = developer.skills ? developer.skills.length * 20 : 0;


  return (
    <div className="developer-card">
      <div className="image-container">
        <img src={developerImage} alt="developer" />
      </div>
      <div className="info">
        <ul>
          <h2>{developer.name}</h2>
          <li>Phone: {developer.phoneNumber}</li>
          <li>Hourly Rate: {developer.hourlyRate}</li>
          <li>City: {developer.city}</li>
          <li>Email: {developer.email}</li>
          <li>{developer.apr}% Represe</li>
          <li>
            <button type="button" className="btn btn-primary view-skills-btn" data-bs-toggle="modal" data-bs-target="#skillsModal">
              View Skills
            </button>
            <div className="developer-progress-container">
            <div className="developer-progress-bar" style={{ width: `${skillsProgress}%` }}>
              <div className="developer-progress-text">{skillsProgress}%</div>
            </div>
          </div>
          </li>
          <Link to={`/config/${developer.id}`} className="setting-btn">
            <button className="btn btn-warning reserve-btn"><i class="fa fa-cog"></i> Reserve <i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></button>
          </Link>
        </ul>
        <SkillsModal skills={developer.skills} />
      </div>
      <Link to="/developers" className="back-button">
        <button type="button" class="btn btn-success back-buttonn"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>
      </Link>
    </div>
  );
}

export default DeveloperCard;
