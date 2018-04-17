import React, {Component} from 'react';
import YouTube from './YouTube';

export default class YouTubeStrip extends Component {
  render() {
    return (
      <div className="row">
        {this.props.videos.map((video, key) => (
          <YouTube video={video} key={key} />
        ))}
      </div>
    );
  }
}
