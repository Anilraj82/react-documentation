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
import {ListAndKeys} from "./components/ListAndKeys";
import {Forms} from "./components/Forms";
import {LiftingStateUp} from "./components/LifitngStateUp";
import {CompositionVsInheritance} from "./components/CompositionVsInheritance";



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
                    <Route exact path='/listandkeys' component={ListAndKeys}/>
                    <Route exact path='/forms' component={Forms}/>
                    <Route exact path='/liftingstateup' component={LiftingStateUp}/>
                    <Route exact path='/compositionvsinheritance' component={CompositionVsInheritance}/>
                </Switch>
            </div>
        </BrowserRouter>
    ),
    document.getElementById('root')
);