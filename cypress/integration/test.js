// const { urlencoded } = require("express");
// const { idleTimeoutMillis } = require("pg/lib/defaults");

beforeEach(() => {
    cy.task("resetDb");
  });

// test homepage url
it("can navigate to homepage", () => {
    cy.visit('/');
    cy.url().should("include", "/");
});

// user can submit data
it("user can submit form", () => {
  cy.visit('/add-review');
  cy.get('input[name="user"]').type('Mario');
  cy.get('input[name="restaurant"]').type('Toadland');
  cy.get('textarea[name="body"]').type('I love toadland!');
  cy.get('input[name="rating"]').type(5);
  cy.get('button[type="submit"]').click();

  // cy.get('li').contains('Mario');
  // cy.get('li').contains('Toadland');
  // cy.get('li').contains('I love toadland!');
  // cy.get('li').contains('5');
})