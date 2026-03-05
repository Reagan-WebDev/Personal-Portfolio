import "../styles/Hobbies.css";
import { useNavigate } from "react-router-dom";

const hobbies = [
  "Writing my experiences ✍️",
  "Playing Football ⚽",
  "Reading Books 📚",
  "Taking quiet walks 🌿",
  "Cooking 🍳",
  "Learning business & success stories 💼"
];

function Hobbies() {
  const navigate = useNavigate();
  return (
    <div className="hobbies-page">
      <h1 className="hobbies-title">My Hobbies</h1>

      <div className="hobbies-slider">
        <div className="hobbies-track">
          {hobbies.concat(hobbies).map((hobby, index) => (
            <div key={index} className="hobby-card">
              {hobby}
            </div>
          ))}
        </div>
      </div>

      <div className="explore-music-container">
        <button
          className="explore-music-btn animated-border"
          onClick={() => navigate("/music")}
        >
          Explore My Music
        </button>
      </div>

    </div>
  );
}

export default Hobbies;