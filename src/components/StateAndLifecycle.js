import React from "react";

let num = 1;
export class StateAndLifecycle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        }
    }

    componentDidMount() {
        this.timerID = setInterval( () => this.tick(), 1000 );
        setTimeout(() => this.componentWillUnmount(), 10000);
    }

    componentWillUnmount() {
        console.log('The component will unmount now');
        clearInterval(this.timerID);
    }


    tick() {
        num+=1;
        console.log('Mounted number is', num);

        this.setState({
            date: new Date()
        });
    }

    render(){
        let date = this.state.date;
        return(
            <div>
                <h1>State and Lifecycle</h1>
                <h2>It is {date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}