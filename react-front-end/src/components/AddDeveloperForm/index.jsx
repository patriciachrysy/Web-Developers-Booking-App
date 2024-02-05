import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { addDeveloper } from '../services/api';
import { addDeveloper } from '../../redux/actions/DevelopersActions';

function AddDeveloper() {
  const dispatch = useDispatch();
  const [developer, setDeveloper] = useState({
    fullName: '',
    phoneNumber: '',
    hourlyRate: '',
    city: '',
    email: '',
    skills: [],
    profileImage: null,
  });

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === 'file') {
      setDeveloper({ ...developer, [name]: files[0] });
    } else {
      setDeveloper({ ...developer, [name]: value });
    }
  };

  const handleAddDeveloper = (e) => {
    e.preventDefault();
    
    dispatch(addDeveloper(developer).then(() => {
      // Handle success if needed
      console.log('Developer added successfully');
    }).catch((error) => {
      // Handle error
      throw new Error(`Error adding developer: ${error.message}`);
    }));
  };

  const handleAddSkill = () => {
    setDeveloper({ ...developer, skills: [...developer.skills, ''] });
  };

  const handleRemoveSkill = (index) => {
    const updatedSkills = [...developer.skills];
    updatedSkills.splice(index, 1);
    setDeveloper({ ...developer, skills: updatedSkills });
  };

  const handleSkillInputChange = (index, value) => {
    const updatedSkills = [...developer.skills];
    updatedSkills[index] = value;
    setDeveloper({ ...developer, skills: updatedSkills });
  };

  return (
    <div className="container">
      <h1>Add Developer Page</h1>
      <form onSubmit={handleAddDeveloper} className="row g-3">
        <div className="col-md-6">
        <label htmlFor="fullName" className="form-label">Full Name</label>
        <input type="text" className="form-control" id="fullName" name="fullName" value={developer.fullName} onChange={handleInputChange} />
      </div>
      <div className="col-md-6">
        <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
        <input type="text" className="form-control" id="phoneNumber" name="phoneNumber" value={developer.phoneNumber} onChange={handleInputChange} />
      </div>
      <div className="col-md-6">
        <label htmlFor="hourlyRate" className="form-label">Hourly Rate</label>
        <input type="text" className="form-control" id="hourlyRate" name="hourlyRate" value={developer.hourlyRate} onChange={handleInputChange} />
      </div>
      <div className="col-md-6">
        <label htmlFor="city" className="form-label">City</label>
        <input type="text" className="form-control" id="city" name="city" value={developer.city} onChange={handleInputChange} />
      </div>
      <div className="col-md-6">
        <label htmlFor="email" className="form-label">Email</label>
        <input type="email" className="form-control" id="email" name="email" value={developer.email} onChange={handleInputChange} />
      </div>
      <div className="col-6">
        <label htmlFor="profileImage" className="form-label">Profile Image</label>
        <input type="file" className="form-control" id="profileImage" name="profileImage" onChange={handleInputChange} />
      </div>
        <div className="col-6">
          <label htmlFor="skills" className="form-label">Skills</label>
          <div className="d-flex align-items-start">
  <button type="button" className="btn btn-success me-3" onClick={handleAddSkill}>
    Add Skill
  </button>
  <div>
    {(developer.skills.length > 0 ? developer.skills : ['']).map((skill, index) => (
      <div key={index} className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter skill"
          value={skill}
          onChange={(e) => handleSkillInputChange(index, e.target.value)}
        />
        <button
          type="button"
          className="btn btn-outline-danger"
          onClick={() => handleRemoveSkill(index)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">Add Developer</button>
        </div>
      </form>
    </div>
  );
}

export default AddDeveloper;
