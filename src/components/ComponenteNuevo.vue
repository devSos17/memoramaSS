<template>
  <div class="hello">Soy un proyecto: {{ algo }}</div>
</template>

<script setup>
import { onBeforeMount, ref } from "vue";

const algo = ref();

onBeforeMount(async() => {
  let data = await window.api.test();
  console.log("Componente:", { data });
  algo.value = data;
});
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
