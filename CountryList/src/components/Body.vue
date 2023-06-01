<script setup>
import { RouterLink } from "vue-router";

import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";

const { result } = useQuery(gql`
  query getUsers {
    countries {
      emoji
      name
    }
  }
`);
</script>
<template>
  <div class="px-20 py-10 flex flex-wrap gap-7">
    <RouterLink
      :to="`/country/${country.code}`"
      v-for="country of result.countries"
      class="border-black border-4 w-40 h-32 rounded-2.5r flex flex-col justify-center items-center flex-wrap"
    >
      <p
        class="border-black border-2 w-4/5 h-3/5 rounded-3xl flex justify-center items-center"
      >
        {{ country.emoji }}
      </p>
      <h2>{{ country.name }}</h2>
    </RouterLink>
  </div>
</template>
<style scoped></style>
