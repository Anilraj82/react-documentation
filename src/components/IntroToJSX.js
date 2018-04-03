import React from "react";

export class IntroToJSX extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            user: {
                firstName: 'Harper',
                lastName: 'Perez'
            }
        };
    }

    render(){
        let user = this.state.user;

        return(
            <div className="container">
                <h1> Hello {formatName(user)} </h1>
                <fieldset>
                    <legend> <h3>When nothing is passed in the function renders </h3> </legend>
                    {getGreeting()}
                </fieldset>
                <fieldset>
                    <legend> <h3>When <b>USER</b> is passed in the function renders </h3> </legend>
                    {getGreeting(user)}
                </fieldset>

            </div>
        )
    }
}


function formatName(something) {
    return something.firstName + ' ' + something.lastName;
}

function getGreeting(user) {
    if (user) {
        return (
            <span>
                <h2 style={{color:'green'}}>Hello, {formatName(user)}!</h2>
                <h2>Good to see you here.</h2>
            </span>
            )
    }
    return <h2 style={{color:'red'}}>Hello, Stranger.</h2>;
}