import React, { Component } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import './SignIn.css';
import { Storefront } from '@material-ui/icons';

class SignIn extends Component {
    state = {
        name: '',
    };

    handleSubmit = event => {
        event.preventDefault();
        const user = {
            name: this.state.name
        }
        axios.post('https://jsonplaceholder.typicode.com/users', { user })
            .then(res => {
                console.log(res);
                console.log(res.data);
                //  window.location = "/retrieve" //This line of code will redirect you once the submission is succeed
            })
    }
    handleChange = event => {
        this.setState({ name: event.target.value });
    }

    render() {
        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className="paper">
                    <div className="avatar">
                        <Avatar >
                            <Storefront />
                        </Avatar>
                    </div>
                    <Typography component="h1" variant="h5">
                        Sign in
          </Typography>
                    <form className="form" noValidate onSubmit={this.handleSubmit}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className="submit"
                        >
                            Sign In
            </Button>
                        <Grid container
                            spacing={0}
                            direction="column"
                            alignItems="center"  style={{ marginTop: '10vh' }} >
                            <Grid item>
                                <Link color="inherit"  to="/signUp" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
        );
    }
}
export default SignIn;