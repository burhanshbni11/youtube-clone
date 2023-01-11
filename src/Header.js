import React, { useState } from 'react'
import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';

function Header() {
  const [inputSearch, setInputSearch] = useState("");
  return (
    <div className='header'>  
        
        <div className="header__left">
        <MenuIcon />
        <Link to="/" >
        <img className='header__logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/375px-YouTube_Logo_2017.svg.png" alt="" 
        />
        </Link>
        </div>
       
       <div className="header__input">
       <input onChange={(e) => setInputSearch(e.target.value)} value={inputSearch} placeholder='Serach' type="text" />
       <Link to={`/search/${inputSearch}`}>
        <SearchIcon className='header__inputButton' />
        </Link>
       </div>

       <div className="header__icons">
       <VideoCallIcon className='header__icon' />
        <AppsIcon className='header__icon' />
        <NotificationsIcon className='header__icon' />
        <Avatar 
        alt='Burhanshbni'
        src='https://scontent.fskp2-1.fna.fbcdn.net/v/t1.6435-9/61927342_2315000205253366_5345764232178696192_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=OHIhjSHlAE8AX9xBFul&_nc_ht=scontent.fskp2-1.fna&oh=00_AfAiR9yIYv3D9aNOa54UARs391GKhzvUS4UJt3BoWhWZEQ&oe=63D38C9D'
        />
       </div> 
    </div>
  )
}

export default Header;
