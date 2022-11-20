import ActorDetailView from "../ActorDetailView.vue";

describe("<ActorDetailView />", () => {
  it("renders", () => {
    // see: https://test-utils.vuejs.org/guide/
    cy.mount(ActorDetailView, {
      props: {
        id: "1",
      },
    });
  });
});
