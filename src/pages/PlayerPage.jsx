import { useParams, useSearchParams } from "react-router-dom";
import "../styles/PlayerPage.css";

const songs = {
  1: {
    title: "My Favorite Song",
    audio: "/music/song1.mp3",
    video: "/music/song1.mp4",
  },
  2: {
    title: "Another Vibe",
    audio: "/music/song2.mp3",
    video: "/music/song2.mp4",
  },
};

export default function PlayerPage() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");

  const song = songs[id];

  return (
    <div className="player-page">
      <h1>{song.title}</h1>

      {type === "audio" ? (
        <audio controls autoPlay>
          <source src={song.audio} type="audio/mp3" />
        </audio>
      ) : (
        <video controls autoPlay>
          <source src={song.video} type="video/mp4" />
        </video>
      )}
    </div>
  );
}

