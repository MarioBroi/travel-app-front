<script>
import { RouterLink } from 'vue-router';
import axios from 'axios';

export default {
    name: 'AppHome',
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
};
</script>

<template>
    <header class="header">
        <h1>Benvenuto in My Travel Planner!</h1>
        <p>Pianifica, organizza e gestisci ogni dettaglio del tuo viaggio in un'unica piattaforma.</p>
    </header>

    <main class="features">
        <div class="feature">
            <h2>Pianifica il tuo viaggio</h2>
            <p>Organizza ogni giornata del tuo viaggio, aggiungi tappe, curiosità, ristoranti e molto altro!</p>
            <RouterLink :to="{ name: 'AppForm' }" class="trip-link">Crea il viaggio</RouterLink>
        </div>
        <div class="feature">
            <h2>Visualizza su Mappa</h2>
            <p>Guarda le tue tappe su una mappa interattiva per seguire il percorso del tuo viaggio.</p>
        </div>
        <div class="feature">
            <h2>Tieni traccia della Progressione</h2>
            <p>Aggiungi note e valutazioni alle tappe durante il tuo viaggio per non dimenticare nulla.</p>
            <RouterLink :to="{ name: 'AppTrip' }" class="trip-link">Vai al viaggio</RouterLink>
        </div>
    </main>
</template>

<style>
.header {
    text-align: center;
    padding-bottom: 2rem;
    margin-top: 2rem;
}

.features {
    padding: 2rem;
    display: flex;


    .feature {
        margin: 5rem 0.8rem;
        padding: 1rem;
        border-radius: 10px;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

        p {
            padding-bottom: 1rem;
        }

        .trip-link {
            margin: 0;
            color: black;
            padding: 0.5rem 1rem;
            border: 1px solid black;
            text-decoration: none;
        }

        .trip-link:hover {
            background-color: #545252;
            color: white;
            transition: 0.3s ease-in-out;
        }
    }
}
</style>