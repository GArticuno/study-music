import { useCallback } from 'react';
import Particles from "react-particles";
import { loadFull } from 'tsparticles';
import type { Engine } from "tsparticles-engine";
import './App.css';
import { Player } from './components/Player';

function App() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
}, []);

  return (
    <div className="App">
      <Particles
        className='particles'
        init={particlesInit}
        options={{
          background: {
              color: {
                  value: "#2A2141",
              },
          },
          fpsLimit: 120,
          interactivity: {
              events: {
                  onClick: {
                      enable: true,
                      mode: "repulse",
                  },
                  onHover: {
                      enable: false,
                  },
                  resize: true,
              },
              modes: {
                  push: {
                      quantity: 4,
                  },
                  repulse: {
                      distance: 200,
                      duration: 0.4,
                  },
              },
          },
          particles: {
              color: {
                  value: "#ffffff",
              },
              collisions: {
                  enable: true,
              },
              move: {
                  direction: "none",
                  enable: true,
                  outModes: {
                      default: "bounce",
                  },
                  random: true,
                  speed: 2,
                  straight: false,
              },
              number: {
                  density: {
                      enable: true,
                      area: 800,
                  },
                  value: 100,
              },
              opacity: {
                  value: 0.5,
              },
              shape: {
                  type: "circle",
              },
              size: {
                  value: { min: 1, max: 5 },
              },
          },
          detectRetina: true,
      }}
      />
      <header className="App-header">
        <Player />
      </header>
    </div>
  );
}

export default App;
