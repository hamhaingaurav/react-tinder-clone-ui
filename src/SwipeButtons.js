import React from 'react'

import { makeStyles } from '@material-ui/core/styles';

import ReplayIcon from '@material-ui/icons/Replay'
import CloseIcon from '@material-ui/icons/Close'
import StarRateIcon from '@material-ui/icons/StarRate'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FlashOnIcon from '@material-ui/icons/FlashOn'
import IconButton from '@material-ui/core/IconButton'


export default function SwipeButtons() {

    const classes = useStyles();

    return (
        <div className={classes.swipeButtons}>
            <IconButton className={classes.swipeButtons__repeat}>
                <ReplayIcon fontSize='large' />
            </IconButton>
            <IconButton className={classes.swipeButtons__left}>
                <CloseIcon fontSize='large' />
            </IconButton>
            <IconButton className={classes.swipeButtons__star}>
                <StarRateIcon fontSize='large' />
            </IconButton>
            <IconButton className={classes.swipeButtons__right}>
                <FavoriteIcon fontSize='large' />
            </IconButton>
            <IconButton className={classes.swipeButtons__lightning}>
                <FlashOnIcon fontSize='large' />
            </IconButton>
        </div>
    )
}


const MuiIconButtonRoot = {
    backgroundColor: 'white',
    boxShadow: '0px 10px 53px 0px rgba(0,0,0,0.3) !important'
}

const useStyles = makeStyles({
    swipeButtons: {
        position: 'fixed',
        bottom: '6vh',
        display: 'flex',
        width: '100%',
        justifyContent: 'space-evenly'
    },
    swipeButtons__repeat: {
        ...MuiIconButtonRoot,
        padding: '1rem !important',
        color: '#f5b748 !important',
    },
    swipeButtons__left: {
        ...MuiIconButtonRoot,
        padding: '1rem !important',
        color: '#ec5e6f !important',
    },
    swipeButtons__star: {
        ...MuiIconButtonRoot,
        padding: '1rem !important',
        color: '#62b4f9 !important',
    },
    swipeButtons__right: {
        ...MuiIconButtonRoot,
        padding: '1rem !important',
        color: '#76e2b3 !important',
    },
    swipeButtons__lightning: {
        ...MuiIconButtonRoot,
        padding: '1rem !important',
        color: '#915dd1 !important',
    },
});
