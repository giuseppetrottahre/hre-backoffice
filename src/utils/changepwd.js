// in src/MyLoginPage.js
import * as React from 'react';
import { useState } from 'react';

import {
    Avatar,
    Button,
    Card,
    CardActions,
    TextField,
} from '@material-ui/core';
import {  makeStyles } from '@material-ui/core/styles';
import LockIcon from '@material-ui/icons/Lock';
import { Notification, useNotify } from 'react-admin';



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
}));

var md5= require("md5");

const ChangePwd = ({ theme }) => {
    const [passwordFirst, setPasswordFirst] = useState('');
    const [passwordSecond, setPasswordSecond] = useState('');
    const username=localStorage.getItem('auth');
    const notify = useNotify();
    const submit = e => {
        e.preventDefault();
    //chiamata per il cmbio password  
    if (passwordFirst !== passwordSecond)   
        notify('Le password non coincidono')
    else
    {
    const request = new Request(
        "/v1/backend/changepwd",
        {
          method: 'POST',
          body: JSON.stringify({"username":username, "password":md5(passwordFirst) }),
          headers: new Headers({ 'Content-Type': 'application/json' }),   credentials: 'include',
        },
      );
      fetch(request)
      .then((response) => {
        if (response.status < 200 || response.status >= 300) {
          throw new Error(response.statusText);
        }
        notify('ricarica la pagina e collegati con la nuova password')
        return response.json();
      })
    .then(data => {console.log(data); return Promise.reject()})
    .catch(()=>notify('Errore nel cambio password per l\'utente:'+username));
    };
}
    const classes = useStyles();

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
                        name="password"
                        label="Inserisci la nuova password"
                        type="password"
                        fullWidth
                        onChange={e => setPasswordFirst(e.target.value)}
                    />
                </div>
                <div className={classes.input}>
                    <TextField
                        name="password"
                        label="Reinserisci la nuova  password"
                        type="password"
                        fullWidth
                        onChange={e => setPasswordSecond(e.target.value)}
                    />
                </div>
            </div>

            <CardActions className={classes.actions}>
                <Button
                    variant="contained"
                    type="submit"
                    color="primary"
                    fullWidth
                > Cambia password
                </Button>
            </CardActions>
        </Card>
        <Notification />
    </div>
</form>

);


};

export default ChangePwd;