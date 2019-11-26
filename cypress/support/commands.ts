/// <reference types="Cypress" />
import config from './config'

export const init = () => {
  // Put in before() to do global setup things.
}

Cypress.Commands.add('init', init)

declare global {
  namespace Cypress {
    interface Chainable<Subject = any> {
      init(): typeof init
    }
  }
}
