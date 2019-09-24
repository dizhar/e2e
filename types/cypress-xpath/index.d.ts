import 'cypress-xpath';

declare global {
  namespace xpath {
    interface Chainable {
      xpath: (options?: any) => void;
    }
  }
}