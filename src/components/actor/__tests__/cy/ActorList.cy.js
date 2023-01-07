import ActorList from "../ActorList.vue";

describe("<ActorList />", () => {
  it("renders", () => {
    // see: https://test-utils.vuejs.org/guide/
    cy.mount(ActorList);
  });
});
