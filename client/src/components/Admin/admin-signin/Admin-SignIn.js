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
import { Storefront } from '@material-ui/icons';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUserRequest } from "../../../utilities/authActions";
import classnames from "classnames";

class AdminSignIn extends Component {
    state = {
        email: '',
        password: ''
        ,
        errors: {}
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push("/dashboard");  
        }

        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        const user = {
            email: this.state.name,
            password: this.state.password
        }

        this.props.loginUserRequest(user);
    }

    handleChange = event => {
        this.setState({ [event.target.id]: event.target.value });
    }

    render() {
        const { errors } = this.state;
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
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            className={classnames("", {
                                invalid: errors.email || errors.emailnotfound
                            })}
                        />
                        <span className="error-text">
                            {errors.email}
                            {errors.emailnotfound}
                        </span>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={this.state.password}
                            onChange={this.handleChange}
                            className={classnames("", {
                                invalid: errors.password || errors.passwordincorrect
                            })}
                        />
                        <span className="error-text">
                            {errors.password}
                            {errors.passwordincorrect}
                        </span>
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
                            alignItems="center" style={{ marginTop: '10vh' }} >
                            <Grid item>
                                <Link color="inherit" to="/signUp" variant="body2">
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

AdminSignIn.propTypes = {
    loggedUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { loginUserRequest }
)(AdminSignIn);