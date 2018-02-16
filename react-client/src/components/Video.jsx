import React from 'react';

class Video extends React.Component {
  constructor(props) {
    super(props);


  }

render() {
  return(
      <div>
        {props.video.url} <br />
        {props.video.votes} <br />
        <button onClick={this.props.handleClick}>Click to vote</button>
      </div>
  )
}

}
export default Video;