import style from "./Profile.module.css";

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
    <div className={style.box}>
  <div>
    <img className={style.image}
      src= {avatar} alt="User avatar"/>
    <p className={style.titleName}>{username}</p>
    <p className={style.nickname}>@{tag}</p>
    <p className={style.location}>{location}</p>
  </div>

  <ul className={style.statslist}>
    <li className={style.statslistItem}>
      <span className={style.statslistTitle}>Followers</span>
      <span className={style.statslistSum}>{followers}</span>
    </li>
    <li className={style.statslistItem}>
      <span className={style.statslistTitle}>Views</span>
      <span className={style.statslistSum}>{views}</span>
    </li>
    <li className={style.statslistItem}>
      <span className={style.statslistTitle}>Likes</span>
      <span className={style.statslistSum}>{likes}</span>
    </li>
  </ul>
</div>
  );
};