//import { SharedProps } from './shared/SharedProps';
//import { ContentManagement } from 'shared/helper.po';

describe('create new template', function () {
  before(() => {
    //AuthHelpers.loginBySingleSignOn('ATBPMA', 'bPMtesT');
  });
  //beforeEach(() => ContentManagement.beforeEachSetup());
  it('Navigate to Business Designer', () => {
    cy.visit('https://infinica-training.cloud.infinica.com/infinica-business-designer');
    cy.get('input[data-cy=username-input]').type(Cypress.env('username'))
    cy.get('input[data-cy=password-input]').type(Cypress.env('password'))
    cy.get('button[data-cy=login-btn').click();
    cy.get('div[data-cy=create-new-template-dashboard]').click();
    // file-picker-node-name
  });
});
