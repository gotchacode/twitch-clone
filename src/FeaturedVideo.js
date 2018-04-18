import React , {Component} from 'react';
import video from './small.mp4';
import './FeaturedVideo.css';
import YouTube from './YouTube';


export default class FeaturedVideo extends  Component {
  render() {
    debugger;
    return(
        <div className="row">
          <div className="col-md-8">
            <YouTube video={this.props.video} height="315" width="560" />
          </div>
          <div className="col-md-4">
            <h1>Featured Video</h1>
          </div>
        </div>
    )
  }
}
