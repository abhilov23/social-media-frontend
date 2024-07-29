import "./online.css";

export function Online({user}) {
  return (
    <>
    <li className="rightbarFriend">
            <div className="rightbarProfileImageContainer">
              <img className="rightbarProfileImg" src={user.profilePicture} alt="" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">{user.username}</span>
          </li>
          </>
  )
}
