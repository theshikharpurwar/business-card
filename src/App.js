import React from 'react';
import profilePicture from './profile-picture.jpeg';
import facebookIcon from './icons8-facebook-48.png';
import twitterIcon from './icons8-twitter-50.png';
import instagramIcon from './icons8-instagram-48.png';
import youtubeIcon from './icons8-youtube-94.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className='upper-container'>
          <img src={profilePicture} className='profile-picture' alt='Profile Picture' />
        </div>
        <div className='lower-container'>
          <h1 className='name'>Shikhar Purwar</h1>
          <h2 className='designation'>Software Developer</h2>
          <h3 className='mail-id'>spurwar2002@gmail.com</h3>
          <div className='icons-container'>
            <a href='https://www.facebook.com/shikhar.purwar.1'><img src={facebookIcon} className="icons" /></a>
            <a href='https://twitter.com/ShikharPurwar02'><img src={twitterIcon} className="icons" /></a>
            <a href='https://www.instagram.com/theshikharpurwar/'><img src={instagramIcon} className="icons" /></a>
            <a href='https://www.youtube.com/channel/UCu7c0wVAYCvW55x5rjDpxUw'><img src={youtubeIcon} className="icons" /></a>
          </div>
        </div>
      </div>  
    </div>
  );
}

export default App;
