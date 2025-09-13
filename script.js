// Simulación de GET para info de grupos
const grupos = {
  comba: {
    nombre: "COMBA I+D",
    objetivos: "Investigación en computación y matemáticas aplicadas.",
    director: "Claudia Liliana Zuñiga Cañon"
  },
  gieiam: {
    nombre: "GIEIAM",
    objetivos: "Estudios en ingeniería industrial y automatización.",
    director: "Diana Paola Bernal Suárez"
  }
};

document.getElementById("grupoSelect").addEventListener("change", e => {
  const grupo = grupos[e.target.value];
  const infoDiv = document.getElementById("infoGrupo");
  if (grupo) {
    infoDiv.innerHTML = `
      <h4>${grupo.nombre}</h4>
      <p><strong>Objetivos:</strong> ${grupo.objetivos}</p>
      <p><strong>Director:</strong> ${grupo.director}</p>
    `;
  } else {
    infoDiv.innerHTML = "";
  }
});

// Simulación de POST con fetch
function postData(url, data) {
  fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" }
  })
  .then(res => res.json())
  .then(json => console.log("Respuesta simulada:", json));
}

// Docente
document.getElementById("formDocente").addEventListener("submit", e => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));
  postData("https://jsonplaceholder.typicode.com/posts", data);
  e.target.reset();
});

// Estudiante
document.getElementById("formEstudiante").addEventListener("submit", e => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));
  postData("https://jsonplaceholder.typicode.com/posts", data);

  const li = document.createElement("li");
  li.className = "list-group-item";
  li.textContent = `${data.nombre} - ${data.codigo} ${data.carrera}: ${data.resumen}`;
  document.getElementById("EstudianteRegistrado").appendChild(li);
  e.target.reset();
});

// Actividad
document.getElementById("formActividad").addEventListener("submit", e => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));
  postData("https://jsonplaceholder.typicode.com/posts", data);

  // Mostrar en lista
  const li = document.createElement("li");
  li.className = "list-group-item";
  li.textContent = `${data.tipo} - ${data.fecha} ${data.hora}: ${data.resumen}`;
  document.getElementById("listaActividades").appendChild(li);

  e.target.reset();
});
