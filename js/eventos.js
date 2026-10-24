
contenedor.addEventListener("click", (event) => {
  const boton = event.target;
  if (!boton.classList.contains("btn-inscribir")) return;

  const tarjeta = boton.parentElement;
  const id = Number(tarjeta.getAttribute("data-id"));
  const evento = eventos.find((e) => e.id === id);

  
  if (evento.cupos > 0) {
    evento.cupos--;
    tarjeta.querySelector(".cupos").textContent = `Cupos disponibles: ${evento.cupos}`;
  }

 
  if (evento.cupos === 0) {
    boton.disabled = true;
    boton.textContent = "Agotado";
  }

  console.log(event.type, event.target, event.clientX, event.clientY);
});


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


{
  const tituloPrincipal = document.querySelector("h1");

  tituloPrincipal.addEventListener(
    "click",
    () => {
      const gracias = document.createElement("p");
      gracias.textContent = "¡Gracias por visitar TechEvents CR!";
      tituloPrincipal.insertAdjacentElement("afterend", gracias);
    },
    { once: true } // se ejecuta solo la primera vez
  );

  
  tituloPrincipal.addEventListener("click", (event) => {
    console.log(event.target, event.type);
  });
}