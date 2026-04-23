import './SongVoteCard.css';
export default function SongVoteCard({ song, voted, voteCount, onVote }) {
  return (
    <div className={`svcard${voted ? ' svcard--voted' : ''}`}>
      <div className="svcard-info">
        <strong className="svcard-title">{song.title}</strong>
        <span className="svcard-meta">{song.composer} · {song.year}</span>
      </div>
      <div className="svcard-right">
        <span className="svcard-count">{voteCount}</span>
        <button
          className={`svcard-btn${voted ? ' svcard-btn--on' : ''}`}
          onClick={onVote}
          aria-label={voted ? 'Remove vote' : 'Vote for this song'}
        >
          ♥
        </button>
      </div>
    </div>
  );
}
