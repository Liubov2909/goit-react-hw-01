export const FriendListItem = ({friends:{avatar, name, isOnline}}) => {
  return(
  <div>
    <img className="friends-image" src={avatar} alt="Avatar" width="48" />
    <p className="friends-name-title">{name}</p>
    <p className={isOnline ? 'friends-is-online' : 'friends-offline'}>{isOnline ? 'Online' : 'Offline'}</p>
  </div>
  )
}