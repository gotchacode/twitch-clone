import React , {Component, Fragment} from 'react';
import video from './small.mp4';
import './FeaturedVideo.css';

export default class FeaturedVideo extends  Component {
  constructor(props) {
    super(props);
    this.state = {
      videoURL: video,
    };
  }

  render() {
    return(
      <div className="container videoContainer">
        <div className="row">
          <div className="col-md-8">
            <video className="featuredVideo" src={this.state.videoURL} autoPlay poster="" controls>
              Sorry, your browser doesn't support embedded videos,
              but don't worry, you can <a href="videofile.webm">download it</a>
              and watch it with your favorite video player!
            </video>
          </div>
          <div className="col-md-4">
            <h1>some custom text</h1>
          </div>
        </div>
      </div>
    )
  }
}