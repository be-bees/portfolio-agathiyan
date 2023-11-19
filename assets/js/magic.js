import { tsParticles } from "https://cdn.jsdelivr.net/npm/tsparticles-engine/+esm";
import { loadFull } from "https://cdn.jsdelivr.net/npm/tsparticles/+esm";

async function loadParticles(options) {
  await loadFull(tsParticles);

  await tsParticles.load(options);
}

const configs = {
  name: "Mouse Trail",
  particles: {
    color: {
      value: ["#2898fa", "#11d3fa","#034aff","#172ce8","#3e03ff","#974dff"]
    },
    move: {
      outModes: "destroy",
      enable: true,
      speed: 6
    },
    opacity: {
      value: {
        min: 0.1,
        max: 1
      },
      animation: {
        enable: true,
        speed: 3,
        startValue: "max",
        destroy: "min"
      }
    },
    size: {
      value: {
        min: 3,
        max: 7
      }
    },
    shape: {
      type: "star"
    }
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "trail"
      }
    },
    modes: {
      trail: {
        delay: 0.01,
        pauseOnStop: true
      }
    }
  }
};

loadParticles(configs);
