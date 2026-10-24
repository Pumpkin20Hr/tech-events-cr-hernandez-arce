# Bitácora de debugging

| Bug | Síntoma observado | Herramienta usada | Línea | Causa | Corrección |
|---|---|---|---|---|---|
| 1 | El botón "Inscribir" no responde y en Console aparece "Uncaught TypeError: Cannot read properties of null (reading 'textContent')" | Console para leer el error, Elements para comparar el id y Sources con breakpoint y panel Scope (mensaje = null) | 5 de js/debug.js | El selector "#mesaje" está mal escrito; el id real es "mensaje", por lo que querySelector devuelve null y el script se detiene antes de registrar el listener | Cambiar el selector a document.querySelector("#mensaje") |
| 2 | Con 5 entradas la primera vez da 45 (correcto), pero la segunda vez no da 40 | Sources con breakpoint en registrarInscripcion, Step over y panel Watch (typeof inscritos, totalInscritos, cuposDisponibles) | 14 de js/debug.js | inputCantidad.value es un string; al hacer totalInscritos + inscritos se concatena ("0" + "5" = "05", luego "055") en lugar de sumar | Convertir a número: const inscritos = Number(inputCantidad.value); |
| 3 |  |  |  |  |  |

## Responsable de cada bug

- Bugs 1 y 2: Estudiante B
- Bug 3: Estudiante A