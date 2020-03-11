describe('wild card reroute test and redirect you back to main page', () => {
  beforeEach(() => cy.visit('http://localhost:4200/dssdfsdf'));
  
  it('should display message', () => {
    cy.contains('404. Page not found...');
  });

  it('should redirect you to login', () => {
    cy.get('button[color="primary"]').click();
  });
});
