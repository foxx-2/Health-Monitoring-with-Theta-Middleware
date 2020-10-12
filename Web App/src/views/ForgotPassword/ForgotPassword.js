import React, { useState } from 'react';
import { Button, TextField, Dialog, DialogContent, DialogContentText, DialogTitle, DialogActions } from '@material-ui/core';
import { Grid, Typography, makeStyles, Container, ThemeProvider, Slide } from '@material-ui/core';
import { AppBar, Toolbar, withStyles } from "@material-ui/core"
import theme from "../../assets/theme/theme"

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(3),
    },
    toolBar: {
        minHeight: "180px",
    },
    appBar: {
        alignItems: "center",
    },
    marginTopAppBar: {
        marginTop: theme.spacing(35)
    },
    submit: {
        margin: theme.spacing(6, 0, 2),
        height: "70px"
    }
}));

const CssTextField = withStyles({
    root: {
        '& label': {
            color: 'white',
        },
        '& label.Mui-focused': {
            color: 'cyan',
        },

        '& .MuiInput-underline:after': {
            borderBottomColor: 'cyan',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'white',
            },
            '& ': {
                color: 'white'
            },
            '&:hover fieldset': {
                borderColor: 'cyan',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'cyan',
            },
        },
    },
})(TextField);

export default function ForgotPassword() {
    const classes = useStyles();
    const [seed, SetSeed] = useState('')
    const [Password, SetPassword] = useState('')
    const [open, setOpen] = React.useState(false);
    const handleSubmit = async () => {
        setOpen(true)
        var obj = await fetch(`https://thetamiddleware.herokuapp.com/forgotPassword/${seed}`);
        var newObj = await obj.json();
        SetPassword(newObj.password)
        console.log(newObj.password)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <ThemeProvider theme={theme}>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar className={classes.toolBar}>
                    <Slide direction="down" in={true} timeout={300}>
                        <Typography variant="h3" className={classes.title}>
                            FORGOT PASSWORD
                         </Typography>
                    </Slide>
                </Toolbar>
            </AppBar>
            <div className={classes.marginTopAppBar} />
            <Slide direction="down" in={true} timeout={300}>
                <Container component="main" maxWidth="sm">
                    <div className={classes.paper}>
                        <form className={classes.form} noValidate>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <CssTextField
                                        autoComplete="fname"
                                        name="enterSeed"
                                        variant="outlined"
                                        required
                                        value={seed}
                                        onChange={e => SetSeed(e.target.value)}
                                        fullWidth
                                        id="enterSeed"
                                        label="Enter Seed"
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                onClick={handleSubmit}
                                fullWidth
                                variant="contained"
                                style={{ fontSize: 20 }}
                                color="primary"
                                className={classes.submit}
                            >
                                Get Password
                        </Button>
                            <Dialog
                                fullWidth
                                maxWidth="sm"
                                open={open}
                                onClose={handleClose}
                            >
                                <DialogTitle>Password Received</DialogTitle>
                                <DialogContent>
                                    <DialogContentText>
                                        {Password !== undefined ? `Your Password is ${Password}` : 'Invalid Seed'}
                                    </DialogContentText>
                                    <DialogActions>
                                        <Button onClick={handleClose} color="primary">
                                            Close
                                    </Button>
                                    </DialogActions>
                                </DialogContent>
                            </Dialog>
                        </form>
                    </div>
                </Container>
            </Slide>
        </ThemeProvider>
    );
}