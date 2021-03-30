import React from 'react';
import './Header.css';
import HeaderOption from '../HeaderOption/HeaderOption';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
function Header() {
  return (
    <div className='header'>
      <div className='header__left'>
        <img
          src='https://www.flaticon.com/svg/static/icons/svg/174/174857.svg'
          alt='Linkedin logo'
        />
        <div className='header__search'>
          <SearchIcon />
          <input type='text' />
        </div>
      </div>
      <div className='header__right'>
        <HeaderOption title='Home' Icon={HomeIcon} />
        <HeaderOption title='My Network' Icon={SupervisorAccountIcon} />
        <HeaderOption title='Jobs' Icon={BusinessCenterIcon} />
        <HeaderOption title='Messaging' Icon={ChatIcon} />
        <HeaderOption title='Notifications' Icon={NotificationsIcon} />
        <HeaderOption
          avatar='https://pbs.twimg.com/profile_images/1328417902978973696/lMee7Kdz_400x400.jpg'
          title='Nikki Sato'
        />
      </div>
    </div>
  );
}

export default Header;