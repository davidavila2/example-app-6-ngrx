describe('should do crud operations', () => {
  beforeEach(() => cy.visit('http://localhost:4200/computers'));

  it('should select all items', () => {
    cy.get('mat-list-item').click({ multiple: true })
  });

  it('should select the second item', () => {
    cy.get('mat-list-item').eq(1).click();
  });

  it('should create an item', () => {
    const exTitle = 'Windows';
    const exDetails = 'ThinkPad';
    cy.get('input[placeholder="Title"]').type(exTitle);
    cy.get('input[placeholder="Details"]').type(exDetails);
    cy.get('mat-slider').click().trigger('pageup');
    cy.get('mat-slider').trigger('pageup');
    cy.get('mat-checkbox').click();
    cy.get('button[type="submit"]').click();
  });

  it('should update an item', () => {
    const exDetails = 'gateleeer';
    cy.get('mat-list-item').last().click();
    cy.get('input[placeholder="Title"]').type(exDetails);
    cy.get('button[type="submit"]').click();
  });

  it('should delete an item', () => {
    cy.get(':nth-child(6) > .mat-list-item-content').click()
  });

});
