import React, { Component } from 'react';
import { Input, Menu, Segment } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';


class NavBar extends Component {
    constructor() {
        super();
        this.state = {activeItem: 'Home'};
        this.handleClick = this.handleClick.bind(this);
    }

    state = {activeItem: 'Home' };

    handleClick(event) {
        event.persist();
        event.preventDefault();
        console.log(event);
        this.setState({activeItem: event.target.name})
    }

    render() {
        return(
            <div className="navigation">
                <Menu inverted pointing >
                    <div id="nav-brand">
                        <h2>To-Do List <i className="check circle icon"></i></h2>
                    </div>
                    <Menu.Item
                        as={NavLink}
                        exact to="./"
                        content="Home"
                    />
                    <Menu.Item
                        as={NavLink}
                        exact to="./new"
                        content="Add New"
                    />
                    <Menu.Item
                        as={NavLink}
                        exact to="./completed"
                        content="Completed"
                    />
                    <Menu.Menu position='right'>
                        <Menu.Item
                           as={NavLink}
                           exact to="./login"
                           content="Login"
                        />
                    </Menu.Menu>
                </Menu>
            </div>
        );
    };
}

export default NavBar;