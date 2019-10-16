import React from 'react';

import PlaylistCard from './PlaylistCard';

import { VideoMetaData, VideoPlaylistData } from './VideoData';
import classes from './App.module.css';

function App() {
  const videoMetaData = VideoMetaData;
  const videoPlaylist = VideoPlaylistData;

  console.log(videoPlaylist);

  const videoPlaylistRender = videoPlaylist.map((item, pos) => {
    return (
      <PlaylistCard key={item.id} id={item.id} videoTitle={item.title} thumbnail={item.thumbnail} />
    )
  })

  return (
    <div className={classes.App}>
      <div className={classes.MainWrapper}>
        <div className={classes.PlayerSection}>
          <div className={classes.PlayerWrapper}>
            <iframe className={classes.VideoPlayer} src="https://player.vimeo.com/video/190062231" frameBorder="0" webkitallowfullscreen="" mozallowfullscreen="" allowFullScreen="" title="Video Player"></iframe>
          </div>

          <div className={classes.VideoStats}>
            <p className={classes.ViewCount}>{videoMetaData.views} views</p>
            <div>
                <i className="far fa-heart"></i>
                <i className="far fa-comment-alt"></i>
                <i className="far fa-bookmark"></i>
            </div>
          </div>

          <h1 className={classes.VideoTitle}>{videoMetaData.title}</h1>
          <p className={classes.VideoDescription}>{videoMetaData.description}</p>
        </div>
        <div className={classes.Playlist}>
          {videoPlaylistRender}
        </div>
      </div>
    </div>
  );
}

export default App;
