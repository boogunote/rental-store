<template>
  <ActorDetail :id="id" />
</template>

<script lang="ts">
import ActorDetail from "@/components/actor/ActorDetail.vue";

export default {
  name: "ActorDetailVew",
  components: {
    ActorDetail,
  },
  created() {},
  data() {
    return {};
  },
  props: {
    id: String,
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
