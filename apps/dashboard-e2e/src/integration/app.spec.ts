import { getGreeting } from '../support/app.po';

describe('dashboard test', () => {
  const email = 'd@d.com';
  const password = 'pA$$w0rd';



  beforeEach(() => cy.visit('http://localhost:4200/computers'));
  
  it('should display message', () => {
    cy.contains('This is a Master Detail View Being tested');
  });
});
