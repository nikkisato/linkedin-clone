import React, { useEffect } from 'react';
//import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Feed from './components/Feed/Feed';
import Login from './components/Login/Login';
import { auth } from './firebase';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser, logout, login } from './features/userSlice';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  console.log(user);
  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        // user is logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        // use is logged out
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <div className='app'>
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className='app__body'>
          <Sidebar />
          <Feed />
        </div>
      )}
    </div>
  );
}

export default App;
