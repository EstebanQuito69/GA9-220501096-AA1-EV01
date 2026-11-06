const { calcularRecompensa } = require('../main');

describe('SABERÍA - Pruebas Unitarias del Sistema de Recompensas', () => {

    test('Debe calcular correctamente los puntos en nivel básico', () => {
        // 5 aciertos (50 pts) - 2 errores (4 pts) = 46 pts
        const puntos = calcularRecompensa(5, 2, 'basico');
        expect(puntos).toBe(46);
    });

    test('Debe aplicar el multiplicador de nivel intermedio', () => {
        // 5 aciertos (50 pts) - 0 errores = 50 * 1.5 = 75 pts
        const puntos = calcularRecompensa(5, 0, 'intermedio');
        expect(puntos).toBe(75);
    });

    test('Debe aplicar el multiplicador de nivel avanzado', () => {
        // 4 aciertos (40 pts) - 1 error (2 pts) = 38 * 2 = 76 pts
        const puntos = calcularRecompensa(4, 1, 'avanzado');
        expect(puntos).toBe(76);
    });

    test('No debe retornar puntos negativos si hay muchos errores', () => {
        // 1 acierto (10 pts) - 10 errores (20 pts) = -10 (Debe retornar 0)
        const puntos = calcularRecompensa(1, 10, 'basico');
        expect(puntos).toBe(0);
    });

    // Prueba de validación de entradas (Control de Errores)
    test('Debe lanzar un error si se ingresan valores negativos', () => {
        expect(() => {
            calcularRecompensa(-2, 1, 'basico');
        }).toThrow("Los aciertos y errores no pueden ser negativos");
    });
});
