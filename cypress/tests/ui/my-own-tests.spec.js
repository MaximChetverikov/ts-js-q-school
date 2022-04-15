// my-own-tests.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
/* ==== Test Created with Cypress Studio ==== */
import {User} from "../../../src/models";

describe("Custom tests", function () {
  beforeEach(function () {
    });

  /* ==== Test Created with Cypress Studio ==== */
  it('New User', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://localhost:3000/');
    cy.get('[data-test="signup"]').click();
    cy.get('#firstName').clear();
    cy.get('#firstName').type('test');
    cy.get('#lastName').clear();
    cy.get('#lastName').type('user');
    cy.get('#username').clear();
    cy.get('#username').type('testuser');
    cy.get('#password').clear();
    cy.get('#password').type('123456');
    cy.get('#confirmPassword').clear();
    cy.get('#confirmPassword').type('123456');
    cy.get('.MuiButton-label').click();
    cy.get('#username').clear();
    cy.get('#username').type('testuser');
    cy.get('#password').clear();
    cy.get('#password').type('123456');
    cy.get('.MuiButton-label').click();
    cy.get('[data-test="sidenav-signout"] > .MuiListItemText-root > .MuiTypography-root').click();
    /* ==== End Cypress Studio ==== */
  });
  it('Check notification menu', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#username').type('testuser');
    cy.get('#password').clear();
    cy.get('#password').type('123456');
    cy.get('.MuiButton-label').click();
    cy.get('[data-test="sidenav-signout"] > .MuiListItemText-root > .MuiTypography-root').click();
    /* ==== End Cypress Studio ==== */
  });

  it('Check side menu', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://localhost:3000/');
    cy.get('#username').clear();
    cy.get('#username').type('testuser');
    cy.get('#password').clear();
    cy.get('#password').type('123456');
    cy.get('.MuiButton-label').click();
    cy.get('[data-test="sidenav-notifications"] > .MuiListItemText-root > .MuiTypography-root').click();
    cy.get('[data-test="sidenav-bankaccounts"] > .MuiListItemText-root > .MuiTypography-root').click();
    cy.get('[data-test="sidenav-user-settings"] > .MuiListItemText-root > .MuiTypography-root').click();
    cy.get('[data-test="sidenav-home"] > .MuiListItemText-root > .MuiTypography-root').click();
    cy.get('[data-test="sidenav-signout"] > .MuiListItemText-root > .MuiTypography-root').click();
    /* ==== End Cypress Studio ==== */
  });
});
