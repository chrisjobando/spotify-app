import React, { Component } from 'react';
import Artist from './Artist';
import '../styling/TopTab.sass';

class TopTab extends Component {
  render() {
    let artistsToRender =
    this.props.state.artists
      ? this.props.state.artists.filter(artist => {
        let matchesArtist = artist.name.toLowerCase().includes(
          this.props.state.filterString.toLowerCase());
        return matchesArtist;
    }) : [];
    return(
      <div>
        {artistsToRender.map((artist, index) => <Artist post={artist} index={index}/>)}
      </div>
    );
  }
}
export default TopTab;