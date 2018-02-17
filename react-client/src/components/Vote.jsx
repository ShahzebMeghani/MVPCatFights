import React from 'react';

class Vote extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   votes: this.props.votes
   // }
    this.sendUpVote = this.sendUpVote.bind(this);
  }

  sendUpVote(e) {
    e.preventDefault();
    console.log('clicked');
    this.props.voteUp(this.props.video);
  }

  render() {
    return(
        <div>
          <div>Current Votes: {this.props.votes}</div> <br />
          <button onClick={this.sendUpVote}>Click to vote</button>

        </div>
    )
  }

}
export default Vote;