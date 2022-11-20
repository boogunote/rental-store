<template>
  <v-container>
    <h1>演员详情</h1>
    <v-row class="pt-4">名字:{{ name }}</v-row>
    <v-table>
      <thead>
        <tr>
          <th class="text-left">参演电影</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in actor['Film List']"
          :key="item.name"
          class="text-left"
        >
          <td>
            <router-link :to="`/film/` + item.FilmId">{{
              item.Title
            }}</router-link>
          </td>
        </tr>
      </tbody>
    </v-table>
  </v-container>
</template>

<script lang="ts">
import { getRentalStoreApi } from "@/utils/utils";
import { onMounted, ref } from "vue";
export default {
  name: "ActorDetail",
  props: {
    id: String,
  },
  setup(props) {
    const actor = ref({} as any);
    onMounted(async () => {
      if (!props.id) return;
      const resp = await getRentalStoreApi().actorRead(props.id);
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
