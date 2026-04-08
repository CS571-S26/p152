import { Link } from 'react-router-dom';
import './Artist.css';
const songs = [
  { title: 'World is Mine',      album: 'ryo/supercell (2008)',   streams: '210M' },
  { title: 'Senbonzakura',       album: 'Kurousa-P (2011)',       streams: '195M' },
  { title: 'Melt',               album: 'ryo/supercell (2007)',   streams: '170M' },
  { title: 'Tell Your World',    album: 'kz(livetune) (2012)',    streams: '155M' },
  { title: 'Rolling Girl',       album: 'wowaka (2010)',          streams: '130M' },
  { title: 'Sand Planet',        album: 'Hachi (2017)',           streams: '118M' },
];
export default function Artist() {
  return (
    <div>
      <header className="artist-hero">
        <div className="artist-hero__inner">
          <p style={{ fontSize: '0.78rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '20px' }}>
            Headlining Artist
          </p>
          <h1 className="artist-name">Hatsune Miku</h1>
        </div>
      </header>
      <section className="artist-section">
        <div className="artist-section__inner">
          <div className="artist-bio-grid">
            <div className="artist-avatar">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/ca/SvgMiku3.svg"
                alt="Hatsune Miku"
                className="avatar-placeholder"
              />
            </div>
            <div className="artist-bio-text">
              <h2>About Hatsune Miku</h2>
              <p>
                Hatsune Miku (初音ミク) is a Vocaloid software voicebank developed by Crypton Future
                Media and its official anthropomorphic mascot — a 16-year-old girl with long,
                turquoise twin-tails. She was originally released in August 2007 for the Yamaha
                Vocaloid 2 synthesizer engine and was the first member of the Character Vocal Series,
                voiced by Japanese voice actress Saki Fujita.
              </p>
              <p>
                Since her debut, Miku has grown into a global cultural phenomenon, headlining sold-out
                holographic concerts across Japan, North America, and Europe. Thousands of
                user-generated songs have been created using her voice, making her one of the most
                prolific and collaborative musical acts in history, with a fanbase spanning every
                continent.
              </p>
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
        <h2>See Hatsune Miku Live</h2>
        <p>August 15, 2026 · Madison Square Garden, New York</p>
        <Link to="/tickets" className="btn-primary-gold">Get Tickets</Link>
      </div>
    </div>
  );
}
