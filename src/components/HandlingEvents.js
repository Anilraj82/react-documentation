import React from "react";
import { Button } from "react-materialize";


export class HandelingEvents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true
        };
    }

    handleClick = () => {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
        console.log('This is:', this);
    };

    render() {
        let toggle = this.state.isToggleOn;
        return (
            <div>
                <h1>Handling Events</h1>
                <Button onClick={this.handleClick}>
                    { toggle ? 'ON' : 'OFF'}
                </Button>
            </div>
        );
    }
}