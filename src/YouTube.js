import React, {Component} from 'react';


export default class YouTube extends Component {
  render() {
    const video = this.props.video;
    let height = this.props.height;
    let width = this.props.width;
    if (height === undefined && width === undefined) {
      height = 159;
      width = 280;
    }
    const url = `https://www.youtube.com/embed/${video}`;
    return(
      <div className="youtube col-md-3">
        <iframe width={width} height={height} src={url} title={video}
      frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
      </div>
    )
  }
}
