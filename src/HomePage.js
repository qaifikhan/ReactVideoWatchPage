import React from 'react';
import axios from 'axios';

import { VideoPlaylistData } from './VideoData';
import VideoCard from './PlaylistCard';

import classes from './HomePage.module.css';

class HomePage extends React.Component {
    state = {
        videoList: [],
        showLoader: true,
    }

    componentDidMount() {
        axios.get("http://5d76bf96515d1a0014085cf9.mockapi.io/playlist")
        .then(response => {
            // console.log(response.data);
            this.setState({ videoList: response.data, showLoader: false });
        })
        .catch(err => {
            console.log(err);
        })
    }

    render() {
        const videoPlaylistData = this.state.videoList;
    
        const cardGrid =  videoPlaylistData.map(item => {
            return (
                <div className={classes.VideoCard}>
                    <VideoCard key={item.id} id={item.id} videoTitle={item.title} thumbnail={item.thumbnail} />
                </div>
            )
        })
    
        return(
            <div className={classes.MainContainer}>
                {
                    this.state.showLoader ? 
                    <h1>Loading...</h1>
                    :
                    cardGrid
                }
            </div>
        )
    }
}

export default HomePage;