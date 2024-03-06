describe("Valida el formulario", () => {
  it("Submit el formulario y mostrar la alerta de error", () => {
    cy.visit("/index.html");

    cy.get('[data-cy="formulario"]').submit();

    //selecionar alerta

    cy.get('[data-cy="alerta"]')
      .invoke("text")
      .should("equal", "Todos los campos son Obligatorios");
    cy.get('[data-cy="alerta"]')
      .should("have.class", "alert-danger");
  });
});
