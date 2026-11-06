describe('SABERÍA - Flujo de Ejercicios Gamificados', () => {
  it('El estudiante resuelve un ejercicio y recibe sus puntos visualmente', () => {
    // 1. Ingreso y navegación
    cy.visit('http://localhost:3000/login');
    cy.get('input[name="email"]').type('estudiante@saberia.com');
    cy.get('input[name="password"]').type('123456');
    cy.get('button[type="submit"]').click();

    // 2. Interacción con el módulo adaptativo
    cy.contains('Matemáticas - Nivel 1').click();
    cy.get('input[placeholder="Escribe tu respuesta"]').type('15'); 
    cy.contains('Enviar Respuesta').click();

    // 3. Validación del comportamiento de la interfaz (Asserts)
    cy.get('.modal-recompensa').should('be.visible');
    cy.contains('¡EXCELENTE TRABAJO!').should('be.visible');
    cy.contains('+10 PUNTOS').should('be.visible');
  });
});