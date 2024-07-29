import React from 'react'
import "./TopBar.css";
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';


export default function TopBar() {
  return (
    <div className="topbarContainer">
        <div className="topbarLeft">
          <span className='topbarLogo'>Circlify</span>
        </div>
        <div className="topbarCenter">
          <div className="searchBar">
            <SearchIcon className='searchIcon'/>
            <input type="text" className="searchInput" placeholder='Search for Friends, post or video' />
          </div>
        </div>
        <div className="topbarRight">
          <div className="topbarLinks">
            <span className="topbarLink">Home</span>
            <span className="topbarLink"> Timeline</span>
          </div>
          <div className='topbarIcons'>
            <div className="topbarIconItem">
            <PersonIcon />
            <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
            <ChatIcon />
            <span className="topbarIconBadge">2</span>
            </div>
            <div className="topbarIconItem">
            <NotificationsIcon />
            <span className="topbarIconBadge">1</span>
            </div>
          </div>
          <img src="/assets/1.jpeg" alt="" className="topbarImg" />
        </div>
    </div>
  )
}
