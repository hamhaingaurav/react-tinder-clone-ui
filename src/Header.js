import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import PersonIcon from '@material-ui/icons/Person'
import ForumIcon from '@material-ui/icons/Forum'
import IconButton from '@material-ui/core/IconButton'


export default function Header() {

    const classes = useStyles();

    return (
        <div className={classes.header}>
            <IconButton className={classes.header__icon}>
                <PersonIcon />
            </IconButton>
            <IconButton>
                <img
                    className={classes.header__logo}
                    alt="logo"
                    src="https://logodownload.org/wp-content/uploads/2020/09/tinder-logo.png"
                />
            </IconButton>
            <IconButton className={classes.header__icon}>
                <ForumIcon />
            </IconButton>
        </div>
    )
}


const useStyles = makeStyles({
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        zIndex: '100',
        borderButtom: '1px solid #f9f9f9'
    },
    header__logo: {
        objectFit: 'contain',
        height: '22px',
    },
    header__icon: {
        padding: '20px',
    }
});