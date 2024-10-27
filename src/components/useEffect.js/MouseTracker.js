import React, { Component } from 'react';

class MouseTracker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mouseX: 0,
            mouseY: 0,
            tracking: false,
        };
    }

    componentDidMount() {
        window.addEventListener('mousemove', this.handleMouseMove);
    }

    componentWillUnmount() {
        window.removeEventListener('mousemove', this.handleMouseMove);
    }

    handleMouseMove = (event) => {
        console.log("hasUpadte");
        if (this.state.tracking) {
            this.setState({
                mouseX: event.clientX,
                mouseY: event.clientY,
            });
        }
    };

    toggleTracking = () => {
        this.setState(prevState => ({ tracking: !prevState.tracking }));
    };

    render() {
        const { mouseX, mouseY, tracking } = this.state;

        return (
            <div>
                <button onClick={this.toggleTracking}>
                    {tracking ? 'Stop Tracking' : 'Start Tracking'}
                </button>
                <div>
                    {tracking
                        ? `Mouse Position: (${mouseX}, ${mouseY})`
                        : 'Tracking is off.'}
                </div>
            </div>
        );
    }
}

export default MouseTracker;
