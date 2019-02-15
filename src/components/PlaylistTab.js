import React, { Component } from 'react';
import Playlist from './Playlist/Playlist';

class PlaylistTab extends Component {
    render() {
        let playlistsToRender =
        this.props.state.playlists
          ? this.props.state.playlists.filter(playlist => {
            let matchesPlaylist = playlist.name.toLowerCase().includes(
              this.props.state.filterString.toLowerCase());
            return matchesPlaylist;
          }) : [];
        return(
          <div>
            {this.props.state.tab === "PlaylistTab" &&
              <div>
                  {playlistsToRender.map(playlist => <Playlist playlist={playlist}/>)}
              </div>
            }
          </div>
        );
    }
}
export default PlaylistTab;