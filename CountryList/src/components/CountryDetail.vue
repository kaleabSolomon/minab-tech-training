<script setup>
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";

const { result } = useQuery(gql`
  query getUsers {
    countries(filter: { code: { eq: "ET" } }) {
      code
      name
      emoji
      capital
      currency
      phone
    }
  }
`);
console.log(result.value);
</script>
<template>
  <div class="w-screen h-full flex flex-col justify-center items-center">
    <h1>Ethiopia Flag</h1>
    <!-- <p><span>Name:</span>{{ country.name }}</p>
    <p><span>Capital:</span>{{ country.capital }}</p>
    <p><span>Phone:</span>{{ country.phone }}</p>
    <p><span>Currency:</span>{{ country.currency }}</p> -->
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
