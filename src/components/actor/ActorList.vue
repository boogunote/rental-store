<template>
  <div>{{ list }}</div>
</template>

<script lang="ts">
import { getRentalStoreApi } from "@/utils/utils";
import { onMounted, ref } from "vue";

export default {
  name: "ActorList",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
  setup() {
    const list = ref([]);
    onMounted(async () => {
      const resp = await getRentalStoreApi().actorDbTableRowList({
        offset: 1,
        limit: 5,
        fields: "FirstName,LastName",
      });
      if (resp.data.list) {
        list.value = resp.data.list as [];
      }
    });
    return {
      list,
    };
  },
};
</script>

<style lang="scss" scoped></style>
