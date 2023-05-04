import React from 'react';

import classes from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <span>The Generics</span>
      <div className={classes.links}>
        <a rel='noreferrer' href='https://www.youtube.com' target='_blank'>
          <img src='assets/youtube.jpg' alt='YouTube'/>
        </a>
        <a rel='noreferrer' href='https://www.spotify.com' target='_blank'>
          <img src='assets/spotify.jpg' alt='Spotify' />
        </a>
        <a rel='noreferrer' href='https://www.facebook.com' target='_blank'>
          <img src='assets/facebook.jpg' alt='Facebook' />
        </a>
      </div>
    </footer>
  );
};
export default Footer;