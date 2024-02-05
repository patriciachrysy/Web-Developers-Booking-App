// DeveloperCardList.jsx
import React from 'react';
import { Carousel } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import developerImage from '../../images/developer.jpg';
import '../../styles/developersList.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function DeveloperCardList() {
  const developers = [
    {
      name: "Richard brownson",
      description: "I have been coding for more than 4 years. I have skills in different languages.",
      socialMedia: [
        { name: "GitHub", link: "#GitHub", icon: "fa-github" },
        { name: "Twitter", link: "#Twitter", icon: "fa-twitter" },
        { name: "LinkedIn", link: "#LinkedIn", icon: "fa-linkedin" },
      ],
      skills: ["Javascript", "HTML5", "CSS3", "Python"],
    },
    {
      name: "Richard brownson",
      description: "I have been coding for more than 4 years. I have skills in different languages.",
      socialMedia: [
        { name: "GitHub", link: "#GitHub", icon: "fa-github" },
        { name: "Twitter", link: "#Twitter", icon: "fa-twitter" },
        { name: "LinkedIn", link: "#LinkedIn", icon: "fa-linkedin" },
      ],
      skills: ["Javascript", "HTML5", "CSS3", "Python"],
    },
    {
      name: "Richard brownson",
      description: "I have been coding for more than 4 years. I have skills in different languages.",
      socialMedia: [
        { name: "GitHub", link: "#GitHub", icon: "fa-github" },
        { name: "Twitter", link: "#Twitter", icon: "fa-twitter" },
        { name: "LinkedIn", link: "#LinkedIn", icon: "fa-linkedin" },
      ],
      skills: ["Javascript", "HTML5", "CSS3", "Python"],
    },
    {
      name: "Richard brownson",
      description: "I have been coding for more than 4 years. I have skills in different languages.",
      socialMedia: [
        { name: "GitHub", link: "#GitHub", icon: "fa-github" },
        { name: "Twitter", link: "#Twitter", icon: "fa-twitter" },
        { name: "LinkedIn", link: "#LinkedIn", icon: "fa-linkedin" },
      ],
      skills: ["Javascript", "HTML5", "CSS3", "Python"],
    },
    {
      name: "Richard brownson",
      description: "I have been coding for more than 4 years. I have skills in different languages.",
      socialMedia: [
        { name: "GitHub", link: "#GitHub", icon: "fa-github" },
        { name: "Twitter", link: "#Twitter", icon: "fa-twitter" },
        { name: "LinkedIn", link: "#LinkedIn", icon: "fa-linkedin" },
      ],
      skills: ["Javascript", "HTML5", "CSS3", "Python"],
    },
    {
      name: "Richard brownson",
      description: "I have been coding for more than 4 years. I have skills in different languages.",
      socialMedia: [
        { name: "GitHub", link: "#GitHub", icon: "fa-github" },
        { name: "Twitter", link: "#Twitter", icon: "fa-twitter" },
        { name: "LinkedIn", link: "#LinkedIn", icon: "fa-linkedin" },
      ],
      skills: ["Javascript", "HTML5", "CSS3", "Python"],
    },
    // ... your developer data ...
  ];

  const chunkArray = (arr, chunkSize) => {
    const result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
    }
    return result;
  };

  const developersChunks = chunkArray(developers, 3);

  return (
    <Carousel interval={null}>
      {developersChunks.map((chunk, index) => (
        <Carousel.Item key={index}>
          <div className="d-flex justify-content-around colorsel-container">
            {chunk.map((developer, i) => (
             <div key={i} className="developer-list-card" style={{cursor: "pointer"}}>
             <a href={`/developerDetails/${developer.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
               <div className="card" style={{width: "18rem"}}>
                 <img src={developerImage} alt="developer" />
                 <div className="card-body">
                   <h2>{developer.name}</h2>
                   <hr className="dotted-line" />
                   <p>{developer.description}</p>
                 </div>
                 <div className="card-body">
                   {developer.socialMedia.map((social, j) => (
                     <a key={j} href={social.link} className="card-link">
                       <i className={`fab ${social.icon}`}></i>
                     </a>
                   ))}
                 </div>
               </div>
             </a>
           </div>
            ))}
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default DeveloperCardList;