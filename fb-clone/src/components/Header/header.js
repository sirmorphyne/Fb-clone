import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleOutlinedIcon from '@material-ui/icons/SupervisedUserCircleOutlined';
import FlagIcon from '@material-ui/icons/Flag';
import {Avatar, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./header.css";
import {useStateValue} from "../../StateProvider";
function Header() {
    const [{user},dispatch] = useStateValue(); 
    return (
        <div className="header">
           <div className="header_left">
               <img src="https://img.talkandroid.com/uploads/2016/01/facebook-app-logo-450x450.png" alt="" />
               <div className="header_input">
                   <SearchIcon />
                   <input placeholder="Search Facebook" type="text" />
               </div>
           </div>
           <div className="header_center">
               <div className="header_option
               header_option--active">
                   <HomeIcon fontSize="large" />
               </div>
               <div className="header_option">
                   <FlagIcon fontSize="large" />
               </div>
               <div className="header_option">
                   <SubscriptionsOutlinedIcon fontSize="large" />
               </div>
               <div className="header_option">
                   <StorefrontOutlinedIcon fontSize="large" />
               </div>
               <div className="header_option">
                   <SupervisedUserCircleOutlinedIcon fontSize="large" />
               </div>
           </div>
           <div className="header_right">
               <div className="header_info">
                   <Avatar src={user.photoURL} />
                   <h4>{user.displayName}</h4>
               </div>
               <IconButton>
                   <AddIcon />
               </IconButton>
               <IconButton>
                   <ForumIcon />
               </IconButton>
               <IconButton>
                   <NotificationActiveIcon />
               </IconButton>
               <IconButton>
                   <ExpandMoreIcon />
               </IconButton>
           </div>
        </div>
    )
}

export default Header;
