import { Avatar, Box, Button, Checkbox, Container, CssBaseline, FormControlLabel, Grid, TextField, ThemeProvider, Typography, createTheme } from '@mui/material';
import React, { useContext } from 'react';
import { FaLock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Register.css'
import { AuthContext } from '../../AuthProvider/AuthProvider';
// import { Button } from 'react-bootstrap';

const Register = () => {
    const { createUser,googleSignUp,FbSignUp } = useContext(AuthContext)
    const defaultTheme = createTheme()
    const handleGoogle = () => {
        googleSignUp()
    }
    const handleFb = () => {
        FbSignUp()
    }
    const handleSubmit = (event) => {
        event.preventDefault()


        const form =event.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const email = form.email.value;
        const pass = form.password.value;
        const confirmPass = form.confirmPassword.value;
        // console.log(firstName,lastName,email,pass, confirmPass)

        if(pass !== confirmPass){
            alert('password didnt match')
            return;
        }

        createUser(email,pass)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
            form.reset()
        })
        .catch(error => console.log(error.message))
    }
    return (

        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />

                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar className='d-flex justify-content-center' sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <FaLock />
                    </Avatar>

                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="family-name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="confirmPassword"
                                    label="Confirm Password"
                                    type="password"
                                    id="confirmPassword"
                                    autoComplete="new-password"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                                    label="Accept all our terms & conditions"
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                        <div className='btn'>
                            <button onClick={handleFb}>Continue With Facebook</button>
                            <button onClick={handleGoogle}>Continue With Google</button>
                        </div>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link to="/login" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>

    );
};

export default Register;