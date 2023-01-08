import HomeView from "../../HomeView.vue";

describe("<HomeView />", () => {
  it("renders", () => {
    // see: https://test-utils.vuejs.org/guide/
    cy.mount(HomeView);
  });
});
