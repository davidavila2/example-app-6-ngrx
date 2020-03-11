describe('login test', () => {
  const email = 'd@d.com';
  const password = 'pA$$w0rd';

  beforeEach(() => cy.visit('http://localhost:4200/login'));
  
  it('should display message', () => {
    cy.get('input[placeholder="Enter Username"]').type(email);
    cy.get('input[placeholder="Enter Password"]').type(password);
    cy.get('button[type="submit"]').click();
  });
});
