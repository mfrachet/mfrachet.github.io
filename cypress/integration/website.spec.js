/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe("mfrachet.github.io", () => {
  it("audits each url of the sitemap.xml", () => {
    cy.siteMapUrls("http://localhost:8000/sitemap/sitemap-0.xml").then(
      (urls) => {
        urls.forEach((url) => {
          cy.visit(url);
          cy.lighthouse({
            performance: 90,
            accessibility: 100,
            "best-practices": 90,
            seo: 100,
            pwa: 100,
          });
        });
      }
    );
  });
});
