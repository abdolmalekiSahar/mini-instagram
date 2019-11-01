import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import background from '../_images/background.jpg';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Button from '@material-ui/core/Button';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        width: 500,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        color: '#666',
        fontSize: '28px'
    },
    button: {
        margin: theme.spacing(1),
    },
    margin: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
}));


const NewPostPage = (props) => {

    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return <div className="full-page container center" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover' }}>
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            className={classes.root}>
            <IconButton className={classes.margin} aria-label="back">
                <ArrowBackIosIcon fontSize="large" />
            </IconButton >
            <Typography variant="h4" color="textPrimary" classes={{ colorTextPrimary: classes.title }}>
                New Post
                </Typography>
            <Button color="primary" className={classes.button}>
                share
            </Button>
        </BottomNavigation>
        <div className={classes.root}>
            <Typography variant="h4" color="textPrimary" classes={{ colorTextPrimary: classes.title }}>
                Select an image
                </Typography>
            <input
                accept="image/*"
                className={classes.input}
                id="contained-button-file"
                multiple
                type="file"
            />
            <label htmlFor="contained-button-file">
                <Button variant="contained" component="span" className={classes.button}>
                    Select file
                </Button>
            </label>
        </div>
        <TextareaAutosize className={classes.root} aria-label="minimum height" rows={10} placeholder="write a text" />

    </div>
}
export { NewPostPage };