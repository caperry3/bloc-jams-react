import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import albumData from './../data/albums';
import './styling/library.css';


class Library extends Component {
  constructor(props) {
    super(props);
    this.state = {albums: albumData };
  }

  render() {
    return (
      <section className='library'>
      <header>
        <h1>M U S E K</h1>
      </header>
        {
          this.state.albums.map( (album, index) =>
            <Link to={`/album/${album.slug}`} key={index}>
              <img src={album.albumCover} alt={album.title} className="album-cover"/>
              <div className="album-info">{album.title}</div>
              <div className="album-info">{album.artist}</div>
              <div className="album-info">{album.songs.length} songs</div>
            </Link>
          )
        }
      </section>
    );
  }
}

export default Library;
