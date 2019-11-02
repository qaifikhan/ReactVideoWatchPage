import React from  'react';
import { Link } from 'react-router-dom';

import classes from './PlaylistCard.module.css';

const PlaylistCard = (props) => {
    const classesArr = [classes.PlaylistCard];
    if(props.currentVideo === props.cardPos) {
        classesArr.push(classes.Active);
    }

    return(
        <Link to={`/watch/${props.id}`}>
            <div className={classesArr.join(' ')}>
                <img src={props.thumbnail} alt="Thumbnail" />
                <h3>{props.videoTitle}</h3>
            </div>
        </Link>
    );
}

export default PlaylistCard;