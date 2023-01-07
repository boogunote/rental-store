<template>
  <v-navigation-drawer permanent>
    <ActorList />
  </v-navigation-drawer>
</template>

<script lang="ts">
// @ is an alias to /src
import ActorList from "@/components/actor/ActorList.vue";

export default {
  name: "HomeView",
  components: {
    ActorList,
  },
};
</script>
