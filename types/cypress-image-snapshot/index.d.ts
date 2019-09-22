 import 'Cypress';

declare global {
  namespace Cypress {
    interface Chainable {
      matchImageSnapshot: (options?: any) => void;
    }
  }
}