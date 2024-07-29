import "./sidebar.css";
import RssFeedIcon from '@mui/icons-material/RssFeed';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import GroupsIcon from '@mui/icons-material/Groups';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';
import {Users} from "../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend";


export default function Sidebar() {
  return (
    <div className="sideBar">
        <div className="sidebarWrapper">
            <ul className="sidebarList">
                <li className="sidebarListItem"> <RssFeedIcon className="sidebarIcon"/>
                <span className="sidebarListItemText">Feed</span>
                 </li>
                 <li className="sidebarListItem"> <MarkUnreadChatAltIcon className="sidebarIcon"/>
                <span className="sidebarListItemText">Chat</span>
                 </li>
                 <li className="sidebarListItem"> <PlayCircleIcon className="sidebarIcon"/>
                <span className="sidebarListItemText">Videos</span>
                 </li>
                 <li className="sidebarListItem"> <GroupsIcon className="sidebarIcon"/>
                <span className="sidebarListItemText">Groups</span>
                 </li>
                 <li className="sidebarListItem"> <BookmarksIcon className="sidebarIcon"/>
                <span className="sidebarListItemText">Bookmarks</span>
                 </li>
                 <li className="sidebarListItem"> <QuestionAnswerIcon className="sidebarIcon"/>
                <span className="sidebarListItemText">Questions</span>
                 </li>
                 <li className="sidebarListItem"> <WorkIcon className="sidebarIcon"/>
                <span className="sidebarListItemText">Jobs</span>
                 </li>
                 <li className="sidebarListItem"> <EventIcon className="sidebarIcon"/>
                <span className="sidebarListItemText">Events</span>
                 </li>
                 <li className="sidebarListItem"> <SchoolIcon className="sidebarIcon"/>
                <span className="sidebarListItemText">Courses</span>
                 </li>
            </ul>
            <button className="sidebarButton">Show more</button>
            <hr className="sidebarHr"/>
            <ul className="sidebarFriendList">
                {Users.map((u)=>(
            <CloseFriend key={u.id} user={u} />
          ))}
            </ul>
        </div>
    </div>
  )
}
