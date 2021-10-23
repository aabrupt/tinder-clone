// Libraries and functions
import * as React from 'react';
import './SwipeButtons.css';
// Components
import { IconButton } from '@mui/material';
// Icons
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';


export interface ISwipeButtonsProps {
}

export default function SwipeButtons (props: ISwipeButtonsProps) {
    return (
        <div className="swipeButtons">
            <IconButton className="swipeButtons__swipeButton swipeButtons__repeat">
                <ReplayIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipeButtons__swipeButton swipeButtons__left">
                <CloseIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipeButtons__swipeButton swipeButtons__star">
                <StarRateIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipeButtons__swipeButton swipeButtons__right">
                <FavoriteIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipeButtons__swipeButton swipeButtons__lightning">
                <FlashOnIcon fontSize="large" />
            </IconButton>
        </div>
    );
}
