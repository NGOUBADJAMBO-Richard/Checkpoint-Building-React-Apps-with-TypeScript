import React, { Component } from 'react';

// Define an interface for the state
interface CounterState {
    count: number;
}

// Define an interface for the props (if there are any, here it is empty)
interface CounterProps {}

// Class component with typed state and props
class Counter extends Component<CounterProps, CounterState> {
    // Initialize state
    state: CounterState = {
        count: 0,
    };

    // Method to increment the count
    increment = () => {
        this.setState({ count: this.state.count + 1 });
    };

    // Render method to display the component
    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.increment}>Increment</button>
            </div>
        );
    }
}

export default Counter;
