import { useState } from "react";
import "./App.scss";
import Star from "./components/Star";

const App = () => {
  const [notation, setNotation] = useState(0);
  const [hoverder, setHovered] = useState(0);

  return (
    <>
      <div className="notation-block">
        <button
          className="reset"
          onClick={(event) => {
            event.preventDefault();
            setNotation(0);
            setHovered(0);
          }}
        >
          <span class="material-symbols-outlined">repeat</span>
        </button>
        <h1>Quel note donnerais-tu à ce challenge ?</h1>
        <p>
          Bon j’espère que tu vas mettre 5 évidemment, si ce n’est pas le cas
          viens me dire pourquoi !
        </p>

        <div className="stars">
          <Star
            value={1}
            setHovered={setHovered}
            setNotation={setNotation}
            hoverder={hoverder}
            notation={notation}
          />
          <Star
            value={2}
            setHovered={setHovered}
            setNotation={setNotation}
            hoverder={hoverder}
            notation={notation}
          />
          <Star
            value={3}
            setHovered={setHovered}
            setNotation={setNotation}
            hoverder={hoverder}
            notation={notation}
          />
          <Star
            value={4}
            setHovered={setHovered}
            setNotation={setNotation}
            hoverder={hoverder}
            notation={notation}
          />
          <Star
            value={5}
            setHovered={setHovered}
            setNotation={setNotation}
            hoverder={hoverder}
            notation={notation}
          />
        </div>
      </div>
    </>
  );
};

export default App;
