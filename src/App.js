import React, {Component, Fragment} from 'react';
import './App.css';
import NavBar from './Navbar';
import FeaturedVideo from './FeaturedVideo';

class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar/>
        <FeaturedVideo/>
      </Fragment>

    );
  }
}

export default App;


