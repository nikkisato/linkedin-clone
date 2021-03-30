import React, { useState } from 'react';
import './Feed.css';
import Post from '../Post/Post';
import CreateIcon from '@material-ui/icons/Create';
import InputOption from '../InputOption/InputOption';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
function Feed() {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState([]);

  const sendPost = e => {
    e.preventDefault();
    setPosts(e.target.value);
  };
  return (
    <div className='feed'>
      <div className='feed__inputContainer'>
        <div className='feed__input'>
          <CreateIcon />
          <form>
            <input
              type='text'
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder='Write a post'
            />
            <button type='submit' onClick={sendPost}>
              Send
            </button>
          </form>
        </div>
        <div className='feed__inputOptions'>
          <InputOption Icon={ImageIcon} title='Photo' color='#70b5f9' />
          <InputOption Icon={SubscriptionsIcon} title='Video' color='#E7A33E' />
          <InputOption Icon={EventNoteIcon} title='Event' color='#C0CBCD' />
          <InputOption
            Icon={CalendarViewDayIcon}
            title='Write article'
            color='#7FC15E'
          />
        </div>
      </div>

      {posts.map(() => (
        <Post />
      ))}
      <Post name='Nikki Sato' description='test' message='hi' />
    </div>
  );
}

export default Feed;
