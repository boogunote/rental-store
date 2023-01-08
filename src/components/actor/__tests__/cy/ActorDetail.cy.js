import ActorDetail from "../../ActorDetail.vue";

describe("<ActorDetail />", () => {
  it("renders", () => {
    cy.intercept("/api/v1/db/data/v1/test/Actor/*", {
      fixture: "actor.json",
    }).as("getActor");
    // see: https://test-utils.vuejs.org/guide/
    cy.mount(ActorDetail, {
      props: {
        id: "1",
      },
    });
  });
});
