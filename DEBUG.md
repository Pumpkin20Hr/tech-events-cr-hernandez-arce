# Bitácora de debugging

| Bug | Síntoma observado | Herramienta usada | Línea | Causa | Corrección |
|---|---|---|---|---|---|
| 1 | No aparece el mensaje inicial y se lanza TypeError al asignar textContent | DevTools (Consola) | 4 y 8 | Selector `#mesaje` no existe, retorna `null` | Cambiar a `#mensaje` |
| 2 | Al inscribir varias veces, el total se concatena como texto y descuadra los cupos | DevTools (Consola) | 13 y 14 | `inputCantidad.value` es string y se suma como concatenación | Convertir con `Number(inputCantidad.value)` antes de acumular |
| 3 |  |  |  |  |  |

## Responsable de cada bug
- Bugs 1 y 2: Estudiante B (Eduardo Arce)
- Bug 3: Estudiante A (Kenneth Hernández)