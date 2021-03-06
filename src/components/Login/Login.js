import React, { useState } from 'react';
import './Login.css';
import { auth } from '../../firebase';
import { useDispatch } from 'react-redux';
import { login } from '../../features/userSlice';

function Login() {
  const [email, setEmail] = useState('');
  const [profilePic, setProfilePic] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const register = () => {
    if (!name) {
      return alert('Please enter a full name');
    }
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userAuth => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profilePic,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoUrl: profilePic,
              })
            );
          });
      })
      .catch(error => {
        alert(error.message);
      });
  };

  const loginToApp = e => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then(userAuth => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            profileUrl: userAuth.user.photoURL,
          })
        );
      })
      .catch(error => {
        alert(error.message);
      });
  };
  return (
    <div className='login'>
      <img
        src='https://logos-world.net/wp-content/uploads/2020/04/Linkedin-Logo-2011%E2%80%932019.png'
        alt='linkedin logo'
      />
      <form>
        <input
          type='text'
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder='Full name (required if registering)'
        />
        <input
          type='text'
          value={profilePic}
          onChange={e => setProfilePic(e.target.value)}
          placeholder='Profile picture URL (optional)'
        />
        <input
          type='email'
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder='Email'
        />
        <input
          type='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder='Password'
        />
        <button type='submit' onClick={loginToApp}>
          Sign In
        </button>
      </form>
      <p>
        Not a member?{' '}
        <span className='login_register' onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
