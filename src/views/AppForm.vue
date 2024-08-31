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
      this.$router.push(`/trip/${response.data.id}`);
      window.location.reload();
    }
  }
};
</script>

<template>
  <h1>Compila il form per creare il tuo nuovo viaggio</h1>
  <form @submit.prevent="createTrip">
    <br>
    <input v-model="title" type="text" placeholder="Title" required />
    <br>
    <textarea v-model="description" placeholder="Description"></textarea>
    <br>
    <input v-model="startDate" type="date" required />
    <br>
    <input v-model="endDate" type="date" required />
    <br>
    <button type="submit" @click="createTrip()">Create Trip</button>
  </form>
</template>

<style></style>
