
contenedor.addEventListener("click", (event) => {
  const boton = event.target;
  if (!boton.classList.contains("btn-inscribir")) return;

  const tarjeta = boton.parentElement;
  const id = Number(tarjeta.getAttribute("data-id"));
  const evento = eventos.find((e) => e.id === id);

  // Disminuir cupos
  if (evento.cupos > 0) {
    evento.cupos--;
    tarjeta.querySelector(".cupos").textContent = `Cupos disponibles: ${evento.cupos}`;
  }

  // Cuando llegan a 0: deshabilitar y cambiar texto
  if (evento.cupos === 0) {
    boton.disabled = true;
    boton.textContent = "Agotado";
  }

  console.log(event.type, event.target, event.clientX, event.clientY);
});

// Las variables siguientes van dentro de bloques { } para no chocar con
// constantes globales de app.js o debug.js (un const repetido entre
// scripts causaría un SyntaxError).

// ---------- 3. mouseover / mouseout con classList.toggle ----------
{
  const tarjetas = document.querySelectorAll(".card");

  tarjetas.forEach((tarjeta) => {
    tarjeta.addEventListener("mouseover", () => {
      tarjeta.classList.toggle("resaltada");
    });
    tarjeta.addEventListener("mouseout", () => {
      tarjeta.classList.toggle("resaltada");
    });
  });
}

// ---------- 4. Listener en el <h1> con { once: true } ----------
{
  const tituloPrincipal = document.querySelector("h1");

  tituloPrincipal.addEventListener(
    "click",
    () => {
      const gracias = document.createElement("p");
      gracias.textContent = "¡Gracias por visitar TechEvents CR!";
      tituloPrincipal.insertAdjacentElement("afterend", gracias);
    },
    { once: true } 
  );

  
  tituloPrincipal.addEventListener("click", (event) => {
    console.log(event.target, event.type);
  });
}