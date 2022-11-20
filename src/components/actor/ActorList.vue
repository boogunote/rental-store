<template>
  <v-simple-table class="float-left pt-4">
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">FirstName</th>
          <th class="text-left">LastName</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in list" :key="item.FirstName">
          <td>
            <router-link :to="`/actor/` + item.ActorId">{{
              item.FirstName
            }}</router-link>
          </td>
          <td></td>
          <td>{{ item.LastName }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script lang="ts">
import { getRentalStoreApi } from "@/utils/utils";
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  name: "ActorList",
  setup() {
    const list = ref([]);
    onMounted(async () => {
      const resp = await getRentalStoreApi().actorDbTableRowList({
        offset: 1,
        limit: 5,
        fields: "ActorId,FirstName,LastName",
      });
      if (resp.data.list) {
        list.value = resp.data.list as [];
      }
    });
    return {
      list,
    };
  },
});
</script>

<style lang="scss" scoped></style>
