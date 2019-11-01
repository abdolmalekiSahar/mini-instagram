import React from 'react';
import background from '../_images/background.jpg';
import lizard from '../_images/lizard.jpg';
import avatar from '../_images/avatar.jpg';
import { fade, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { Person, People } from '@material-ui/icons';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
// import {realtimeDate} from '../_constants/other.constants';


const useStyles = makeStyles(theme => ({
    title: {
        color: '#FFF'
    },
    avatar: {
        margin: 10,
    },
    bigAvatar: {
        width: 150,
        height: 150,
        margin: 20,
    },
    button: {
        margin: theme.spacing(1),
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 120,
            '&:focus': {
                width: 200,
            },
        },
    },
    search: {
        margin: 20,
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    addicon: {
        width: 50,
        height: 50,
    },
    card: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    cardcontent: {
        display: 'flex',
    },
    media: {
        maxWidth: 400,
        margin: 10,
        borderRadius: 5
    },
    like: {
        display: 'flex',
        position: 'absolute',
        margin: 30
    }
}));

const OthersProfilePage = (props) => {

    const classes = useStyles();

    return <div className="full-page container" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover' }}>

        <div className="profileHeader">
            <div className={classes.search}>
                <div className={classes.searchIcon}>
                    <SearchIcon />
                </div>
                <InputBase
                    placeholder="Search…"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                />
            </div>
            <People />
            <Person />
            
        </div>

        <div className="profileMain">
            <Grid alignItems="center">
                <Avatar alt="Remy Sharp" src={avatar} className={classes.bigAvatar} />
            </Grid>
            <div>
                <Typography variant="h4" color="textPrimary" classes={{ colorTextPrimary: classes.title }}>
                    {localStorage.getItem("userData")}
                </Typography>
                <Typography color="textPrimary" classes={{ colorTextPrimary: classes.title }}>
                    Bio.
                {/* {localStorage.getItem("userData")} */}
                </Typography>
            </div>
        </div>

        <div className="profilePosts">
            <Typography className={classes.title} color="textSecondary" gutterBottom>
                POSTS
            </Typography>
            <Card className={classes.card}>
                <CardContent className={classes.cardcontent}>
                    <CardMedia
                        className={classes.media}
                        component="img"
                        alt="Contemplative Reptile"
                        image={lizard}
                        title="Contemplative Reptile"
                    />
                    <div
                        className={classes.like}>
                        <ChatBubbleIcon fontSize="large"></ChatBubbleIcon>
                        <Typography>
                            66
                        </Typography>
                        <FavoriteIcon fontSize="large"></FavoriteIcon>
                        <Typography>
                            98
                        </Typography>
                    </div>
                </CardContent>
                <CardContent className={classes.cardcontent}>
                    <CardMedia
                        className={classes.media}
                        component="img"
                        alt="Contemplative Reptile"
                        image={lizard}
                        title="Contemplative Reptile"
                    />
                    <div
                        className={classes.like}>
                        <ChatBubbleIcon fontSize="large"></ChatBubbleIcon>
                        <Typography>
                            12
                        </Typography>
                        <FavoriteIcon fontSize="large"></FavoriteIcon>
                        <Typography>
                            54
                        </Typography>
                    </div>
                </CardContent>
                <CardContent className={classes.cardcontent}>
                    <CardMedia
                        className={classes.media}
                        component="img"
                        alt="Contemplative Reptile"
                        image={lizard}
                        title="Contemplative Reptile"
                    />
                     <div
                        className={classes.like}>
                        <ChatBubbleIcon fontSize="large"></ChatBubbleIcon>
                        <Typography>
                            54
                        </Typography>
                        <FavoriteIcon fontSize="large"></FavoriteIcon>
                        <Typography>
                            76
                        </Typography>
                    </div>
                </CardContent>
            </Card>
        </div>
    </div>
}
export { OthersProfilePage };