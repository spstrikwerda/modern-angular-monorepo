describe('Sales Car Happy Flow', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should complete the full sales car flow from start to thanks', () => {
    // Step 1: Verify we're on the start page
    cy.url().should('include', '/start');
    cy.contains('Welcome to Sales Car').should('be.visible');
    cy.contains('Start your car selling journey here!').should('be.visible');

    // Step 2: Click the "Get Started" button
    cy.get('#start-button').should('be.visible').click();

    // Step 3: Verify we're on the main page
    cy.url().should('include', '/main');
    cy.contains('Enter Your Car Details').should('be.visible');

    // Step 4: Fill in the car details form
    cy.get('#car-model').should('be.visible').type('Toyota Camry');
    cy.get('#car-year').should('be.visible').type('2020');

    // Step 5: Submit the form
    cy.get('#submit-button').should('be.enabled').click();

    // Step 6: Verify we're on the thanks page
    cy.url().should('include', '/thanks');
    cy.contains('Thank You!').should('be.visible');
    cy.get('#thanks-message')
      .should('be.visible')
      .and('contain', 'Your car information has been submitted successfully');
  });

  it('should not allow submission with empty fields', () => {
    // Navigate to start
    cy.visit('/start');
    cy.get('#start-button').click();

    // Try to submit with empty fields
    cy.url().should('include', '/main');
    cy.get('#submit-button').should('be.disabled');

    // Fill only car model
    cy.get('#car-model').type('Honda Civic');
    cy.get('#submit-button').should('be.disabled');

    // Fill only car year (clear model first)
    cy.get('#car-model').clear();
    cy.get('#car-year').type('2021');
    cy.get('#submit-button').should('be.disabled');

    // Fill both fields
    cy.get('#car-model').type('Honda Civic');
    cy.get('#submit-button').should('be.enabled');
  });

  it('should redirect from root to start page', () => {
    cy.visit('/');
    cy.url().should('include', '/start');
  });
});
