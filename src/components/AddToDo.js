import React, { Component } from "react";
import { connect } from "react-redux";
import { addToDo } from "../redux/actions";

class AddToDo extends Component {
    constructor(props) {
        super(props);
        this.state = { input: "" };
    }

    updateInput = (input) => {
        this.setState({ input });
    };

    handleAddToDo = () => {
        console.log(this.state.input);
        this.props.addToDo(this.state.input);
        this.setState({ input: "" });
    };

    render() {
        return (
            <div>
                <input 
                    type="text"
                    value={this.state.input}
                    onChange={e => this.updateInput(e.target.value)}
                />
                <button className="add-todo" onClick={this.handleAddToDo}>
                    Add ToDo
                </button>
            </div>
        );
    }
}

export default connect(null, { addToDo })(AddToDo);