import React from  'react';

import classes from './PlaylistCard.module.css';

const PlaylistCard = (props) => {
    console.log(props);
    return(
        <div className={classes.PlaylistCard}>
            <img src={props.thumbnail} alt="Thumbnail" />
            <h3>{props.videoTitle}</h3>
        </div>
    );
}

export default PlaylistCard;