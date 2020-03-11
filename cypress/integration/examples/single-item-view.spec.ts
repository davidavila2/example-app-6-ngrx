describe('login test', () => {

  beforeEach(() => cy.visit('http://localhost:4200/computers'));

  it('should reroute to a single computer', () => {
    cy.get(':nth-child(2) > .mat-list-item-content > .reroute > .mat-button-wrapper > .mat-icon').click();
    cy.get('button[color="primary"]').click();
  });
});
