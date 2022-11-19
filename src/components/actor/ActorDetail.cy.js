import ActorDetail from "./ActorDetail.vue";

describe("<ActorDetail />", () => {
  it("renders", () => {
    // see: https://test-utils.vuejs.org/guide/
    cy.mount(ActorDetail);
  });
});
