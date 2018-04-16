import React, {Component, Fragment} from 'react';
import YouTube from './YouTube';

export default class YouTubeStrip extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let videoContainer = null;
    if (this.props.videos !== null) {
      videoContainer = [];
      this.props.videos.forEach( (video, key) => {
        videoContainer.push(<YouTube video={video} key={key} />)
      });

    }
    return (
      <div class="row">
        {videoContainer}
      </div>
    )
  }
}
