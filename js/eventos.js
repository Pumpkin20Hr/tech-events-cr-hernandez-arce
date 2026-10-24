// Con onclick solo puede definirse un manejador por propiedad; con addEventListener
// se pueden agregar múltiples listeners para el mismo evento sin sobrescribirlos.
contenedor.addEventListener("click", (event) => {
 console.log("event.type:", event.type);
 console.log("event.target:", event.target);
 console.log("event.clientX:", event.clientX);
 console.log("event.clientY:", event.clientY);
 if (!event.target.classList.contains("btn-inscribir")) {
 return;
 }
 const tarjeta = event.target.closest(".card");
 if (!tarjeta || !tarjeta.dataset.id) {
 return;
 }
 const idEvento = Number(tarjeta.dataset.id);
 const eventoSeleccionado = eventos.find((evento) => evento.id === idEvento);
 if (!eventoSeleccionado || eventoSeleccionado.cupos <= 0) {
 return;
 }
 eventoSeleccionado.cupos -= 1;
 const cuposTexto = tarjeta.querySelector(".cupos");
 if (cuposTexto) {
 cuposTexto.textContent = `Cupos disponibles: ${eventoSeleccionado.cupos}`;
 }
 if (eventoSeleccionado.cupos === 0) {
 event.target.disabled = true;
 event.target.textContent = "Agotado";
 }
});

document.querySelectorAll(".card").forEach((tarjeta) => {
 tarjeta.addEventListener("mouseover", () => {
 tarjeta.classList.add("resaltada");
 });
 tarjeta.addEventListener("mouseout", () => {
 tarjeta.classList.remove("resaltada");
 });
});

const tituloPrincipal = document.querySelector("h1");
tituloPrincipal.addEventListener("click", () => {
 const agradecimiento = document.createElement("p");
 agradecimiento.textContent = "¡Gracias por visitar TechEvents CR!";
 tituloPrincipal.insertAdjacentElement("afterend", agradecimiento);
}, { once: true });

tituloPrincipal.addEventListener("click", (event) => {
 console.log("h1 event.target:", event.target);
 console.log("h1 event.type:", event.type);
});
