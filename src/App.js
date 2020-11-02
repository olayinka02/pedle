import React, { Component } from 'react';

import Nav from './Nav';
import BodyOne from './BodyOne';
//import MydModalWithGrid from './MydModalWithGrid';



import {BrowserRouter, Route} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div>
        <header style={{backgroundColor:'black',}} role="banner" class="NavMain-Banner-module--cls2--Kiz5E NavMain-Banner-module--cls1--2T6rT text-light justify-content-center navbar navbar-expand navbar-dark">
        <iframe src="https://player.vimeo.com/video/60742256" width="600" height="340" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
         
      
        </header>
        <Nav style={{position:'relative',}} />
        <BodyOne />


       
        
      
        
      <BrowserRouter>
      <Route>
      <Route path='/' exact component={""}/>
      </Route>
      </BrowserRouter>

      </div>
    );
  }
}

export default App;


