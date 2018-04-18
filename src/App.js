import React, {Component, Fragment} from 'react';
import YTSearch from 'youtube-api-search';
import './App.css';
import NavBar from './Navbar';
import FeaturedVideo from './FeaturedVideo';
import YouTubeStrip from './YouTubeStrip';
const API_KEY = 'AIzaSyCGe7jAKrhWzTW7joAckoXuScexU9ikORU';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      FeaturedVideo: null,
    };

    this.videoSearch('eminem')
  }

  videoSearch(keyword) {
    YTSearch({key: API_KEY, term: keyword}, (video) => {
      let videoIDs = [];
      video = video.slice(0, 4);
      video.forEach((video, key) => {
        videoIDs.push(video)
      });
      this.setState({
        videos: videoIDs,
        FeaturedVideo: videoIDs[0],
        // FeaturedVideoID: video[0].id.videoId
      });
    });
  }


  render() {
    return (
      <Fragment>
        <NavBar/>
        <div className="container videoContainer">
          { this.state.FeaturedVideo && <FeaturedVideo video={this.state.FeaturedVideo}/> }
          <YouTubeStrip videos={this.state.videos} />
        </div>
      </Fragment>

    );
  }
}

export default App;


