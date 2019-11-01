import React,{useState} from 'react';
import background from '../_images/background.jpg';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
// import CircularProgress from '@material-ui/core/CircularProgress';
import { Link,withRouter } from "react-router-dom";
// import axios from 'axios';
// import {HOST} from '../_constants/other.constants';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { connect } from 'react-redux';
import { authenticationAction } from "../_action";

const useStyles = makeStyles(theme =>({
    card: {
      width: 350,
    },
    textField: {
        width: '100%'
    },
    cardAction: {
        justifyContent: 'flex-end'
    },
    cardRegister: {
        justifyContent: 'center'
    }
}));

const SigninPage = (props) => {

    const {dispatch,signinRequest} = props;
    const [values,setValues] = useState({
        signin: '',
        password: ''
    });
    const [responseMessage,setResponseMessage] = useState(null);

    const classes = useStyles();

    const handleChange = ({target:{name,value}}) => {
        setValues({ ...values, [name]: value });
    };

    const submitHandler = async (event) =>{
        event.preventDefault();
        debugger
        dispatch(authenticationAction.signin(values.signin,values.password,props.history));
    }

    const handleClose = () =>{
        setResponseMessage(null);
    }


    return <div className="full-page exact center" style={{backgroundImage: `url(${background})`,backgroundSize: 'cover'}}>
        <Card className={classes.card}>
            <form onSubmit={submitHandler}>
                <CardContent>
                    <Typography variant="h6" component="h1" color="textSecondary" gutterBottom>
                        Sign in
                    </Typography>
                    <TextField
                        id="email"
                        label="Email or username"
                        name="signin"
                        className={classes.textField}
                        value={values.signin}
                        onChange={handleChange}
                        margin="normal"
                        type="email"
                        required
                    />
                    <TextField
                        id="password"
                        label="Password"
                        name="password"
                        className={classes.textField}
                        value={values.password}
                        onChange={handleChange}
                        margin="normal"
                        type="password"
                        required
                    />
                </CardContent>
                <CardActions className={classes.cardAction}>
                    <Button type="submit" size="small" variant="contained" color="primary"> Sign in </Button>
                </CardActions>
            </form>
        </Card >
        <br/>
        <Card className={classes.card}>
        <CardContent >
            <CardActions  className={classes.cardRegister}>
            <span>Don't have an account?</span>
                <Button type="button" component={Link} to="/signup" variant="outlined" size="small">Sign up</Button>
            </CardActions>
        </CardContent>
        </Card>
        
        <Snackbar
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            open={!!responseMessage}
            autoHideDuration={6000}
            onClose={handleClose}
            ContentProps={{
                'aria-describedby': 'message-id',
            }}
            message={<span id="message-id">{responseMessage}</span>}
            action={[
            <IconButton
                key="close"
                aria-label="close"
                color="inherit"
                className={classes.close}
                onClick={handleClose}
            >
                <CloseIcon />
            </IconButton>,
            ]}
        />
    </div>
}

const mapStateToProps = state => {
    const { signinRequest } = state.authentication;
    return { signinRequest };
};

const ConnectedSigninPage = withRouter(connect(mapStateToProps)(SigninPage));
export {ConnectedSigninPage as SigninPage};