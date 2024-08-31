<script>
import axios from 'axios';

export default {
  name: 'AppForm',
  data() {
    return {
      title: '',
      description: '',
      startDate: '',
      endDate: '',
    };
  },
  methods: {
    async createTrip() {
      const newTrip = {
        title: this.title,
        description: this.description,
        start_date: this.startDate,
        end_date: this.endDate
      };
      const response = await axios
        .post('http://127.0.0.1:8000/api/trips', newTrip);
      this.$router.push(`/trip`);
    }
  }
};
</script>

<template>

  <div class="container">

    <h1 class="mt-4">Compila il form per creare il tuo nuovo viaggio</h1>

    <form @submit.prevent="createTrip">
      <div class="mb-5">
        <label for="title" class="form-label">Titolo del viaggio</label>
        <input v-model="title" type="text" class="form-control" name="title" id="title" aria-describedby="title"
          required />
      </div>

      <div class="mb-5">
        <label for="description" class="form-label">Descrizione</label>
        <textarea v-model="description" class="form-control" name="description" id="description" rows="3"
          required></textarea>
      </div>

      <div class="mb-5">
        <label for="startDate" class="form-label">Giorno di inizio</label>
        <input v-model="startDate" type="date" class="form-control" name="startDate" id="startDate"
          aria-describedby="startDate" required />
      </div>

      <div class="mb-5">
        <label for="endDate" class="form-label">Giorno di inizio</label>
        <input v-model="endDate" type="date" class="form-control" name="endDate" id="endDate" aria-describedby="endDate"
          required />
      </div>

      <button type="submit" class="btn btn-primary" @click="createTrip()">
        Crea viaggio
      </button>
    </form>

  </div>

</template>

<style></style>
