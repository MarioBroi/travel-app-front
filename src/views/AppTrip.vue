<script>
import axios from 'axios';

export default {
    name: 'AppTrip',
    data() {
        return {
            trips: [],
        }
    },
    mounted() {
        this.fetchData();
    },
    methods: {
        createUrl() {
            const url = this.base_api_url + trips_api
        },
        async fetchData() {
            try {
                // Fetch the user data
                const response = await axios.get('http://127.0.0.1:8000/api/trips');
                /* console.log(response.data); */
                this.trips = response.data;
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        },
    },
}
</script>

<template>

    <div class="container">
        <h2>Viaggi registrati</h2>
        <div class="row">
            <div class="col" v-for="trip in  trips ">
                <div class="card">
                    <div class="card-body">
                        <div class="card-title">
                            {{ trip.title }}
                        </div>
                        <div class="card-text">
                            <p>
                                Descrizione: {{ trip.description }}
                            </p>
                            <p>
                                Inizio: {{ trip.start_date }}
                            </p>
                            <p>
                                Fine: {{ trip.end_date }}
                            </p>
                            <div v-for="place, index in  trip.places ">
                                <h4>{{ index + 1 }} Tappa</h4>
                                <ul class="list-unstyled">
                                    <li>Nome tappa: {{ place.title }}</li>
                                    <li> Descrizione tappa: {{ place.description }} </li>
                                    <li>Immagine tappa: <img :src='place.image' alt=""></li>
                                    <li> Note tappa: {{ place.notes }}</li>
                                    <li>Voto tappa {{ place.rating }}</li>
                                    <li v-if="place.is_complited">
                                        Tappa completata
                                    </li>
                                    <li v-else>Tappa da completare</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>