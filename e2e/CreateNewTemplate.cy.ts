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

    // save to home dir
    cy.get('button[data-cy=save-this-template]').click();
    cy.get('span[data-cy=file-picker-node-name]').contains('home').dblclick();
    cy.get('span[data-cy=file-picker-node-name]').contains(Cypress.env('username')).dblclick();
    cy.get('button[data-cy=file-picker]').click();  // save
    // cy.get('button[data-cy=close-file-picker-dialog]').click();  // close without saving
  });

  it('Insert text and image in the first block', () => {
    const textToInsert = 'some text';
    cy.get('span[class="tree-node-label ml-1"]').contains('Block').click().type(textToInsert);
    
    // insert image on the same line
    cy.get('div[data-cy=palette-btn-image]').drag('div[class*=fo-block]');
    cy.get('div[class*=fo-external-graphic]').dblclick();
    cy.get('span[data-cy=file-picker-node-name]').contains('Invoice').dblclick();
    cy.get('span[data-cy=file-picker-node-name]').contains('img').dblclick();
    cy.get('span[data-cy=file-picker-node-name]').contains('infinicamobile_logo.png').dblclick();    
  });

  it('Insert list with 3 items in the new block', () => {
    // nie je jasne, ci to ma byt v novom bloku
    cy.get('div[data-cy=palette-btn-block]').drag('div[class*=fo-page-content]');
    cy.get('div[class*=fo-block]').eq(1).as('second-block');
    cy.get('@second-block').click().type('a{enter}b{enter}c');
  });

  it('Insert 2x2 table', () => {
    cy.get('div[data-cy=palette-btn-table]').drag('div[class*=fo-page-content]');
    cy.get('div[data-cy=more-options]').click();
    cy.get('input[data-cy=rows-nr]').clear().type('2');
    cy.get('input[data-cy=cols-nr]').clear().type('2');
    cy.get('button[data-cy=create-btn]').click();
    
    cy.get('div[class*=fo-table-cell]').not('div[class*=filler]').eq(0).as('table-row1-col1');
    // cy.get('div[class*=fo-table-cell]').not('div[class*=filler]').eq(1).as('table-row1-col2');
    // cy.get('div[class*=fo-table-cell]').not('div[class*=filler]').eq(2).as('table-row2-col1');
    // cy.get('div[class*=fo-table-cell]').not('div[class*=filler]').eq(3).as('table-row2-col2');

    cy.get('div[data-cy=palette-btn-comment]').drag('@table-row1-col1');
    // dalsie uz nechcu fungovat
    // cy.get('div[data-cy=palette-btn-comment]').drag('@table-row1-col2');
    // cy.get('div[data-cy=palette-btn-comment]').drag('@table-row2-col1');
    // cy.get('div[data-cy=palette-btn-comment]').drag('@table-row2-col2');
    
    // fill comment element
    cy.get('div[data-cy=fo-comment]').rightclick();
    cy.get('button[data-cy=context-item-EDIT]').click();
    cy.get('textarea[data-cy=xpath-input]').type('comment1');
    cy.get('button[data-cy=xpath-editor-done]').click();
  });

  it('Save and close the template', () => {
    cy.get('button[data-cy=save-this-template]').click();
    cy.get('li[data-cy=editor-tab][class*=active] button[data-cy=close-button]').click();
  });

});
