import React from 'react'
import "./share.css";
import PermMediaIcon from '@mui/icons-material/PermMedia';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';

export default function Share() {
  return (
    <div className='share'>
        <div className="shareWrapper">
         <div className="shareTop">
            <img src="/assets/1.jpeg" alt="" className='shareProfileImg' />
            <input type="text" className='shareInput' placeholder="what's in your mind?" />
         </div>
         <hr className='shareHr'/>
         <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareOption">
                    <PermMediaIcon htmlColor='tomato' className="shareIcon"/>
                    <span className='shareOptionText'>Photos/Videos</span>
                </div>
                <div className="shareOption">
                    <BookmarkIcon htmlColor='blue' className="shareIcon"/>
                    <span className='shareOptionText'>Location</span>
                </div>
                <div className="shareOption">
                    <LocationOnIcon htmlColor='green'  className="shareIcon"/>
                    <span className='shareOptionText'>Location</span>
                </div>
                <div className="shareOption">
                    <InsertEmoticonIcon htmlColor='goldenrod' className="shareIcon"/>
                    <span className='shareOptionText'>Feelings</span>
                </div>
            </div>
            <button className="shareButton">Share</button>
         </div>
        </div>
    </div>
  )
}
