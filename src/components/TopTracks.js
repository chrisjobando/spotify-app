import React, { Component } from 'react';
import Track from './Track';
import '../styling/TopTab.sass';

class TopTracks extends Component {
  componentDidMount() {
    window.scrollTo(0,0);
    this.props.state.filterString = '';
  }

  render() {
    let tracksToRender =
    this.props.state.tracks
      ? this.props.state.tracks.filter(track => {
        let matchesArtist = track.artists[0].name.toLowerCase().includes(
          this.props.state.filterString.toLowerCase());
        return matchesArtist;
      }) : [];
    return(
      <div>
        {tracksToRender.map((track, index) =><Track current={this.props.state.current} post={track} index={index}/>)}
      </div>
    );
  }
}
export default TopTracks;