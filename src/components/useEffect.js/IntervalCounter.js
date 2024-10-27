import React, { Component } from 'react';

class IntervalCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.setState(prevState => ({ count: prevState.count + 1 }));
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId); // Clear the interval when the component unmounts
    }

    render() {
        return (
            <div>
                <h1>Counter: {this.state.count}</h1>
            </div>
        );
    }
}

export default IntervalCounter;
