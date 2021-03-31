import React from 'react';
import './Header.css';
import HeaderOption from '../HeaderOption/HeaderOption';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useDispatch } from 'react-redux';
import { logout } from '../../features/userSlice';
import { auth } from '../../firebase';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
function Header() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  console.log(user);
  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
    console.log('Logged out');
  };
  return (
    <div className='header'>
      <div className='header__left'>
        <img
          src='https://www.flaticon.com/svg/static/icons/svg/174/174857.svg'
          alt='Linkedin logo'
        />
        <div className='header__search'>
          <SearchIcon />
          <input type='text' placeholder='Search' />
        </div>
      </div>
      <div className='header__right'>
        <HeaderOption title='Home' Icon={HomeIcon} />
        <HeaderOption title='My Network' Icon={SupervisorAccountIcon} />
        <HeaderOption title='Jobs' Icon={BusinessCenterIcon} />
        <HeaderOption title='Messaging' Icon={ChatIcon} />
        <HeaderOption title='Notifications' Icon={NotificationsIcon} />
        <HeaderOption
          onClick={logoutOfApp}
          avatar={true}
          title={user?.displayName}
        />
      </div>
    </div>
  );
}

export default Header;
