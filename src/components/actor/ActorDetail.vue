<template>
  <div>Name:{{ name }}</div>
</template>

<script lang="ts">
import api from "@/api/Api";
import { onMounted, ref } from "vue";
export default {
  name: "ActorDetail",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
  setup() {
    const actor = ref({} as any);
    onMounted(async () => {
      const resp = await api.actorRead(1);
      console.log(resp.data);
      actor.value = resp.data;
    });
    return {
      actor,
    };
  },
  computed: {
    name(): string {
      return this.actor.FirstName + " " + this.actor.LastName;
    },
  },
};
</script>

<style lang="scss" scoped></style>
