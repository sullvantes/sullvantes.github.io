import React, {Component} from "react";

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 1
        };
    }

    // called automatically by React
    componentDidMount() {
        console.log("Component rendered (first time)")
    }

    handleClick(event) {
        this.setState({counter: this.state.counter + 1});
    }

    render() {
        // React returns "JSX" (outside of the scope of this course)
        return <button onClick={this.handleClick.bind(this)}>Add 1</button>;
    }
}