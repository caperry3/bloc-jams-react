import React, { Component } from 'react';
import albumData from './../data/albums';
import PlayerBar from './PlayerBar.js';

class Album extends Component {
  constructor(props) {
    super(props);

  const album = albumData.find( album => {
    return album.slug === this.props.match.params.slug
  });

  this.state = {
    album: album,
    currentSong: album.songs[0],
    isPlaying: false,
    isHovering: false,
  };

  this.audioElement = document.createElement('audio');
  this.audioElement.src = album.songs[0].audioSrc;
}

  play() {
    this.audioElement.play();
    this.setState({ isPlaying: true });
  }

  pause() {
    this.audioElement.pause();
    this.setState({ isPlaying: false });
  }

  setSong(song) {
    this.audioElement.src = song.audioSrc;
    this.setState({ currentSong: song });
  }

  handleSongClick(song) {
    const isSameSong = this.state.currentSong === song;
    if (this.state.isPlaying && isSameSong) {
      this.pause();
    } else {
      if (!isSameSong) { this.setSong(song); }
      this.play();
    }
  }

  onMouseEnter(song) {
    this.setState({ isHovering: song })
  }

  onMouseLeave() {
    this.setState({ isHovering: false})
  }

  playPauseOrNumber(song, index) {
    const isHoveringSameSong = this.state.isHovering === song;
    const currentSong = this.state.currentSong;
    if (isHoveringSameSong) {
      if (this.state.isPlaying && this.state.currentSong === song) {
        return <span><i className="icon ion-md-pause"></i></span>
      } else {
        return <span><i className="icon ion-md-play"></i></span>
      }
    } else {
        if (this.state.isPlaying && this.state.currentSong === song) {
          return <span><i className="icon ion-md-pause"></i></span>
        } else if (currentSong === song && !this.state.isPlaying) {
          return <span><i className="icon ion-md-play"></i></span>
        } else {
          return <span>{ index + 1 }</span>
        }
    }
    //draw out logic and think of ways to simplify^^^
    /*
    option 1: song is what is currently hovered
      -is this song currently playing -> show pause icon
      -if song is not currently playing -> show play icon
    option 2: song is not what is currently hovered
      -if this song is playing -> show pause icon
      -if this is current song but song is paused -> show play button
      -else -> show number
    */
  }

  render() {
    return (
      <section className="album">
        <section id="album-info">
          <img id="album-cover-art" src={this.state.album.albumCover} alt={this.state.album.title}/>
          <div className="album-details">
            <h1 id="album-title">{this.state.album.title}</h1>
            <h2 className="artist">{this.state.album.artist}</h2>
            <div id="release-info">{this.state.album.releaseInfo}</div>
          </div>
        </section>
        <table id="song-list">
          <colgroup>
            <col id="song-number-column" />
            <col id="song-title-column" />
            <col id="song-duration-column" />
          </colgroup>
          <tbody>
            {
              this.state.album.songs.map( (song, index) =>
                  <tr className="song" key={index} onClick={() => this.handleSongClick(song)} >
                    <td id="number" onMouseEnter={() => this.onMouseEnter(song)} onMouseLeave={() => this.onMouseLeave()} >{ this.playPauseOrNumber(song, index) }</td>
                    <td id="title">{song.title}</td>
                    <td id="duration">{song.duration}</td>
                  </tr>
              )
            }
          </tbody>
        </table>
        <PlayerBar isPlaying={this.state.isPlaying} currentSong={this.state.currentSong} />
      </section>
    );
  }
}

export default Album;
