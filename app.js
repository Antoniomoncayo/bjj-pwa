const routines = {
  dia1: {
    "🟢 Calentamiento (10-15 min)": [
      "Movilidad articular (cuello, hombros, codos, muñecas, caderas, rodillas, tobillos) - 5 min",
      "Jumping jacks - 2 min",
      "Leg swings (frontales y laterales) - 3 min",
      "Trote en el sitio con rodillas altas - 2 min"
    ],
    "🟡 Movilidad y desarrollo de cadera (10 min)": [
      "Shrimping (fuga de cadera) hacia adelante - 3x10 por lado",
      "Shoulder bridges (puentes sobre hombros) - 3x15",
      "Rocking (balanceo en posición de tortuga) - 2x30s"
    ],
    "🔵 Técnica básica (15-20 min)": [
      "Technical stand-up (levantada técnica) - 3x8 por lado",
      "Rolls (volteretas) hacia adelante y atrás sobre el hombro - 3x6",
      "Sprawls - 3x10"
    ],
    "🟣 Encadenamientos (15-20 min)": [
      "Shrimp → Bridge → Technical Stand-up (3x5 circuitos por lado)",
      "Forward Roll → Stand up in base (levantarse en posición de combate) (3x8 circuitos)"
    ],
    "🟤 Finisher o sombra (5-10 min)": [
      "Shadow Grappling: Enfócate en movimientos de escape y levantadas técnicas - 5 min"
    ]
  },
  dia2: {
    "🟢 Calentamiento (10-15 min)": [
      "Movilidad espinal (gato-vaca) - 2 min",
      "Bear crawls (caminata de oso) - 3x20s",
      "Skipping lateral - 3 min",
      "Arm circles (círculos con los brazos) - 2 min"
    ],
    "🟡 Movilidad y desarrollo de cadera (10 min)": [
      "Sit-outs (giro y base) - 3x10 por lado",
      "Leg pummels (esgrima de piernas) en el suelo - 3x30s",
      "Cossack squats (sentadillas cosacas) para movilidad - 3x8 por lado"
    ],
    "🔵 Técnica básica (15-20 min)": [
      "Granby rolls - 3x6 por lado",
      "Penetration step (paso de penetración para derribo) - 3x10",
      "Back roll to turtle (voltereta atrás a tortuga) - 3x10"
    ],
    "🟣 Encadenamientos (15-20 min)": [
      "Sit-out → Spin back to turtle (girar a posición de tortuga) (3x8 circuitos)",
      "Penetration step → Sprawl (simulando intento y defensa) (3x10 circuitos)"
    ],
    "🟤 Finisher o sombra (5-10 min)": [
      "Shadow Grappling: Enfócate en transiciones y cambios de nivel - 7 min"
    ]
  },
  dia3: {
    "🟢 Calentamiento (10-15 min)": [
      "Inchworms (gusanos) - 3x8",
      "Torso twists (giros de torso) - 2 min",
      "Saltos con apertura de piernas - 3 min",
      "Movilidad de cadera (90/90) - 3 min"
    ],
    "🟡 Movilidad y desarrollo de cadera (10 min)": [
      "Reverse shrimping (recuperación de cadera) - 3x10 por lado",
      "Bridges con rotación (puente con giro para escapar) - 3x10",
      "Hip switches (cambios de cadera 90/90) - 3x12"
    ],
    "🔵 Técnica básica (15-20 min)": [
      "Breakfalls (caídas) laterales y hacia atrás - 3x8",
      "Postura y movimiento de pie (stance and motion) - 5 min continuos",
      "Shoulder rolls (voltereta sobre el hombro) - 3x6 por lado"
    ],
    "🟣 Encadenamientos (15-20 min)": [
      "Sprawl → Hip heist → Technical stand-up (3x5 circuitos por lado)",
      "Shoulder roll → Sit out (3x6 circuitos por lado)"
    ],
    "🟤 Finisher o sombra (5-10 min)": [
      "Shadow Grappling: Enfócate en la defensa (sprawls, caídas, movimiento) - 6 min"
    ]
  },
  dia4: {
    "🟢 Calentamiento (10-15 min)": [
      "Movilidad general - 5 min",
      "Crab walks (caminata de cangrejo) - 3x20s",
      "Skipping con variaciones - 5 min"
    ],
    "🟡 Movilidad y desarrollo de cadera (10 min)": [
      "Granby rolls (enfocados en la flexión de cadera) - 3x5 por lado",
      "Leg triangles (triángulos con piernas) en el aire - 3x12",
      "Inversions a los hombros (invertidas) - 3x8"
    ],
    "🔵 Técnica básica (15-20 min)": [
      "Armbar motion from guard (movimiento de armbar desde la guardia) - 3x12",
      "Guard retention (retención de guardia): mover caderas y piernas - 5 min",
      "Technical stand-up (levantada técnica) - 3x10 por lado"
    ],
    "🟣 Encadenamientos (15-20 min)": [
      "Bridge → Shrimp → Leg pummel (3x6 circuitos)",
      "Back roll → Granby roll (3x5 circuitos)"
    ],
    "🟤 Finisher o sombra (5-10 min)": [
      "Shadow Grappling: Enfócate en el trabajo de guardia (retención y ataques imaginarios) - 8 min"
    ]
  },
  dia5: {
    "🟢 Calentamiento (10-15 min)": [
      "Revisión de movilidad de todos los días - 5 min",
      "Trote ligero y sombra de boxeo suave - 5 min",
      "Jumping squats (sentadillas con salto) - 2x10"
    ],
    "🟡 Movilidad y desarrollo de cadera (10 min)": [
      "Flow de Movimiento: Combina Shrimps, Bridges y Sit-outs libremente - 5 min",
      "Pigeon pose (postura de la paloma) para estirar - 2 min por lado"
    ],
    "🔵 Técnica básica (15-20 min)": [
      "Revisión de la semana: Elige 3 movimientos básicos y perfeciónalos - 15 min",
      "(Ej: Technical stand-up, Granby Roll, Sprawl)"
    ],
    "🟣 Encadenamientos (15-20 min)": [
      "Flow Drill: Combina 4 o más movimientos de forma fluida y continua.",
      "(Ej: Shrimp → Bridge → Roll → Stand-up → Penetration Step)",
      "Realiza secuencias de 1 minuto, descansa 30s. (x5)"
    ],
    "🟤 Finisher o sombra (5-10 min)": [
      "Full Shadow Grappling: Combate imaginario completo, de pie y en el suelo, con alta intensidad. - 5 a 10 min"
    ]
  }
};

function renderRoutine(routine) {
  const content = document.getElementById("routineContent");
  content.innerHTML = "";
  for (let section in routine) {
    const sec = document.createElement("section");
    const title = document.createElement("h2");
    title.textContent = section;
    const list = document.createElement("ul");
    routine[section].forEach(ex => {
      const li = document.createElement("li");
      li.textContent = ex;
      list.appendChild(li);
    });
    sec.appendChild(title);
    sec.appendChild(list);
    content.appendChild(sec);
  }
}

const selector = document.getElementById("routineSelector");
selector.addEventListener("change", () => {
  const val = selector.value;
  const keys = Object.keys(routines);
  if (val === "random") {
    const randKey = keys[Math.floor(Math.random() * keys.length)];
    renderRoutine(routines[randKey]);
  } else {
    renderRoutine(routines[val]);
  }
});

// Carga la rutina del día 1 por defecto al abrir la página
renderRoutine(routines["dia1"]);