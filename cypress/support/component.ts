// ***********************************************************
// This example support/component.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";

// Alternatively you can use CommonJS syntax:
// require('./commands')

// Vuetify 3
// Styles
// import "@mdi/font/css/materialdesignicons.css";
import "@/assets/main.css";
import router from "../../src/router";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { createMemoryHistory, createRouter } from "vue-router";

import { mount } from "cypress/vue";

// Augment the Cypress namespace to include type definitions for
// your custom command.
// Alternatively, can be defined in cypress/support/component.d.ts
// with a <reference path="./component" /> at the top of your spec.
declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
    }
  }
}

const vuetify = createVuetify({
  components,
  directives,
});

Cypress.Commands.add("mount", (MountedComponent: any, options) => {
  // const root: any = document.getElementById("__cy_vue_root");
  // debugger;
  // // Vuetify styling
  // if (!root.classList.contains("v-application")) {
  //   root.classList.add("v-application");
  // }
  // // Vuetify selector used for popup elements to attach to the DOM
  // root.setAttribute("data-app", "true");

  // Setup options object
  options = options || {};
  options.global = options.global || {};
  options.global.plugins = options.global.plugins || [];

  options.global.plugins.push(vuetify);

  // create router if one is not provided
  // eslint-disable-next-line no-debugger
  // debugger;
  if (!options.router) {
    options.router = createRouter({
      routes: router.options.routes,
      history: createMemoryHistory(),
    });
  }

  // Add router plugin
  options.global.plugins.push({
    install(app) {
      app.use(options.router);
    },
  });

  return mount(MountedComponent, options);
});

// Example use:
// cy.mount(MyComponent)
