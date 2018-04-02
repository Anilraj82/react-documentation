import React from "react";
import {Navbar, NavItem } from "react-materialize";

export class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
          value: null
        };
    }

    render(){
        return(
            <div>
                <Navbar className='App' brand='REACT' right>
                    <NavItem href='/helloworld'>HelloWorld</NavItem>
                    <NavItem href='/introtojsx'>IntroToJSX</NavItem>
                    <NavItem href='/renderingelements'>Rendering Elements</NavItem>
                    <NavItem href='/componentsandprops'>ComponentsAndProps</NavItem>
                    <NavItem href='/stateandlifecycle'>StateAndLifecycle</NavItem>
                    <NavItem href='/handelingevents'>HandelingEvents</NavItem>
                    <NavItem href='/conditionalrendering'>ConditionalRendering</NavItem>

                </Navbar>
            </div>
        )
    }
}


