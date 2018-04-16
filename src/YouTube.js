import React, {Component, Fragment} from 'react';


export default class YouTube extends Component {
  render() {
    const video = this.props.video;
    const url = `https://www.youtube.com/embed/${video}`;
    return(
      <div className="youtube col-md-3">
        <iframe width="280" height="158" src={url} 
      frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
      </div>
    )
  }
}
