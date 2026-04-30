import { useState } from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import SongVoteCard from '../components/SongVoteCard';
import './Setlist.css';

const ALL_SONGS = [
  { id: 1,  title: 'World is Mine',    composer: 'ryo/supercell',   year: 2007, tags: ['pop', 'classic'] },
  { id: 2,  title: 'Senbonzakura',     composer: 'Kurousa-P',       year: 2011, tags: ['upbeat', 'classic'] },
  { id: 3,  title: 'Melt',             composer: 'ryo/supercell',   year: 2007, tags: ['pop', 'classic'] },
  { id: 4,  title: 'Tell Your World',  composer: 'kz(livetune)',    year: 2012, tags: ['upbeat', 'pop'] },
  { id: 5,  title: 'Rolling Girl',     composer: 'wowaka',          year: 2010, tags: ['emotional'] },
  { id: 6,  title: 'Sand Planet',      composer: 'Hachi',           year: 2017, tags: ['emotional', 'classic'] },
  { id: 7,  title: 'Hibikase',         composer: 'GigaP',           year: 2013, tags: ['upbeat'] },
  { id: 8,  title: 'Packaged',         composer: 'kz(livetune)',    year: 2007, tags: ['classic', 'pop'] },
  { id: 9,  title: 'Goodbye Sengen',   composer: 'Hachioji-P',      year: 2013, tags: ['pop', 'emotional'] },
  { id: 10, title: 'Redial',           composer: 'kz(livetune)',    year: 2013, tags: ['emotional'] },
  { id: 11, title: 'POP/STARS',        composer: 'MontanaBlack',    year: 2018, tags: ['upbeat', 'pop'] },
  { id: 12, title: 'Ai Dee',           composer: 'DECO*27',         year: 2019, tags: ['pop', 'upbeat'] },
];

const FILTERS = [
  { key: 'all',      label: 'All Songs' },
  { key: 'pop',      label: 'Pop' },
  { key: 'upbeat',   label: 'Upbeat' },
  { key: 'emotional',label: 'Emotional' },
  { key: 'classic',  label: 'Classic' },
];

export default function Setlist() {
  const [votes, setVotes] = useState(() => Object.fromEntries(ALL_SONGS.map(s => [s.id, 0])));
  const [voted, setVoted] = useState(() => new Set());
  const [filter, setFilter] = useState('all');

  function handleVote(id) {
    setVoted(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
        setVotes(v => ({ ...v, [id]: Math.max(0, v[id] - 1) }));
      } else {
        next.add(id);
        setVotes(v => ({ ...v, [id]: v[id] + 1 }));
      }
      return next;
    });
  }

  const displayed = ALL_SONGS
    .filter(s => filter === 'all' || s.tags.includes(filter))
    .sort((a, b) => votes[b.id] - votes[a.id]);

  const totalVotes = Object.values(votes).reduce((s, v) => s + v, 0);
  const topSong = ALL_SONGS.reduce((top, s) => votes[s.id] > votes[top.id] ? s : top, ALL_SONGS[0]);

  return (
    <main className="setlist-page">
      <header className="setlist-header">
        <p className="setlist-eyebrow">Fan Vote</p>
        <h1>Build the Setlist</h1>
        <p className="setlist-sub">
          Vote for the songs you want to hear live. The top picks get added to the concert setlist.
        </p>
        {totalVotes > 0 && (
          <div className="setlist-stats">
            <span><strong>{totalVotes}</strong> vote{totalVotes !== 1 ? 's' : ''} cast</span>
            <span className="stat-sep">·</span>
            <span>Leading: <strong>{topSong.title}</strong></span>
          </div>
        )}
      </header>

      <Container className="setlist-body">
        <div className="filter-tabs" role="tablist">
          {FILTERS.map(f => (
            <button
              key={f.key}
              role="tab"
              aria-selected={filter === f.key}
              className={`filter-tab${filter === f.key ? ' filter-tab--active' : ''}`}
              onClick={() => setFilter(f.key)}
            >
              {f.label}
              {f.key !== 'all' && (
                <Badge
                  bg="none"
                  className="filter-badge"
                >
                  {ALL_SONGS.filter(s => s.tags.includes(f.key)).length}
                </Badge>
              )}
            </button>
          ))}
        </div>

        <Row className="g-3 mt-1">
          {displayed.map(song => (
            <Col key={song.id} xs={12} md={6}>
              <SongVoteCard
                song={song}
                voted={voted.has(song.id)}
                voteCount={votes[song.id]}
                onVote={() => handleVote(song.id)}
              />
            </Col>
          ))}
        </Row>

        {voted.size > 0 && (
          <div className="voted-summary">
            <p>You voted for <strong>{voted.size}</strong> song{voted.size !== 1 ? 's' : ''}.</p>
            <button className="clear-btn" onClick={() => {
              setVoted(new Set());
              setVotes(Object.fromEntries(ALL_SONGS.map(s => [s.id, 0])));
            }}>
              Clear my votes
            </button>
          </div>
        )}
      </Container>
    </main>
  );
}
