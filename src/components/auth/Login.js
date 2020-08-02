import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Grid, Button } from 'semantic-ui-react';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // handle changes as user input values into form input fields
    handleChange(event) {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const userData = {
            username: this.state.username,
            password: this.state.password
        }
        console.log(userData);
    }

    render() {
        return (
            <Grid>
                <Grid.Column width={6} className="centered">
                    <div className="authForm">
                        <h1>To-Do List <i className="check circle icon"></i></h1>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Field>
                                <label>Email</label>
                                <input 
                                    type="email"
                                    name="email"
                                    value={this.state.email}
                                    placeholder="Email"
                                    onChange={this.handleChange}
                                />
                            </Form.Field>
                            <Form.Field>
                                <label>Password</label>
                                <input 
                                    type="password"
                                    name="password"
                                    value={this.state.password}
                                    placeholder="Password"
                                    onChange={this.handleChange}
                                />
                            </Form.Field>
                            <Grid.Column width={10} className="ui center">   
                                <Button className="authButton" color="teal">Login</Button>
                                <h4>Don't Have an Account?</h4>
                                <Button as={Link} color="teal" className="authLink" to="/register">Create An Account</Button>
                            </Grid.Column>
                        </Form>
                    </div>
                </Grid.Column>
            </Grid>
            
        );
    }
}
export default Login;