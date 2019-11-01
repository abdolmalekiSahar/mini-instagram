import React, { useState } from 'react';
import background from '../_images/background.jpg';
import avatar from '../_images/avatar.jpg';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';


const EditProfilePage = (props) => {

    const useStyles = makeStyles(theme => ({
        title: {
            color: '#FFF'
        },
        bigAvatar: {
            width: 150,
            height: 150,
            margin: 20,
        },
        container: {
            display: 'flex',
            flexDirection: 'column',
            width: '60vw',
        },
        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
        },
        input: {
            display: 'none',
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
          button: {
            margin: theme.spacing(1),
        },
    }));

    const classes = useStyles();
    const [values, setValues] = useState({
        name: "",
    });

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };

    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = useState(0);
    React.useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
    }, []);

    return <div className="full-page center" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover' }}>

        <div className="profileMain">
            <Grid alignItems="center">
                <Avatar alt="Remy Sharp" src={avatar} className={classes.bigAvatar} />
            </Grid>
            <div>
                <Typography variant="h4" color="textPrimary" classes={{ colorTextPrimary: classes.title }}>
                    {localStorage.getItem("userData")}
                </Typography>
                <input
                accept="image/*"
                className={classes.input}
                id="text-button-file"
                multiple
                type="file"
            />
            <label htmlFor="text-button-file">
                <Button component="span" className={classes.button}>
                    change profile picture
                </Button>
            </label>
            </div>
        </div>
        <form className={classes.container} noValidate autoComplete="off">
            <TextField
                id="outlined-name"
                label="Name"
                className={classes.textField}
                value={values.name}
                onChange={handleChange('name')}
                margin="normal"
                variant="outlined"
            />
            <TextField
                id="outlined-name"
                label="username"
                className={classes.textField}
                value={values.username}
                onChange={handleChange('username')}
                margin="normal"
                variant="outlined"
            />
            <TextField
                id="outlined-multiline-static"
                label="Bio"
                multiline
                rows="4"
                defaultValue=""
                className={classes.textField}
                margin="normal"
                variant="outlined"
            />
            <TextField
                id="outlined-name"
                label="Email"
                className={classes.textField}
                value={values.email}
                onChange={handleChange('email')}
                margin="normal"
                variant="outlined"
            />
            <TextField
                id="outlined-name"
                label="phoneNumber"
                className={classes.textField}
                value={values.phonenumber}
                onChange={handleChange('phonenumber')}
                margin="normal"
                variant="outlined"
            />
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel ref={inputLabel} htmlFor="outlined-age-simple">
                    Gender
                </InputLabel>
                <Select
                    value={values.age}
                    onChange={handleChange}
                    labelWidth={labelWidth}
                    inputProps={{
                        name: 'gender',
                        id: 'outlined-age-simple',
                    }}>
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value='male'>Male</MenuItem>
                    <MenuItem value='female'>Female</MenuItem>
                </Select>
            </FormControl>
            <Button variant="outlined" color="inherit" className={classes.button}>
                submit
            </Button>
        </form>
    </div>
}
export { EditProfilePage };