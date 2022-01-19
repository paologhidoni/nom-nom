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