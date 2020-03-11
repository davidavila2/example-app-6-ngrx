describe('dashboard test', () => {
  beforeEach(() => cy.visit('http://localhost:4200/computers'));
  
  it('should display message', () => {
    cy.contains('This is a Master Detail View Being tested');
  });
});
