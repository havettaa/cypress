export class DesignerHelper {
  static cleanBackendData(equipmentNumber: string) {
    cy.request(
      'https://ms-bpm-test.azurewebsites.net' +
        equipmentNumber,
    )
      .its('status')
      .should('eq', 200);
  }

  static fillContactInformation(email: string) {
    cy.get('[data-cy=first_name]').type('John');
    cy.get('[data-cy=last_name]').type('Doe');
    cy.get('[data-cy=email]').type(email);
    cy.get('[data-cy=confirm_email]').type(email);
  }
}
