import React, {Component, Fragment} from 'react';
import './App.css';
import NavBar from './Navbar';
import FeaturedVideo from './FeaturedVideo';
import YouTubeStrip from './YouTubeStrip';

class App extends Component {
  render() {
    const videos = [
      '9_UyvGIeXW0',
      'DHLRj1LaPiQ',
      'NxFkEj7KPC0',
      'HUmX6CiMoFk',
    ];

    return (
      <Fragment>
        <NavBar/>
        <div className="container videoContainer">
          <FeaturedVideo/>
          <YouTubeStrip videos={videos} />
        </div>
      </Fragment>

    );
  }
}

export default App;


