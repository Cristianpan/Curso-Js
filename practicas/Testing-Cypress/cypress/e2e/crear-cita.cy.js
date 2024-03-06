describe("Llena los campos para crear una cita", () => {
  it("Crea la cita", () => {
    cy.visit("/index.html");

    cy.get('[data-cy="mascota-input"]').type("Tobi");
    cy.get('[data-cy="propietario-input"]').type("Cristian");
    cy.get('[data-cy="telefono-input"]').type("999321354");
    cy.get('[data-cy="fecha-input"]').type("2023-02-23");
    cy.get('[data-cy="hora-input"]').type("10:30");
    cy.get('[data-cy="sintomas-input"]').type("Duerme todo el día y no come");

    cy.get('[data-cy="submit"]').click();
    cy.get('[data-cy="alerta"]')
      .should("have.class", "alert-success")
      .invoke("text")
      .should("equal", "Se agregó correctamente");
  });

  it("Edita la cita", () => {
    cy.get('[data-cy="btn-editar"]').click();
    cy.get('[data-cy="mascota-input"]').clear().type("Nombre actualizado");
    cy.get('[data-cy="submit"]').click();
    cy.get('[data-cy="alerta"]')
      .should("have.class", "alert-success")
      .invoke("text")
      .should("equal", "Guardado Correctamente");
  });

  it("Elimar cita", () => {
    cy.get('[data-cy="btn-eliminar"]').click();
    cy.get('[data-cy="citas-heading"]')
      .invoke("text")
      .should("equal", "No hay Citas, comienza creando una");
  });
});
