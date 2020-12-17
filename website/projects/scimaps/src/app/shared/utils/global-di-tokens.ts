import { InjectionToken } from '@angular/core';


export type GlobalThis = typeof globalThis;


// (Re)declare NodeJS global
declare var global: GlobalThis;


// Reexport document token from angular
export { DOCUMENT } from '@angular/common';

/**
 * A DI Token for the global window object
 */
export const WINDOW = new InjectionToken(
  'Global window object',
  {
    providedIn: 'root',
    /* istanbul ignore next This is really hard to test as it depends on the global environment */
    factory(): typeof globalThis {
      // This should pretty much always be available unless
      // we are running in some outdated environment
      if (typeof globalThis === 'object') {
        return globalThis;
      }

      // Check the common places for a global object
      if (typeof global === 'object') { // Node.js environment
        return global;
      } else if (typeof window === 'object') { // Browser environment
        return window;
      } else if (typeof self === 'object') { // Web worker environment
        return self;
      }

      // One last try - may fail depending on content security policy (CSP) settings
      return (new Function('return this;'))() as typeof globalThis;
    }
  }
);
