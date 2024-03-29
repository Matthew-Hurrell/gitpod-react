import React from "react";

class StatefulGreetingWithCallback extends React.Component {

    // Always make constructors like this
    constructor(props) {
        super(props);
        this.state = {
            introduction: "Hello",
            buttonText: "Exit",
        };
    }

    handleClick() {
        // Asyncronous
        this.setState(
            {
            introduction: "Goodbye!",
            buttonText: "Enter",
            }, 
            () => {
                // Callback function (executes after)
            }
        );
    }

    render() {
        return (
            <div>
                <h1>{this.state.introduction} {this.props.name} {this.props.greeting}</h1>
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
            </div>
        ) 
    }
}

export default StatefulGreetingWithCallback;