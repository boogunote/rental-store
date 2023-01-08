<template>
  <div class="home-container">
    <ActorList @select-actor="onSelectActor" />
    <ActorDetail :id="currentActorId"></ActorDetail>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import ActorDetail from "@/components/actor/ActorDetail.vue";
import ActorList from "@/components/actor/ActorList.vue";

export default {
  name: "HomeView",
  components: {
    ActorList,
    ActorDetail,
  },
  data() {
    return {
      currentActorId: undefined as string | undefined,
    };
  },
  methods: {
    onSelectActor(actorId: number) {
      this.currentActorId = actorId.toString();
      console.log(actorId);
    },
  },
};
</script>

<style scoped>
.home-container {
  display: flex;
}
</style>
