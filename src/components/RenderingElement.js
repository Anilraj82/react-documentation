import React from "react";

export class RenderingElements extends React.Component {
    render(){
        console.log("I am 1")
        return(
            <Tick />
        )
    }
}


function Tick() {
    console.log("I am 2")

    return (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}</h2>
            <i>Have a look at commented setInterval section</i>
        </div>
    )
}

//nterval(() => {console.log('running tick'); Tick();}, 10000);