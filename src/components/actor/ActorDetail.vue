<template>
  <div>
    <h1>演员详情</h1>
    <v-row no-gutters>Name:{{ name }}</v-row>
    <v-row>
      <v-simple-table class="float-left pt-4">
        <template v-slot:default>
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
                <router-link :to="`/file/` + item.FilmId">{{
                  item.Title
                }}</router-link>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-row>
  </div>
</template>

<script lang="ts">
import { getRentalStoreApi } from "@/utils/utils";
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
      const resp = await getRentalStoreApi().actorRead("1");
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
