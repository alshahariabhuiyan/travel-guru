import { Avatar, Box, Button, Checkbox, Container, CssBaseline, FormControlLabel, Grid, TextField, ThemeProvider, Typography, createTheme } from '@mui/material';
import React, { useContext } from 'react';
import { FaLock } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';


const Login = () => {
  const navigate = useNavigate();
  const { Signin, user } = useContext(AuthContext)
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'


  const defaultTheme = createTheme()
  const handleSubmit = (event) => {
    event.preventDefault()

    const form = event.target;
    const email = form.email.value;
    const pass = form.password.value;


    Signin(email, pass)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser)

        navigate(from, { replace: true })
      })
      .catch(error => console.log(error))
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
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <FaLock />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to="" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to="/login/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Login;