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
      places: [],
    };
  },
  methods: {
    addPlace() {
      this.places.push({
        title: "",
        description: "",
        image: "",
        notes: "",
        rating: "",
        is_complete: false
      })
    },
    async createTrip() {
      const newTrip = {
        title: this.title,
        description: this.description,
        start_date: this.startDate,
        end_date: this.endDate,
        places: this.places,
      };
      const response = await axios
        .post('http://127.0.0.1:8000/api/trips', newTrip);
      this.$router.push(`/trip`);
    },
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
        <textarea v-model="description" class="form-control" name="description" id="description" rows="3"></textarea>
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

      <div v-for="(place, index) in places" :key="index">
        <h3>{{ index + 1 }} Tappa</h3>

        <div class="mb-3">
          <label for="place-name" class="form-label">Nome della tappa</label>
          <input v-model="place.title" type="text" class="form-control" name="place-name" id="place-name"
            aria-describedby="helpId" required />
        </div>
        <div class="mb-3">
          <label for="place-description" class="form-label">Descrizione della tappa</label>
          <textarea v-model="place.description" class="form-control" name="place-description" id="place-description"
            rows="3"></textarea>
        </div>
        <div class="mb-3">
          <label for="place-img" class="form-label">Aggiungi il link di una immagine</label>
          <input v-model="place.image" type="text" class="form-control" name="place-img" id="place-img"
            aria-describedby="place-img" />
        </div>
        <div class="mb-3">
          <label for="placeNotes" class="form-label">Note</label>
          <textarea v-model="place.notes" class="form-control" name="placeNotes" id="placeNotes" rows="3"></textarea>
        </div>
        <div class="mb-3">
          <label for="placeRating" class="form-label">Inserisci un voto da 1 a 5</label>
          <input v-model="place.rating" type="number" class="form-control" name="placeRating" id="placeRating"
            aria-describedby="helpId" min="0" max="5" />
        </div>
        <div class="form-check mb-3">
          <label class="form-check-label" for="place-completed"> Completato </label>
          <input v-model="place.is_complete" class="form-check-input" type="checkbox" value="" id="place-completed" />
        </div>
      </div>

      <button @click.prevent="addPlace" class="btn btn-dark mx-2">
        Aggiungi posto
      </button>

      <button type="submit" class="btn btn-primary">
        Crea viaggio
      </button>
    </form>

  </div>

</template>

<style></style>
