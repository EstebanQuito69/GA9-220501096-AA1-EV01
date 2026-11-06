// Sistema de recompensas gamificado de SABERÍA

/**
 * Calcula los puntos ganados por un estudiante en un ejercicio adaptativo.
 * @param {number} aciertos - Número de respuestas correctas.
 * @param {number} errores - Número de respuestas incorrectas.
 * @param {string} dificultad - Nivel ('basico', 'intermedio', 'avanzado').
 * @returns {number} Puntos totales ganados.
 */
function calcularRecompensa(aciertos, errores, dificultad) {
    if (aciertos < 0 || errores < 0) {
        throw new Error("Los aciertos y errores no pueden ser negativos");
    }

    let multiplicadorDificultad = 1;
    if (dificultad === 'intermedio') multiplicadorDificultad = 1.5;
    if (dificultad === 'avanzado') multiplicadorDificultad = 2;

    const puntosBase = aciertos * 10;
    const penalizacion = errores * 2;
    
    let puntosTotales = (puntosBase - penalizacion) * multiplicadorDificultad;
    
    // Los puntos nunca pueden ser negativos
    return puntosTotales > 0 ? puntosTotales : 0;
}

module.exports = { calcularRecompensa };