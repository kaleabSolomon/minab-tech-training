<script setup>
import { useQuery } from "@vue/apollo-composable";
import { RouterLink } from "vue-router";
import gql from "graphql-tag";

const { result } = useQuery(gql`
  query getUsers {
    countries {
      code
      emoji
      name
    }
  }
`);
// console.log(result.value.countries);
</script>
<template>
  <div class="px-20 py-10 flex flex-wrap gap-7">
    <RouterLink
      v-for="country in result.countries"
      :to="`/country/${country.code}`"
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
