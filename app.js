const routines = {
  dia1: [
    "Calentamiento (10 min): movilidad articular y jumping jacks",
    "Hip escapes (4x10 cada lado)",
    "Bridges (4x10)",
    "Granby rolls (3x8)",
    "Shadow grappling (3x3 min)"
  ],
  dia2: [
    "Estiramiento dinámico (10 min)",
    "Sit-outs (4x10)",
    "Técnica de guardia: shrimp to guard (3x10)",
    "Técnica de pase: knee cut (3x10)",
    "Revisión combinada (3x2 min)"
  ],
  dia3: [
    "Movilidad (8 min)",
    "Rolling breakfalls (4x8)",
    "Hip heist drills (3x10)",
    "Granby roll + sit-out (3x10)",
    "Flow solo drill (5 min)"
  ],
  dia4: [
    "Rotación articular (8 min)",
    "Reverse shrimp + hip escape combo (3x10)",
    "Bridge + roll + sit-out (4x8)",
    "Pasada simulada de guardia (3x10)",
    "Simulación de barrido en cadena (3x2 min)"
  ],
  dia5: [
    "Shadow grappling (10 min)",
    "Secuencia completa: shrimp + sit-out + bridge (3x10)",
    "Granby + hip heist (3x10)",
    "Revisión de drills semanales (4x2 min)",
    "Cool down y estiramiento (5 min)"
  ]
};

const routineSelector = document.getElementById("routineSelector");
const routineList = document.getElementById("routineList");

routineSelector.addEventListener("change", () => {
  const selected = routineSelector.value;
  routineList.innerHTML = "";
  routines[selected].forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    routineList.appendChild(li);
 // Pega esto al final de tu archivo app.js

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then(res => console.log("Service worker registrado"))
      .catch(err => console.log("Service worker no registrado", err));
  });
});

routineSelector.dispatchEvent(new Event("change"));