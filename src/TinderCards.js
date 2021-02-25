import React from 'react'

import { makeStyles } from '@material-ui/core/styles';

import TinderCard from 'react-tinder-card'


export default function TinderCards() {

    const classes = useStyles();

    const [people] = React.useState([
        {
            name: 'Elon Musk',
            url: 'https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg',
        },
        {
            name: 'Jeff Bezos',
            url: 'https://pbs.twimg.com/profile_images/669103856106668033/UF3cgUk4_400x400.jpg'
        }
    ])

    const onSwipe = (direction) => {
        console.log('You swiped: ' + direction)
    }

    const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
    }

    const renderPerson = () => {
        return people.map(person => (
            <TinderCard
                className={classes.swipe}
                key={person.name}
                preventSwipe={['up', 'down']}
                onSwipe={(dir) => onSwipe(dir, person.name)}
                onCardLeftScreen={() => onCardLeftScreen(person.name)}
            >
                <div
                    style={{ backgroundImage: `url(${person.url})` }}
                    className={classes.card}
                >
                    <h3 className={classes.card__h3}>{person.name}</h3>
                </div>
            </TinderCard>
        ))
    }

    return (
        <div className={classes.tinderCards}>
            <div className={classes.tinderCards__cardContainer}>
                {renderPerson()}
            </div>
        </div>
    )
}

const useStyles = makeStyles({
    card: {
        position: 'relative',
        backgroundColor: '#fff',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        borderRadius: '20px',
        backgroundPosition: 'center',
        width: '50vh',
        padding: '20px',
        maxWidth: '85vw',
        height: '50vh',
        margin: 'auto',
    },
    tinderCards__cardContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '10vh',
    },
    swipe: {
        position: 'absolute',
    },
    card__h3: {
        position: 'absolute',
        bottom: '0',
        margin: '10px',
        color: '#fff',
    }
});