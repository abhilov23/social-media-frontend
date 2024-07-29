import React from 'react'
import TopBar from '../../components/topBar/TopBar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed.jsx'
import Rightbar from '../../components/rightbar/Rightbar.jsx'
import "./home.css";

export default function home() {
  return (
    <>
        <TopBar/>
        <div className="homeContainer">
        <Sidebar/>
        <Feed/>
        <Rightbar/>
          </div> 
    </>
  )
}
