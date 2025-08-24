//? phases=aşama-evre
//? duration=süre
//? scale=ölcek
//? sphere=küre
//? shrink= çekmek
//? degree= derece

const PHASES = [
  { key: "inhale", text: "Nefes Al", duration: 4000, scale: 1.4 },
  { key: "hold", text: "Nefesi Tut", duration: 4000, scale: 1.4 },
  { key: "exhale", text: "Nefes Ver", duration: 6000, scale: 1.0 },
];

const sphere = document.getElementById("sphere");
const phaseText = document.getElementById("phase");
let phaseIndex = 0;

function setPhase(i) {
  const p = PHASES[i];
  phaseText.textContent = p.text;
  sphere.style.transitionDuration = p.duration + "ms";
  sphere.style.transform = `scale(${p.scale})`;
  setTimeout(() => {
    phaseIndex = (phaseIndex + 1) % PHASES.length;
    setPhase(phaseIndex);
  }, p.duration);
}

setPhase(0);
