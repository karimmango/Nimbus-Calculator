import React, {Component} from "react";

class SimpleTextArea extends Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            value:"0"
        };
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        console.log(event.target.value);
    }
    render() {
        return (
            <div>
                <label>Enter value : </label>
                <input type="textarea"
                       name="textValue"
                       onChange={this.handleChange}
                />
            </div>
        );
    }
}
export default SimpleTextArea