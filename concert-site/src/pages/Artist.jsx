import { Link } from 'react-router-dom';
import './Artist.css';

const songs = [
  { title: 'Midnight Signal',  album: 'Echoes (2024)',       streams: '1.2B' },
  { title: 'Glass & Gold',     album: 'Neon Psalms (2022)',  streams: '987M' },
  { title: 'Softer Now',       album: 'Echoes (2024)',       streams: '834M' },
  { title: 'Burn Season',      album: 'Neon Psalms (2022)',  streams: '712M' },
  { title: 'Ultraviolet',      album: 'Debut (2020)',        streams: '601M' },
  { title: 'The Last Light',   album: 'Echoes (2024)',       streams: '520M' },
];

export default function Artist() {
  return (
    <div>
      <header className="artist-hero">
        <div className="artist-hero__inner">
          <p style={{ fontSize: '0.78rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '20px' }}>
            Headlining Artist
          </p>
          <h1 className="artist-name">Miku</h1>
          <p className="artist-tagline">"Music is the only language that needs no translation."</p>
        </div>
      </header>

      <section className="artist-section">
        <div className="artist-section__inner">
          <div className="artist-bio-grid">
            <div className="artist-avatar">
              <div className="avatar-placeholder">M</div>
            </div>
            <div className="artist-bio-text">
              <h2>About Miku</h2>
              <p>
                Miku is a multi-platinum recording artist known for blending cinematic pop with
                introspective lyricism. Born in Portland, Oregon, she began writing songs at age 14
                and released her debut EP independently before signing with Atlantic Records in 2019.
              </p>
              <p>
                Her 2022 album <em>Neon Psalms</em> debuted at #2 on the Billboard 200 and earned
                three Grammy nominations, including Album of the Year. Her most recent release,{' '}
                <em>Echoes</em>, broke streaming records in its first week and solidified her status
                as one of the defining voices of her generation.
              </p>
              <div className="artist-stats">
                <div className="stat"><span>4.2B</span><small>Streams</small></div>
                <div className="stat"><span>3</span><small>Studio Albums</small></div>
                <div className="stat"><span>12M+</span><small>Monthly Listeners</small></div>
                <div className="stat"><span>3×</span><small>Grammy Nominated</small></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="artist-section artist-section--alt">
        <div className="artist-section__inner">
          <h2>Top Songs</h2>
          <div className="songs-list">
            {songs.map((song, i) => (
              <div key={song.title} className="song-row">
                <span className="song-num">{i + 1}</span>
                <div className="song-info">
                  <strong>{song.title}</strong>
                  <span>{song.album}</span>
                </div>
                <span className="song-streams">{song.streams}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="artist-cta">
        <h2>See Miku Live</h2>
        <p>August 15, 2026 · Madison Square Garden, New York</p>
        <Link to="/tickets" className="btn-primary-gold">Get Tickets</Link>
      </div>
    </div>
  );
}
