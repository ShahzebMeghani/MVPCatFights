import React from 'react';

class Video extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

render() {
    let embed = 'https://www.youtube.com/embed/' + this.props.video + '?autoplay=0';
  return(
      <div>
        <iframe src={embed}></iframe> <br />
      </div>
  )
}

}
export default Video;