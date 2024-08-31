<script>
import { RouterLink } from 'vue-router';

export default {
  name: "App",
}
</script>

<template>
  <header>
    <div class="container text-center mt-3">
      <RouterLink :to="{ name: 'Home' }" class="trip-link">Home</RouterLink>
      <RouterLink :to="{ name: 'AppForm' }" class="trip-link">Crea il viaggio</RouterLink>
      <RouterLink :to="{ name: 'AppTrip' }" class="trip-link">Vai al viaggio</RouterLink>
      <!--  <RouterLink :to="{ name: 'AppDay' }" class="trip-link">Vai al giorno</RouterLink> -->
    </div>
  </header>
  <main class="mt-3">
    <RouterView></RouterView>
  </main>
</template>

<style>
.trip-link {
  color: black;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  border: 1px solid black;
  border-radius: 15px;
  text-decoration: none;
}

.trip-link:hover {
  background-color: #545252;
  color: white;
  transition: 0.3s ease-in-out;
}
</style>
