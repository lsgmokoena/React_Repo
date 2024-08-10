import React, { useState } from 'react';
import './App.css';

const initialProfile = {
    name: "Lesego Mokoena",
    email: "lesegomokoena42@gmail.com",
    bio: "Software Engineer with a passion to learn new technologies",
    experience: [
        { role: "Call Center Representative", company: "Call Center", duration: "4 months" },
        { role: "Graduate", company: "Falcorp Technologies", duration: "3 months and ongoing" }
    ],
    education: [
        { degree: "Information Technology", institution: "VUT", status: "Completed" },
        { degree: "Information Resource Management", institution: "UNISA", status: "Ongoing" }
    ]
};

const MyProfile = () => {
    const [profile, setProfile] = useState(initialProfile);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfile({
            ...profile,
            [name]: value
        });
    };

    return (
        <div className="profile-container">
            <h2>My Profile</h2>
            <div className="profile-form">
                <label>
                    Name:
                    <input type="text" name="name" value={profile.name} onChange={handleInputChange} />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" value={profile.email} onChange={handleInputChange} />
                </label>
                <label>
                    Bio:
                    <textarea name="bio" value={profile.bio} onChange={handleInputChange}></textarea>
                </label>
                <h3>Experience</h3>
                <ul>
                    {profile.experience.map((exp, index) => (
                        <li key={index}>
                            <strong>{exp.role}</strong> at {exp.company} ({exp.duration})
                        </li>
                    ))}
                </ul>
                <h3>Education</h3>
                <ul>
                    {profile.education.map((edu, index) => (
                        <li key={index}>
                            {edu.degree} at {edu.institution} - {edu.status}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default MyProfile;
