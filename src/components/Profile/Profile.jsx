import React from 'react';

const Profile = ({ data: { username, avatar, location, tag, stats } }) => {
  return (
    <div>
      <img srcSet={avatar} alt={username} width={300} />
      <h2>Name: {username}</h2>
      <h3>Location: {location}</h3>
      <h4>Tag: {tag}</h4>
      <h4>Statistics:</h4>
      <p>Followers: {stats.followers}</p>
      <p>Views: {stats.views}</p>
      <p>Likes: {stats.likes}</p>
    </div>
  );
};

export default Profile;
