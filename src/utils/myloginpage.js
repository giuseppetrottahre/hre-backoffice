// in src/MyLoginPage.js
import * as React from 'react';
import { useState } from 'react';
import {
    Avatar,
    Button,
    Card,
    CardActions,
    TextField
} from '@material-ui/core';
import {  makeStyles } from '@material-ui/core/styles';
import LockIcon from '@material-ui/icons/Lock';
import { Notification, useLogin, useNotify } from 'react-admin';



const useStyles = makeStyles(theme => ({
    main: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundImage: 'radial-gradient(circle at 50% 14em, #313264 0%, #00023b 60%, #00023b 100%)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    card: {
        minWidth: 300,
        marginTop: '6em',
    },
    avatar: {
        margin: '1em',
        display: 'flex',
        justifyContent: 'center',
    },
    icon: {
        backgroundColor: theme.palette.secondary.main,
    },
    hint: {
        marginTop: '1em',
        display: 'flex',
        justifyContent: 'center',
        color: theme.palette.grey[500],
    },
    form: {
        padding: '0 1em 1em 1em',
    },
    input: {
        marginTop: '1em',
    },
    actions: {
        padding: '0 1em 1em 1em',
    },
    buttonLink: {
        background: 'none!important',
        border: 'none',
        padding: '0!important',
        /*optional*/
        fontFamily: 'arial, sans-serif',
        /*input has OS specific font-family*/
        color: '#069',
        textDecoration: 'underline',
        cursor: 'pointer',
      }
}));



const MyLoginPage = ({ theme }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const login = useLogin();
    const notify = useNotify();
    const submit = e => {
        e.preventDefault();
        if(username==='' || password ===''){
            notify('Please specify username and password');
        }else
        login({ username, password }).catch(() =>
            notify('Invalid username or password')
        );
    };
    const classes = useStyles();

    const handleResetPwd = e =>{
        e.preventDefault();
        if(username===''){
            notify('Please specify username');
        }else if(username.toLowerCase() ==='admin'){
            notify('Cannot change password for user admin!');
        }else
        fetch('/v1/backend/resetpwd/'+username)
        .then((response) => {
            if (response.status < 200 || response.status >= 300) {
              throw new Error(response.statusText);
            }
            notify('Check email for a temporary password')
            return response.json();
          })
        .then(data => console.log(data))
        .catch(()=>notify('Error on reset password for user:'+username));
      }

return(
    <form onSubmit={submit} noValidate>
    <div className={classes.main}>
        <Card className={classes.card}>
            <div className={classes.avatar}>
                <Avatar className={classes.icon}>
                    <LockIcon />
                </Avatar>
            </div>
            <div className={classes.hint}>
                Accedi
            </div>
            <div className={classes.form}>
                <div className={classes.input}>
                    <TextField
                        autoFocus
                        name="username"
                        label="Nome utente"
                        fullWidth
                        onChange={e => setUsername(e.target.value)}
                     />
                </div>
                <div className={classes.input}>
                    <TextField
                        name="password"
                        label="password"
                        type="password"
                        fullWidth
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <div className={classes.input}>
                <a href="#top" onClick={handleResetPwd}>Richiedi nuova assword</a>
                </div>
            </div>

            <CardActions className={classes.actions}>
                <Button
                    variant="contained"
                    type="submit"
                    color="primary"
                    fullWidth
                >Entra
                </Button>
            </CardActions>
        </Card>
        <Notification />
    </div>
</form>


);


};

export default MyLoginPage;