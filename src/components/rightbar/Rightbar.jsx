import "./rightbar.css";
import {Users} from "../../dummyData";
import {Online} from "../online/Online";

export default function Rightbar({profile}) {
  const HomeRightbar = () => {
    return(
      <>
              <div className="birthdayContainer">
          <img className="birthdayImg" src="/assets/gift.png" alt="" />
          <span className="birthdayText"><b>Aditya raj</b> and <b> 3 other friends</b> have a birthday today</span>
        </div>
        <img className="rightbarAd" src="assets/ad.jpg" alt="" />
        <h4 className="rightbarTitle">online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u)=>(
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    )
  }

  const ProfileRightBar = () =>{
    return (
      <>
      <h4 className="rightbarTitle">User Information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City: </span>
          <span className="rightbarInfoValue">Dehradun</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From: </span>
          <span className="rightbarInfoValue">Farrukhabad</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationship: </span>
          <span className="rightbarInfoValue">Single</span>
        </div>
      </div>
      <h4 className="rightBarTitle">User Friends</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img src="/assets/person/1.jpg" className="rightbarFollowingImg" alt="" />
          <span className="rightbarFollowingName">Abhilov Gupta</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/2.jpg" className="rightbarFollowingImg" alt="" />
          <span className="rightbarFollowingName">Aditya Singh</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/3.jpg" className="rightbarFollowingImg" alt="" />
          <span className="rightbarFollowingName">Aakash Rathore</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/4.jpg" className="rightbarFollowingImg" alt="" />
          <span className="rightbarFollowingName">Abhay Pratap</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/5.jpg" className="rightbarFollowingImg" alt="" />
          <span className="rightbarFollowingName">Akshat Dixit</span>
        </div>
        <div className="rightbarFollowing">
          <img src="assets/person/6.jpg" className="rightbarFollowingImg" alt="" />
          <span className="rightbarFollowingName">Aditya Raj</span>
        </div>
      </div>
      </>
    )
  }

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
       {profile ? <ProfileRightBar/> : <HomeRightbar/>}
      </div>
    </div>
  )
}
