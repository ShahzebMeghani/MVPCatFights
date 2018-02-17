import React from 'react';

class Vote extends React.Component {
  constructor(props) {
    super(props);


  }

  render() {
    return(
        <div>
          <div>Current Votes: {this.props.votes}</div> <br />
          <button onClick={this.props.handleClick}>Click to vote</button>

        </div>
    )
  }

}
export default Vote;