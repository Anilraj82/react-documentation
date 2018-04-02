import React from 'react';
import { Button } from "react-materialize";


export class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        }
    }

    handleLoginClick = () => {
        this.setState({ isLoggedIn: true });
    }

    handleLogoutClick = () => {
        this.setState({ isLoggedIn:false });
    }

    render(){
        const isLoggedIn = this.state.isLoggedIn;
        const button = isLoggedIn ? (<LogoutButton a={this.handleLogoutClick}/>) : (<LoginButton b={this.handleLoginClick} />);
        return(
            <div>
                <b>
                    The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
                </b>
                <Greeting isLoggedIn={isLoggedIn} /> {button}
                <Mailbox myMessages={messages}/>
            </div>
        )
    }
}

let Greeting = (props) => {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <h1>Welcome back!</h1>;
    }
    return <h1>Please sign up.</h1>;
}

let LogoutButton = (props) => {
    return (
        <Button color="red" onClick={props.a}> Logout </Button>
        );
}

let LoginButton = (props) => {
    return (
        <Button onClick={props.b}> Login </Button>
    );
}


const messages = ['React', 'Re: React', 'Re:Re: React'];


let Mailbox = (props) => {
    const myMessages = props.myMessages;
    return (
        <div>
            <h1>Hello</h1>
            { myMessages.length > 0 &&
                <h2>
                    You have {myMessages.length} unread meaasge.
                </h2>
            }
        </div>
    );
}

