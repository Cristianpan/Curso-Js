describe("Carga l página principal", () => {
  it("Carga la página principal", () => {
    cy.visit("/index.html");

    //verificar el elemtno y su texto
    cy.contains("h1", "Administrador de Pacientes de Veterinaria");

    //verificar que el elemento exista
    cy.get('[data-cy="titulo-proyecto"]').should("exist");

    //verificar que exista el elemento y el contenido del texto
    cy.get('[data-cy="titulo-proyecto"]')
      .invoke("text")
      .should("equal", "Administrador de Pacientes de Veterinaria");

    cy.get('[data-cy="citas-heading"]')
      .invoke("text")
      .should("not.equal", "Cualquier cosa");
  });
});
