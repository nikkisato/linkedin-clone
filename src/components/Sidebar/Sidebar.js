import React from 'react';
import './Sidebar.css';
import { Avatar } from '@material-ui/core';
function Sidebar() {
  const recentItems = topic => (
    <div className='sidebar__recentItem'>
      <span className='sidebar__hash'>#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className='sidebar'>
      <div className='sidebar__top'>
        <img
          src='https://images.unsplash.com/photo-1577229846672-ce3b93d35c26?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'
          alt=''
        />
        <Avatar className='sidebar__avatar' />
        <h2>Nikki Sato</h2>
        <h4>Nikki.satopdx@gmail.com</h4>
      </div>

      <div className='sidebar__stats'>
        <div className='sidebar__stat'>
          <p>Who viewed you</p>
          <p className='sidebar__statNumber'>2,543</p>
        </div>
        <div className='sidebar__stat'>
          <p>Views on post</p>
          <p className='sidebar__statNumber'>2,443</p>
        </div>
      </div>
      <div className='sidebar__bottom'>
        <p>Recent</p>
        {recentItems('reactjs')}
        {recentItems('redux')}
        {recentItems('design')}
        {recentItems('programming')}
        {recentItems('developer')}
        {recentItems('UI/UX')}
        {recentItems('accessibility')}
        {recentItems('material-ui')}
        {recentItems('motion-design')}
        {recentItems('responsive-design')}
      </div>
    </div>
  );
}

export default Sidebar;
