import React from "react";
import { Button } from "react-materialize";

export class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showWarning: true
        }
        this.handleToggleClick = this.handleToggleClick.bind(this);

    }
    handleToggleClick(){
        this.setState(prevState => ({
            showWarning: !prevState.showWarning
        }));
    }

    render() {
        const numbers = [5, 10, 15, 20, 25];
        const listItems = numbers.map((number, index) =>
            <li key={index}>
                {number}
                {console.log(number, index)}
            </li>
        );

        return (
            <div>
                <ul>{listItems}</ul>

                <WarningBanner warn={this.state.showWarning} />
                <Button onClick={this.handleToggleClick}>
                    {this.state.showWarning ? 'Hide' : 'Show'}
                </Button>
            </div>
        )
    }
}

function WarningBanner(props) {
    if (!props.warn) {
        return null;
    }

    return (
        <div>
            Warning!
        </div>
    );
}
