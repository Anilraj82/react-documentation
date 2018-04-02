import React from 'react';
import { Button } from "react-materialize";
import {LoginControl} from "./components/LoginControl";
import {Page} from "./components/Page";
import {Calculator} from "./components/Calculator";
import {HelloWorld} from "./components/HelloWorld";

let num = 1;

export default class App extends React.Component {
    // add a constructor to the class to initialize the state
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            isToggleOn: false
        }
        console.log(process.env.REACT_APP_MOVIE_API);
        this.handelClick = this.handelClick.bind(this);
    }

    componentDidMount() {
        console.log("I am 3");
        this.timerID = setInterval( () => this.tick(), 1000 );
        setTimeout(() => this.componentWillUnmount(), 3000);

    }

    componentWillUnmount() {
        console.log('The component will unmount now');
        document.getElementById('h2').innerHTML = '';
        clearInterval(this.timerID);
    }


    tick() {
        console.log("I am 4");
        console.log('Mounted numb is', num);
        this.setState({ date: new Date() });
        num+=1;
    }

    handelClick(){
        this.setState((state)  => ({ isToggleOn: !state.isToggleOn}))
        //this.setState({isToggleOn: !this.state.isToggleOn});
        console.log("This is the value of is toggle", this.state.isToggleOn);

    }


    render() {

        return (
            <div>
                <HelloWorld/>
                <Button onClick={this.handelClick}> {this.state.isToggleOn ? 'ON' : 'OFF'} </Button>
                <hr/>
                <LoginControl/>
                <hr/>
                <h2 id="h2">It is {this.state.date.toLocaleTimeString()}</h2>
                <Buutton whenUserClicks={() => console.log('I am clicked')} />
                <hr/>
                <Page />

                <hr/>
                <Calculator/>
            </div>
        );
    }
}


function Buutton(props){
    return(
        <div>
            <Button onClick={props.whenUserClicks}>Sign Up</Button>
        </div>
    )
}
