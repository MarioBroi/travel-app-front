<script>
import { RouterLink } from 'vue-router';

export default {
  name: "App",
}
</script>

<template>
  <header>
    <RouterLink :to="{ name: 'Home' }" class="trip-link">Home</RouterLink>
    <RouterLink :to="{ name: 'AppForm' }" class="trip-link">Crea il viaggio</RouterLink>
    <RouterLink :to="{ name: 'AppTrip' }" class="trip-link">Vai al viaggio</RouterLink>
    <RouterLink :to="{ name: 'AppDay' }" class="trip-link">Vai al giorno</RouterLink>

  </header>
  <main>
    <RouterView></RouterView>
  </main>
</template>

<style>
.trip-link {
  color: black;
  padding: 1rem 2rem;
  border: 1px solid black;
  text-decoration: none;
}

.trip-link:hover {
  background-color: #545252;
  color: white;
  transition: 0.3s ease-in-out;
}
</style>
