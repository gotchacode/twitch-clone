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
      FeaturedVideoID: null,
    };

    this.videoSearch('eminem')
  }

  videoSearch(keyword) {
    YTSearch({key: API_KEY, term: keyword}, (video) => {
      let videoIDs = [];
      video = video.slice(0, 4);
      video.forEach((video, key) => {
        videoIDs.push(video.id.videoId)
      });
      this.setState({
        videos: videoIDs,
        FeaturedVideoID: video[0].id.videoId
      });
    });
  }


  render() {
    return (
      <Fragment>
        <NavBar/>
        <div className="container videoContainer">
          <FeaturedVideo videoID={this.state.FeaturedVideoID}/>
          <YouTubeStrip videos={this.state.videos} />
        </div>
      </Fragment>

    );
  }
}

export default App;


