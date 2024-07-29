import React from 'react'
import "./profile.css";
import TopBar from '../../components/topBar/TopBar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed.jsx'
import Rightbar from '../../components/rightbar/Rightbar.jsx'

export default function Profile() {
  return (
    <>
        <TopBar/>
        <div className="profile">
        <Sidebar/>
        <div className="profileRight">
        <div className="profileRightTop">                 
            <div className="profileCover">
            <img className='profileCoverImg' src="/assets/post/1.jpeg" alt="" />
            <img className='profileUserImg' src="/assets/1.jpeg" alt="" />
            </div>
            <div className="profileInfo">
                <h4 className='profileInfoName'>Abhilov Gupta</h4>
                <span className="profileInfoDesc">Security and Development</span>
            </div>
        </div>
        <div className="profileRightBottom">
        <Feed/>
        <Rightbar profile/>
        </div>
        </div>
          </div> 
    </>
  )
}
