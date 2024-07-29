import React from 'react'
import "./closeFriend.css";

export default function CloseFriend({user}) {
  return (
    <>
     <li className="sidebarFriend">
                    <img className="sidebarfriendImg" src={user.profilePicture} alt='blablavla' />
                    <span className="sidebarFriendName">{user.username}</span>
                </li>
    </>
  )
}
 