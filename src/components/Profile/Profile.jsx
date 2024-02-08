import "./Profile.css";
export const Profile = ({
  info: {
    avatar,
    username,
    tag,
    location,
    stats: { followers, views, likes },
  }
}) => {
  return (
    <div className="profile-box">
  <div>
    <img className="profile-image"
      src= {avatar} alt="User avatar"/>
    <p className="title-name">{username}</p>
    <p className="nick-name">@{tag}</p>
    <p className="location">{location}</p>
  </div>

  <ul className="stats-list">
    <li className="stats-list-item">
      <span className="stats-list-title">Followers</span>
      <span className="stats-list-sum">{followers}</span>
    </li>
    <li className="stats-list-item">
      <span className="stats-list-title">Views</span>
      <span className="stats-list-sum">{views}</span>
    </li>
    <li className="stats-list-item">
      <span className="stats-list-title">Likes</span>
      <span className="stats-list-sum">{likes}</span>
    </li>
  </ul>
</div>
  );
};