const routines = {
  dia1: {
    "🟢 Calentamiento (10-15 min)": [
      "Movilidad articular general",
      "Jumping jacks - 3 min",
      "Movilidad de cuello - 2 min",
      "Skipping o trote en el sitio - 5 min"
    ],
    "🟡 Movilidad y desarrollo de cadera (10 min)": [
      "Shrimping - 4x8",
      "Shoulder bridges - 3x10",
      "Hip escapes - 4x8"
    ],
    "🔵 Técnica básica (15-20 min)": [
      "Technical stand-up - 4x10",
      "Sit outs - 3x10",
      "Granby rolls - 3x8"
    ],
    "🟣 Encadenamientos (15-20 min)": [
      "Shrimp → bridge → sit-out (3x5 circuitos)",
      "Granby roll → hip heist (3x5 circuitos)"
    ],
    "🟤 Finisher o sombra (5-10 min)": [
      "Shadow grappling libre - 5 min"
    ]
  },
  dia2: {
    "🟢 Calentamiento (10-15 min)": [
      "Movilidad de hombros y brazos",
      "Skipping lateral - 3 min",
      "Movilidad lumbar - 5 min"
    ],
    "🟡 Movilidad y desarrollo de cadera (10 min)": [
      "Hip heists - 4x8",
      "Reverse shrimps - 3x10",
      "Bridge + hip escape - 3x8"
    ],
    "🔵 Técnica básica (15-20 min)": [
      "Sit outs - 4x10",
      "Technical stand-up + paso - 3x8",
      "Granby con giro completo - 2x6"
    ],
    "🟣 Encadenamientos (15-20 min)": [
      "Shrimp + stand-up + roll (3x5 circuitos)"
    ],
    "🟤 Finisher o sombra (5-10 min)": [
      "Shadow grappling - 5-7 min"
    ]
  },
  dia3: {
    "🟢 Calentamiento (10-15 min)": [
      "Jumping jacks - 3 min",
      "Skipping en el sitio - 2 min",
      "Movilidad general - 10 min"
    ],
    "🟡 Movilidad y desarrollo de cadera (10 min)": [
      "Shrimping - 5x6",
      "Bridges - 4x8",
      "Sit outs - 3x10"
    ],
    "🔵 Técnica básica (15-20 min)": [
      "Técnica de defensa en el suelo - 3x10",
      "Granby roll - 3x6"
    ],
    "🟣 Encadenamientos (15-20 min)": [
      "Bridge → roll → stand-up (4x5 circuitos)"
    ],
    "🟤 Finisher o sombra (5-10 min)": [
      "Combate imaginario con ritmo - 6 min"
    ]
  },
  dia4: {
    "🟢 Calentamiento (10-15 min)": [
      "Saltos con apertura de piernas - 3x30s",
      "Trote suave - 5 min",
      "Movilidad de articulaciones"
    ],
    "🟡 Movilidad y desarrollo de cadera (10 min)": [
      "Bridge con rotación - 4x6",
      "Reverse shrimp - 3x10",
      "Hip heist - 3x10"
    ],
    "🔵 Técnica básica (15-20 min)": [
      "Technical stand-up lento - 4x8",
      "Sit outs explosivos - 4x6"
    ],
    "🟣 Encadenamientos (15-20 min)": [
      "Bridge + shrimp + Granby (3x6 secuencias)"
    ],
    "🟤 Finisher o sombra (5-10 min)": [
      "Shadow drill continuo - 7 min"
    ]
  },
  dia5: {
    "🟢 Calentamiento (10-15 min)": [
      "Rotaciones articulares completas",
      "Trote y movilidad general"
    ],
    "🟡 Movilidad y desarrollo de cadera (10 min)": [
      "Shrimp en línea - 3x8",
      "Bridge + hip heist - 3x8"
    ],
    "🔵 Técnica básica (15-20 min)": [
      "Sit out + Granby - 4x6",
      "Technical stand-up + pase - 3x10"
    ],
    "🟣 Encadenamientos (15-20 min)": [
      "Shrimp → sit-out → stand-up (4x4)"
    ],
    "🟤 Finisher o sombra (5-10 min)": [
      "Combate libre mental - 5 min"
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

renderRoutine(routines["dia1"]);
