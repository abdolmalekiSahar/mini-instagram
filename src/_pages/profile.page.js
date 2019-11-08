import React from 'react';
import background from '../_images/background.jpg';
import avatar from '../_images/avatar.jpg';
import { fade, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { Person, People } from '@material-ui/icons';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import image1 from '../_images/hats.jpg';
import image2 from '../_images/breakfast.jpg';


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
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    //   title: {
    //     color: theme.palette.primary.light,
    //   },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },

}));

const tileData = [
    {
        img: image1,
        title: 'Image1',
        like: '25',
        comment: '89'
    },
    {
        img: image2,
        title: 'Image2',
        like: '25',
        comment: '89'
    },
    {
        img: image1,
        title: 'Image1',
        like: '25',
        comment: '89'
    },
    {
        img: image2,
        title: 'Image2',
        like: '25',
        comment: '89'
    },
];


const ProfilePage = (props) => {

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
            <Button variant="outlined" className={classes.button}>
                sign out
            </Button>
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
            <Button variant="outlined" className={classes.button}>
                Edit profile
            </Button>
        </div>

        <div className="profilePosts">
            <Typography className={classes.title} color="textSecondary" gutterBottom>
                POSTS
            </Typography>
            <Button variant="outlined" color="secondary" className={classes.button}>
                New Post
            </Button>
            <div className={classes.root}>


                <GridList className={classes.gridList} cols={2.5}>
                    {tileData.map(tile => (
                        <GridListTile key={tile.img}>
                            <img src={tile.img} alt={tile.title} />

                            <GridListTileBar
                                title={
                                    <div>
                                        <ChatBubbleIcon fontSize="large"></ChatBubbleIcon>
                                        {tile.comment}
                                        <FavoriteIcon fontSize="large"></FavoriteIcon>
                                        {tile.like}
                                    </div>
                                }
                                classes={{
                                    root: classes.titleBar,
                                    title: classes.title,
                                }}

                                actionIcon={
                                    <div>
                                        <IconButton aria-label={`star ${tile.title}`}>
                                            <EditIcon fontSize="large" className={classes.title} />
                                        </IconButton>
                                    </div>
                                }
                            />
                        </GridListTile>
                    ))}
                </GridList>
            </div>
           
        </div>

    </div>
}
export { ProfilePage };