import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import $ from 'jquery';
import Video from './components/Video.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      video1: {
        url: '',
        votes: 0,
        hasBeenVoted: false
      },
      video2: {
        url: '',
        votes: 0,
        hasBeenVoted: false
      },

      votingRoundTimeLeft: 0
    };

    this.voteUp = this.voteUp.bind(this);

  }

  voteUp(url) {
    if(this.state.video1.hasBeenVoted === true || this.state.video2.hasBeenVoted === true) {
      alert('Can only vote once!');
    } else {
      //if urls match then send out post request updating the count
      if(this.state.video1.url === url) {

      } else if(this.state.video2.url === url){

      }
    }
  }

  componentDidMount() {
    axios.get('/videos')
        .then(function (res) {
          console.log(res);
        })
        .catch(function (err) {
          console.log('err', err);
    });
  }

  render () {
    return (<div>
      <h1>Cat Fight!</h1>
      <Video video={this.state.video1} voteUp={this.voteUp}/>
      <Video video={this.state.video2} voteUp={this.voteUp}/>
      {/*Make timer component*/}
      {/*{this.state.votingRoundTimeLeft}*/}
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));