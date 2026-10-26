# TechEvents CR

Sitio web que muestra eventos de tecnología en Costa Rica, permite inscribirse y controla los cupos disponibles. Proyecto del curso **ISW-521 Programación en Ambiente Web I** – Semana 5: DOM, eventos y debugging con JavaScript.

---

## Integrantes

| Rol | Nombre completo | Usuario de GitHub |
|---|---|---|
| Estudiante A (propietario del repositorio) | Kenneth Hernández Rodas | [@Pumpkin20Hr](https://github.com/Pumpkin20Hr) |
| Estudiante B (colaborador) | José Eduardo Arce Alpízar | [@joarcea](https://github.com/joarcea) |

---

## Enlaces

- **Repositorio:** https://github.com/Pumpkin20Hr/tech-events-cr-hernandez-arce
- **Sitio publicado (GitHub Pages):** https://pumpkin20hr.github.io/tech-events-cr-hernandez-arce/

---

## Descripción

El sitio genera dinámicamente con JavaScript las tarjetas de los eventos a partir de un arreglo de datos. Cada tarjeta muestra el nombre, la fecha, la modalidad y los cupos disponibles. Al presionar **"Inscribirme"** se descuenta un cupo y, cuando llega a cero, el botón se deshabilita y cambia a **"Agotado"**. Las tarjetas se resaltan al pasar el mouse y la sección **"Inscripción rápida"** permite registrar varias entradas a la vez y calcula los cupos restantes.

El proyecto incluye además un ejercicio de debugging con tres errores intencionales, que se encontraron y corrigieron con las herramientas del navegador (Console, Elements y Sources). El proceso está documentado en [`DEBUG.md`](DEBUG.md) y las capturas están en la carpeta `evidencias/`.

---

## Tecnologías utilizadas

- **HTML5:** estructura semántica (`header`, `main`, `section`, `footer`).
- **CSS3:** variables en `:root`, Grid con `repeat(auto-fit, minmax(...))`, `:hover`, `button:disabled` y media query para móvil.
- **JavaScript:** selección y creación de elementos del DOM (`querySelector`, `createElement`, `append`, `prepend`, `before`, `insertAdjacentHTML/Text/Element`), navegación del árbol DOM y manejo de eventos con `addEventListener`, el objeto `event` y la opción `once`.
- **Herramientas del navegador (DevTools):** Console, Elements, Sources, breakpoints, Watch y Scope.
- **Git y GitHub:** ramas, commits, Pull Requests con revisión cruzada.
- **GitHub Pages:** publicación del sitio.

---

## Estructura del proyecto

```text
tech-events-cr-hernandez-arce/
├── index.html
├── css/
│   └── styles.css
├── js/
│   ├── app.js        → datos y renderizado de tarjetas (DOM)
│   ├── eventos.js    → manejo de eventos
│   └── debug.js      → ejercicio de debugging (corregido)
├── evidencias/       → capturas del proceso de debugging
├── DEBUG.md          → bitácora de debugging
└── README.md
```

---

## Cómo ejecutarlo

1. Abrir el sitio publicado: https://pumpkin20hr.github.io/tech-events-cr-hernandez-arce/
2. O clonar el repositorio y abrir `index.html` en el navegador:
   ```bash
   git clone https://github.com/Pumpkin20Hr/tech-events-cr-hernandez-arce.git
   ```

---

## Pull Requests# tech-events-cr-hernandez-arce

Pull Requests integrados a `main`. Cada uno fue revisado y aprobado por el compañero antes del merge.

| PR | Descripción | Autor | Revisor | Enlace |
|---|---|---|---|---|
| #1 | Estructura HTML (`index.html`) | Kenneth Hernández Rodas | José Eduardo Arce Alpízar | [Ver PR](https://github.com/Pumpkin20Hr/tech-events-cr-hernandez-arce/pull/1) |
| #3 | Contenido de `index.html` | Kenneth Hernández Rodas | José Eduardo Arce Alpízar | [Ver PR](https://github.com/Pumpkin20Hr/tech-events-cr-hernandez-arce/pull/3) |
| #4 | Render de tarjetas con DOM (`js/app.js`) | Kenneth Hernández Rodas | José Eduardo Arce Alpízar | [Ver PR](https://github.com/Pumpkin20Hr/tech-events-cr-hernandez-arce/pull/4) |
| #5 | Estilos CSS (`css/styles.css`) | José Eduardo Arce Alpízar | Kenneth Hernández Rodas | [Ver PR](https://github.com/Pumpkin20Hr/tech-events-cr-hernandez-arce/pull/5) |
| #6 | Ejercicio de debugging (`js/debug.js`, `DEBUG.md`, `evidencias/`) | Kenneth Hernández Rodas | José Eduardo Arce Alpízar | [Ver PR](https://github.com/Pumpkin20Hr/tech-events-cr-hernandez-arce/pull/6) |
| #11 | Corrección de bugs 1 y 2 del debugging | José Eduardo Arce Alpízar | Kenneth Hernández Rodas | [Ver PR](https://github.com/Pumpkin20Hr/tech-events-cr-hernandez-arce/pull/11) |
| #12 | Corrección del CSS (línea que rompía `:root`) | José Eduardo Arce Alpízar | Kenneth Hernández Rodas | [Ver PR](https://github.com/Pumpkin20Hr/tech-events-cr-hernandez-arce/pull/12) |
| #13 | Corrección del bug 3 del debugging | Kenneth Hernández Rodas | José Eduardo Arce Alpízar | [Ver PR](https://github.com/Pumpkin20Hr/tech-events-cr-hernandez-arce/pull/13) |
| #14 | Manejo de eventos (`js/eventos.js`) | José Eduardo Arce Alpízar | Kenneth Hernández Rodas | [Ver PR](https://github.com/Pumpkin20Hr/tech-events-cr-hernandez-arce/pull/14) |
| #15 | Ajuste de la corrección del bug 2 | José Eduardo Arce Alpízar | Kenneth Hernández Rodas | [Ver PR](https://github.com/Pumpkin20Hr/tech-events-cr-hernandez-arce/pull/15) |
| #17 | README con URL publicada | José Eduardo Arce Alpízar | Kenneth Hernández Rodas | [Ver PR](https://github.com/Pumpkin20Hr/tech-events-cr-hernandez-arce/pull/17) |

Los PR #2, #7, #8, #9, #10 y #16 se cerraron sin integrarse porque no cumplían el flujo de trabajo (subida directa, duplicados o cambios solicitados) y se reemplazaron por los PR de la tabla.

---

## Aprendizajes

- Crear, insertar y modificar elementos del DOM desde JavaScript.
- Navegar el árbol del DOM (`children`, `parentElement`, `firstElementChild`, `previousElementSibling`).
- Registrar varios listeners en un mismo elemento y usar la opción `once`.
- Depurar con breakpoints, Step over/into/out, Watch y Scope en lugar de buscar errores a simple vista.
- Trabajar en equipo con ramas y Pull Requests revisados por el compañero, sin commits directos a `main`.
[README.md](https://github.com/user-attachments/files/33988294/README.md)
