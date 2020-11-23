describe("Displays button and header on index page", () => {
  beforeEach(() => {
    cy.visit("/");
  })


  it("when user visits the page", () => {
    cy.get('header').should('contain', "Play RPS")
    cy.get("button#rock").should('contain', 'Rock')
    cy.get("button#paper").should('contain', 'Paper')
    cy.get("button#scissor").should('contain', 'Scissor')
  });
});
