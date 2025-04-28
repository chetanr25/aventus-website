import React from "react";
import "../Components/css/photos.css";

const TeamLayout = () => {
  // Sample data - replace with your actual data
  const hodData = [
    { id: 1, name: "Dr. Vindhya P Malagi", role: "Head of Department", image: "hod mam.jpg" },
    { id: 2, name: "prof. Kavya D N ", role: "faculty cordinator", image: "kavya mam.jpg" }
  ];

  const coreMembers = [
    { id: 1, name: "kajal", role: "marketing", image: "kajal.JPG" },
    { id: 2, name: "prateek", role: "design ", image: "prateeka.JPG" },
    { id: 3, name: "manjunatha", role: "logistics", image: "manju.JPG" },
    {id: 4, name: "gurunatha", role: "tech", image: "guru.JPG"},
    { id: 5, name: "shrihari", role: "media", image: "shrihari.JPG" },
    { id: 6, name: "chetan", role: "tech", image: "chetan.jpg" },
  ];
  const groupPhotos = [
    { id: 1, caption: " Leads", image: "lead2.JPG" },
    { id: 2, caption: "Members", image: "tcc.JPG" }
  ];

  return (
    <div className="container">
    {/* HODs Section */}
    <h2 className="section-title">Department Heads</h2>
    <div className="hod-container">
      {hodData.map((hod) => (
        <div key={hod.id}>
          <div className="hod">
            <img src={hod.image}  className="hod-img" />
          </div>
          <div className="member-info">
            <h4>{hod.name}</h4>
            <p>{hod.role}</p>
          </div>
        </div>
      ))}
    </div>
    
    {/* Core Team Members - New Layout */}
    <h2 className="section-title">Core Team Members</h2>
    <div className="core-members-container">
      {coreMembers.map((member) => (
        <div key={member.id}>
          <div className="core-member">
            <img src={member.image}  className="core-member-img" />
          </div>
          <div className="member-info">
            <h4>{member.name}</h4>
            <p>{member.role}</p>
          </div>
        </div>
      ))}
    </div>
    
    <h2 className="section-title">The Central committe</h2>
      <div className="group-photos-container">
        {groupPhotos.map((photo) => (
          <div key={photo.id} >
            <div className="group-photo">
            <img src={photo.image} className="group-img" />
          </div>
          <div  className="photo-caption" >
            {photo.caption}
            </div>
          </div>
        ))}
      </div>
    </div>
);
};

export default TeamLayout;
