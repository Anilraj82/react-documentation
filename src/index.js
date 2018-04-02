import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import {Header} from "./components/Header";
import {HelloWorld} from "./components/HelloWorld";
import {IntroToJSX} from "./components/IntroToJSX";
import {RenderingElements} from "./components/RenderingElement";
import {ComponentsAndProps} from "./components/ComponentsAndProps";
import {StateAndLifecycle} from "./components/StateAndLifecycle";
import {HandelingEvents} from "./components/HandlingEvents";
import {ConditionalRendering} from "./components/ConditionalRendering";


ReactDOM.render(
    (
        <BrowserRouter>
            <div>
                <Header/>
                <Switch>
                    <Route exact path='/' component={App} />
                    <Route exact path='/helloworld' component={HelloWorld} />
                    <Route exact path='/introtojsx' component={IntroToJSX} />
                    <Route exact path='/renderingelements' component={RenderingElements} />
                    <Route exact path='/componentsandprops' component={ComponentsAndProps} />
                    <Route exact path='/stateandlifecycle' component={StateAndLifecycle}/>
                    <Route exact path='/handelingevents' component={HandelingEvents}/>
                    <Route exact path='/conditionalrendering' component={ConditionalRendering}/>


                </Switch>
            </div>
        </BrowserRouter>
    ),
    document.getElementById('root')
);