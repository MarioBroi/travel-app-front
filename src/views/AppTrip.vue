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
    <h2>Trips</h2>
    <div v-for="trip in trips">
        {{ trip.title }}
        <br>
        {{ trip.description }}
    </div>
</template>