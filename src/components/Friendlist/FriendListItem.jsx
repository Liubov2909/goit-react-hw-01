import style from "./FriendList.module.css";

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div>
      <img className={style.image} src={avatar} alt="Avatar" width="48" />
      <p className={style.nameTitle}>{name}</p>
      <p className={isOnline ? style.isOnline : style.offline}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};
