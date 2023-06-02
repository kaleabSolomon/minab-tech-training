<script setup>
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { useRoute } from "vue-router";

const route = useRoute();

const countryCode = route.params.id;
console.log(typeof countryCode, countryCode);

const { result } = useQuery(gql`
  query getUsers {
    countries(filter: { code: { eq: countryCode } }) {
      code
      name
      emoji
      capital
      currency
      phone
    }
  }
`);
console.log(result);
</script>
<template>
  <div class="w-screen h-full flex flex-col justify-center items-center">
    <h1>Ethiopia Flag</h1>
    <p><span>Name:</span>Ethiopia</p>
    <p><span>Capital:</span>Adiss Abeba</p>
    <p><span>Phone:</span>+251</p>
    <p><span>Currency:</span>Birr</p>
  </div>
</template>
<style scoped>
span {
  font-weight: bold;
}
p {
  font-size: 1.5rem;
}
</style>
