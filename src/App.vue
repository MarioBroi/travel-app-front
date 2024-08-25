<script>
import { RouterLink } from 'vue-router';
import AppHome from './components/views/AppHome.vue';
import AppForm from './components/views/AppForm.vue';
import AppTrip from './components/views/AppTrip.vue';
import AppDay from './components/views/AppDay.vue';

export default {
  name: "App",
  components: {
    AppHome,
    AppForm,
    AppTrip,
    AppDay
  },
}
</script>

<template>
  <h1>Test</h1>
  <AppHome />
  <AppForm />
  <AppTrip />
  <AppDay />
</template>

<style></style>
