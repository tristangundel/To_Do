import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Grid, Button } from 'semantic-ui-react';

class Register extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            name: "",
            password: "",
            confirmPass: ""
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
        const newUser = {
            email: this.state.email,
            name: this.state.name,
            password: this.state.password
        }
        console.log(newUser);
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
                        <label>Name</label>
                        <input 
                            type="text"
                            name="name"
                            value={this.state.name}
                            placeholder="Name"
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
                    <Form.Field>
                        <label>Confirm Password</label>
                        <input 
                            type="password"
                            name="confirmPass"
                            value={this.state.confirmPass}
                            placeholder="Confirm Password"
                            onChange={this.handleChange}
                        />
                    </Form.Field>
                    <Grid.Column width={10} className="ui center">   
                                <Button className="authButton" color="black">Create Account</Button>
                                <h4>Already Have an Account?  <Link to="/login">Login Here</Link></h4>
                            </Grid.Column>
                        </Form>
                    </div>
                </Grid.Column>
            </Grid>
        );
    }
}

export default Register;