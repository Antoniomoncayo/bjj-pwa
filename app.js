document.addEventListener("DOMContentLoaded", () => {
  const routineContent = document.getElementById("routineContent");
  const selectorContainer = document.getElementById("routineSelector");
  let routines = {};

  // Mapeo de emojis a iconos de Font Awesome
  const iconMap = {
    "🟢": "fa-solid fa-person-running",
    "🟡": "fa-solid fa-child-reaching",
    "🔵": "fa-solid fa-puzzle-piece",
    "🟣": "fa-solid fa-link",
    "🟤": "fa-solid fa-fire"
  };

  // 1. Cargar las rutinas desde el archivo JSON
  fetch('routines.json')
    .then(response => response.json())
    .then(data => {
      routines = data;
      // Cargar la rutina del día 1 por defecto al iniciar
      renderRoutine("dia1");
      setupSelector();
    })
    .catch(error => {
      console.error("Error al cargar las rutinas:", error);
      routineContent.innerHTML = "<p>No se pudieron cargar las rutinas. Por favor, intenta de nuevo.</p>";
    });

  // 2. Función para renderizar una rutina
  function renderRoutine(dayKey) {
    const routine = routines[dayKey];
    routineContent.innerHTML = "";
    routineContent.style.animation = 'none';
    requestAnimationFrame(() => {
      routineContent.style.animation = '';
    });

    Object.keys(routine).forEach((section, sectionIndex) => {
      const sec = document.createElement("section");
      
      const titleText = section.substring(2);
      const iconKey = section.substring(0, 2);
      const iconClass = iconMap[iconKey] || "fa-solid fa-question-circle";

      const title = document.createElement("h2");
      title.innerHTML = `<i class="${iconClass}"></i> ${titleText}`;

      const list = document.createElement("ul");
      routine[section].forEach((ex, exIndex) => {
        const li = document.createElement("li");
        const checkboxId = `${dayKey}-${sectionIndex}-${exIndex}`;

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = checkboxId;

        const label = document.createElement("label");
        label.htmlFor = checkboxId;
        label.textContent = ex;

        // Cargar estado guardado del checkbox
        checkbox.checked = localStorage.getItem(checkboxId) === 'true';

        // Guardar estado al hacer clic
        checkbox.addEventListener('change', () => {
          localStorage.setItem(checkboxId, checkbox.checked);
        });

        li.appendChild(checkbox);
        li.appendChild(label);
        list.appendChild(li);
      });

      sec.appendChild(title);
      sec.appendChild(list);
      routineContent.appendChild(sec);
    });
  }

  // 3. Configurar el selector de día
  function setupSelector() {
    selectorContainer.addEventListener("click", (e) => {
      if (e.target.tagName === 'BUTTON') {
        // Quitar la clase activa de todos los botones
        selectorContainer.querySelectorAll('button').forEach(btn => btn.classList.remove('active'));
        // Añadir la clase activa al botón pulsado
        e.target.classList.add('active');

        let dayValue = e.target.dataset.day;

        if (dayValue === "random") {
          const keys = Object.keys(routines);
          const randKey = keys[Math.floor(Math.random() * keys.length)];
          renderRoutine(randKey);
          // Actualizar el botón activo al día aleatorio seleccionado
          selectorContainer.querySelector(`[data-day="${randKey}"]`).classList.add('active');
          e.target.classList.remove('active'); // Quitar el 'active' del dado
        } else {
          renderRoutine(dayValue);
        }
      }
    });
  }
});