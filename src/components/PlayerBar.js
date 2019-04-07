import React, { Component } from 'react';

class PlayerBar extends Component {
  render() {
    return (
      <section className="player-bar">
        <section id="buttons">
          <button id="previous">
            <span><i className="icon ion-md-skip-backward"></i></span>
          </button>
          <button id="play-pause">
            <span className={this.props.isPlaying ? 'icon ion-md-pause' : 'icon ion-md-play' }></span>
          </button>
          <button id="next">
            <span><i class="icon ion-md-skip-forward"></i></span>
          </button>
        </section>
        <section id="time-control">
          <div className="current-time">–:––</div>
          <input type="range" className="seek-bar" value="0" />
        </section>
        <section id="volume-control">
          <div><i className="icon ion-md-volume-low"></i></div>
          <input type="range" className="seek-bar" value="80" />
          <div><i className="icon ion-md-volume-high"></i></div>
        </section>
      </section>
    );
  }
}

export default PlayerBar;
