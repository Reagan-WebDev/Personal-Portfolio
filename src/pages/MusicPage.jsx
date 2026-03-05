import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/MusicPage.css";



const songs = [
  {
    id: 1,
    title: "My Favorite Song",
    audio: "/music/song1.mp3",
    video: "/music/song1.mp4",
  },
  {
    id: 2,
    title: "Another Vibe",
    audio: "/music/song2.mp3",
    video: "/music/song2.mp4",
  },
];

export default function MusicPage() {
  const [showDownloadPopup, setShowDownloadPopup] = useState(false);
  const [selectedSong, setSelectedSong] = useState(null);
  const navigate = useNavigate();

  const handlePlay = (type) => {
    navigate(`/player/${selectedSong.id}?type=${type}`);
  };



  return (
    <div className="music-page">
      <h1>🎵 Music I Love</h1>

      <div className="music-grid">
        {songs.map((song) => (
          <div key={song.id} className="music-card animated-border">
            <h3>{song.title}</h3>

            <div className="card-buttons">
            <button
                className="download-btn"
                onClick={() => {
                    setSelectedSong(song);
                    setShowDownloadPopup(true);
                }}
                >
                Download
            </button>

              <button
                className="play-btn"
                onClick={() => setSelectedSong(song)}
              >
                Play
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Play Option Popup */}
      {selectedSong && (
        <div className="play-popup">
          <div className="popup-content">
            <h3>Play as:</h3>
            <button onClick={() => handlePlay("audio")}>Audio</button>
            <button onClick={() => handlePlay("video")}>Video</button>
            <button onClick={() => setSelectedSong(null)}>Cancel</button>
          </div>
        </div>
      )}

      {showDownloadPopup && (
  <div className="download-popup-overlay">
    <div className="download-popup">

      <h3>Download {selectedSong?.title}</h3>
      <p>Choose format</p>

      <div className="download-options">

        <a
          href={selectedSong?.audio}
          download
          className="download-audio"
        >
          Download Audio
        </a>

        <a
          href={selectedSong?.video}
          download
          className="download-video"
        >
          Download Video
        </a>

      </div>

      <button
        className="close-popup"
        onClick={() => setShowDownloadPopup(false)}
      >
        Close
      </button>

    </div>
  </div>
)}

    </div>
  );
}

