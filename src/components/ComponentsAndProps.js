import React from "react";

export class ComponentsAndProps extends React.Component {
    render(){
        return(
            <div>
                <h1>Components and Props</h1>
                <Welcome name='RAJ SINGH' date = {new Date()}/>
                <NewComponent value = "5"/>
            </div>
        )
    }
}

function Welcome(props) {
    console.log('Props being passed are :', props);
    return (
        <div>
            <h1>Hello, {props.name}</h1>
            <p> Props way to render date : {props.date.toLocaleTimeString()}</p>
            <DateToday />
        </div>
    )
}

 let DateToday = (props) => {
    let num = 5;
    return <h4>Number is {num} and date today is {new Date().toLocaleDateString()}</h4>;

}

class NewComponent extends React.Component {
    render(){

        return(
            <div>
                <h1> This is new Components</h1>
                <p>The value is {this.props.value}</p>
            </div>
        )
    }
}