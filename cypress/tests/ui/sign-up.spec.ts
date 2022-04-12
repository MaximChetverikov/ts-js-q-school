// sign-up.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
/* ==== Test Created with Cypress Studio ==== */
// it('create-bank-account', function() {
//   /* ==== Generated with Cypress Studio ==== */
//   cy.visit('http://localhost:3000/signin');
//   cy.get('[data-test="signup"]').click();
//   cy.get('#firstName').click();
//   cy.get('#firstName').type('test');
//   cy.get('#lastName').clear();
//   cy.get('#lastName').type('user');
//   cy.get('#username').clear();
//   cy.get('#username').type('testuser');
//   cy.get('#password').clear();
//   cy.get('#password').type('1234');
//   cy.get('#confirmPassword').clear();
//   cy.get('#confirmPassword').type('1234');
//   cy.get('.MuiButton-label').click();
//   cy.get('#username').clear();
//   cy.get('#username').type('testuser');
//   cy.get('#password').clear();
//   cy.get('#password').type('1234');
//   cy.get('.MuiButton-label').click();
//   cy.get('[data-test="user-onboarding-next"] > .MuiButton-label').click();
//   cy.get('#bankaccount-bankName-input').clear();
//   cy.get('#bankaccount-bankName-input').type('The Best Bank');
//   cy.get('#bankaccount-routingNumber-input').clear();
//   cy.get('#bankaccount-routingNumber-input').type('987654321');
//   cy.get('#bankaccount-accountNumber-input').clear();
//   cy.get('#bankaccount-accountNumber-input').type('222222222');
//   cy.get('[data-test="bankaccount-submit"] > .MuiButton-label').click();
//   cy.get('[data-test="user-onboarding-next"] > .MuiButton-label').click();
//   cy.get('[data-test="sidenav-bankaccounts"] > .MuiListItemText-root > .MuiTypography-root').click();
//   cy.get('[data-test="bankaccount-list-item-iT1ra5oDE"] > .MuiGrid-container').click();
//   /* ==== End Cypress Studio ==== */
// });


import { User } from "models";

describe("Cypress Studio Demo", function () {
  beforeEach(function () {
    cy.task("db:seed");

    cy.database("find", "users").then((user: User) => {
      cy.login(user.username, "s3cret", { rememberUser: true });
    });
  });
  it("create new transaction", function () {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.MuiButton-label').click();

    cy.get('[data-test="user-list-search-input"]').clear();
    cy.get('[data-test="user-list-search-input"]').type('devon');
    cy.contains('Devon').click();

    cy.get('#amount').clear();
    cy.get('#amount').type('$100');

    cy.get('#transaction-create-description-input').clear();
    cy.get('#transaction-create-description-input').type('help');

    cy.get('[data-test="transaction-create-submit-payment"]').click();

    cy.get('[data-test="new-transaction-return-to-transactions"]').click();
    cy.get('[data-test="alert-bar-success"]').should('be.visible');
    /* ==== End Cypress Studio ==== */
  });
  it("create new bank account", function () {

    // Extend test with Cypress Studio
  });
});