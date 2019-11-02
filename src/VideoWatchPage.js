import React, { Component } from 'react';
import axios from 'axios';

import PlaylistCard from './PlaylistCard';

import { VideoMetaDataList, VideoPlaylistData } from './VideoData'
import classes from './VideoWatchPage.module.css';

class VideoWatchPage extends Component {
    state = {
        currentVideoCardPos: 0,
        videoMetaData: VideoMetaDataList[2],
        videoPlaylist: VideoPlaylistData,
    }

    onVideoCardClick = (pos) => {
      this.setState({videoMetaData: VideoMetaDataList[pos], currentVideoCardPos: pos});
    }

    getVideoDataFromBackend = () => {
        const videoId = this.props.match.params.videoId;
        if(videoId !== undefined && videoId !== null && videoId !== '' && parseInt(videoId) > 0) {
            axios.get(`http://5d76bf96515d1a0014085cf9.mockapi.io/video/${videoId}`)
            .then(response => {
                console.log(response.data);
                this.setState({videoMetaData: response.data});
            })
            .catch(err => {
                console.log(err);
            })
        }
    }

    componentDidMount() {
        this.getVideoDataFromBackend();
    }

    componentDidUpdate() {
        this.getVideoDataFromBackend();
    }

    render() {
        const videoPlaylistRender = this.state.videoPlaylist.map((item, pos) => {
            return (
              <PlaylistCard key={item.id} id={item.id} videoTitle={item.title} thumbnail={item.thumbnail} onCardClick = {this.onVideoCardClick} cardPos={pos} currentVideo={this.state.currentVideoCardPos} />
            )
        })

        return(
            <div className={classes.App}>
                <div className={classes.MainWrapper}>
                <div className={classes.PlayerSection}>
                    <div className={classes.PlayerWrapper}>
                    <iframe className={classes.VideoPlayer} src={`https://player.vimeo.com/video/${this.state.videoMetaData.vimeoId}`} frameBorder="0" webkitallowfullscreen="" mozallowfullscreen="" allowFullScreen="" title="Video Player"></iframe>
                    </div>
        
                    <div className={classes.VideoStats}>
                    <p className={classes.ViewCount}>{this.state.videoMetaData.views} views</p>
                    <div>
                        <i className="far fa-heart"></i>
                        <i className="far fa-comment-alt"></i>
                        <i className="far fa-bookmark"></i>
                    </div>
                    </div>
        
                    <h1 className={classes.VideoTitle}>{this.state.videoMetaData.title}</h1>
                    <p className={classes.VideoDescription}>{this.state.videoMetaData.description}</p>
                </div>
                <div className={classes.Playlist}>
                    {videoPlaylistRender}
                </div>
                </div>
            </div>
        );
    }
}

export default VideoWatchPage;