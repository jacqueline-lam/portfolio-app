import React, { Component } from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import 'bootswatch/dist/litera/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import ProjectsContainer from './containers/ProjectsContainer';
import BlogPostsContainer from './containers/BlogPostsContainer'

class App extends Component {
  render() {
    return (
      <div className='App' id='page-top' >
        <NavBar />
        <Contact />
        <Switch>
          {/* only first child <Route> that matches the location gets rendered */}
          {/* When URL matches specified path, render component */}
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/projects/:projectId' component={Project} />
          <Route path='/projects' component={ProjectsContainer} />
          <Route path='/blog' component={BlogPostsContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
