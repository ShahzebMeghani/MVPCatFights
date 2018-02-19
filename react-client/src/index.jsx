import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import $ from 'jquery';
import Video from './components/Video.jsx';
import Vote from './components/Vote.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      video1: '',
      video1votes: 0,
      video2: '',
      video2votes: 0,
      hasBeenVoted: false,
      lastWinner: ''
      // votingRoundTimeLeft: 0 //implement later
    };

    this.voteUp = this.voteUp.bind(this);

  }

  //implement function to get videos from server
  fetchVideos() {

  }



  voteUp(id) {
    // e.preventDefault();
    if(this.state.hasBeenVoted) {
      alert('Can only vote once!');
    } else {
      //if urls match then send out post request updating the count
      if(this.state.video1 === id) {
        this.setState({
          video1votes: this.state.video1votes + 1,
          hasBeenVoted: true
        })
      } else if(this.state.video2 === id){
        this.setState({
          video2votes: this.state.video2votes + 1,
          hasBeenVoted: true
        })
      }
      //finish post
      axios.post('http://127.0.0.1:3000/vote', {
        id: id
      })
      .then( (response) => {
        console.log('response ', response);
        this.setState({
          video1votes: response.data.video1.votes,
          video2votes: response.data.video2.votes
        })
      })
      .catch( (err) => {
        console.log('err', err)
      });
    }
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:3000/videos')
        .then( (res) => {
          this.setState({
            video1: res.data.video1.id,
            video2: res.data.video2.id,
            video1votes: res.data.video1.votes,
            video2votes: res.data.video2.votes,
            lastWinner: res.data.lastWinner
          });

        })
        .catch(function (err) {
          console.log('err', err);
    });
  }

  render () {
    return (<div>
      <h1>Cat Fight!</h1>
      <Video video={this.state.video1}/>
      <Vote voteUp={this.voteUp} video={this.state.video1} votes={this.state.video1votes} />
      <Video video={this.state.video2} />
      <Vote voteUp={this.voteUp} video={this.state.video2} votes={this.state.video2votes} />
      <h3>Last Winner</h3>
      <Video video={this.state.lastWinner} />
      {/*Make timer component*/}
      {/*{this.state.votingRoundTimeLeft}*/}
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));