import React from 'react';
import background from '../_images/background.jpg';
import avatar from '../_images/avatar.jpg';
import avatarMan from '../_images/avatar-man.jpg';
import postImage from '../_images/post.jpg';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import clsx from 'clsx';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CardMedia from '@material-ui/core/CardMedia';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';

// import {realtimeDate} from '../_constants/other.constants';

const useStyles = makeStyles(theme => ({
    card: {
        minWidth: 275,
        maxWidth: 380,
    },
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
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    dense: {
        marginTop: theme.spacing(1),
        width: '100%',
        maxWidth: 320,
    },
    inline: {
        display: 'inline',
    },
    root: {
        width: '100%',
        maxWidth: 380,
        backgroundColor: theme.palette.background.paper,
    },
    like: {
        width: 40,
        height: 40,
        margin: 10,
    },
    media: {
        height: 650,
        width: 400,
        margin: 10,
        borderRadius: 10
    },
    flex: {
        display: 'flex'
    },
    input: {
        display: 'none',
    },
}));

const EditPostPage = (props) => {

    const classes = useStyles();

    return <div className="full-page maxwidth postpage" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover' }}>

        <Card className={classes.card}>
            <CardMedia
                className={classes.media}
                image={postImage}
                title="Paella dish"
            />
            <CardActions >
                <input
                    accept="image/*"
                    className={classes.input}
                    id="contained-button-file"
                    multiple
                    type="file"
                />
                <label htmlFor="contained-button-file">
                    <Button variant="contained" component="span" className={classes.button}>
                        change image
                </Button>
                </label>
            </CardActions>
        </Card>
        <div>
            <div className="maxwidth">
                <Grid alignItems="center">
                    <Avatar alt="Remy Sharp" src={avatar} className={classes.bigAvatar} />
                </Grid>

                <Typography variant="h4" color="textPrimary" classes={{ colorTextPrimary: classes.title }}>
                    {localStorage.getItem("userData")}
                </Typography>

                {/* {localStorage.getItem("userData")} */}

            </div>
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="body2" component="p">
                        <TextareaAutosize className={classes.root} aria-label="minimum height" rows={10} placeholder="write a text" value='' />
                    </Typography>
                </CardContent>
            </Card>

            <List className={classes.root}>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src={avatarMan} />
                    </ListItemAvatar>
                    <ListItemText
                        secondary={
                            <React.Fragment>
                                <Typography
                                    component="span"
                                    variant="body2"
                                    className={classes.inline}
                                    color="textPrimary"
                                >
                                    Ali Connors
                                </Typography>
                                {" — I'll be in your neighborhood doing errands this…"}
                            </React.Fragment>
                        }
                    />
                    <IconButton aria-label="share">
                        <DeleteIcon fontSize="" />
                    </IconButton>
                </ListItem>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Travis Howard" src={avatarMan} />
                    </ListItemAvatar>
                    <ListItemText
                        secondary={
                            <React.Fragment>
                                <Typography
                                    component="span"
                                    variant="body2"
                                    className={classes.inline}
                                    color="textPrimary"
                                >
                                    Jennifer
                                </Typography>
                                {" — Wish I could come, but I'm out of town this…"}
                            </React.Fragment>
                        }
                    />
                    <IconButton aria-label="share">
                        <DeleteIcon fontSize="" />
                    </IconButton>
                </ListItem>

                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Cindy Baker" src={avatarMan} />
                    </ListItemAvatar>
                    <ListItemText
                        secondary={
                            <React.Fragment>
                                <Typography
                                    component="span"
                                    variant="body2"
                                    className={classes.inline}
                                    color="textPrimary"
                                >
                                    Sandra Adams
                                </Typography>
                                {' — Do you have Paris recommendations? Have you ever…'}
                            </React.Fragment>
                        }
                    />
                    <IconButton aria-label="share">
                        <DeleteIcon fontSize="" />
                    </IconButton>
                </ListItem>
            </List>
            <div className={classes.flex}>
                <TextField
                    id="outlined-dense-multiline"
                    label="add comment"
                    className={clsx(classes.textField, classes.dense)}
                    margin="dense"
                    variant="outlined"
                    multiline
                />

                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
            </div>
        </div>
        <div>
            <Button variant="outlined" color="primary" className={classes.button}>
                confirm changes
            </Button>
            <Button variant="outlined" color="secondary" className={classes.button}>
                delete Post
            </Button>
        </div>
    </div>
}
export { EditPostPage };