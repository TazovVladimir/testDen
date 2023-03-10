<script>
import axios from 'axios'
import sliders from '../components/slider.vue'
export default {
    data() {
        return {
            anime_arr: [],
            btn_show_pagination_value: 10,
            isBtn_show_pagination: true,
            isPreload: true
        }
    },
    mounted() {

    },
    components: {
        sliders
    },
    methods: {
        btn_show_pagination() {
            if (this.btn_show_pagination_value <= 40) {
                this.btn_show_pagination_value += 10
                if (this.btn_show_pagination_value == 40) {
                    this.isBtn_show_pagination = false
                }
                this.isPreload = true
            }
        }
    },
    computed: {
        getData() {
            axios.get(`https://kodikapi.com/list?token=f0c645eb1ff13aba4c20cbd022384bf7&types=anime-serial&with_material_data=true&limit=${this.btn_show_pagination_value}`)
                .then(response => {
                    this.isPreload = false
                    this.anime_arr = response.data.results;
                });
            return this.anime_arr
        }
    },
    mounted() {

    }
}
</script>

<template>
    <sliders></sliders>
    <section class="section_main">
        <div class="main_options">
            <div class="container">
                <ul class="main_options_wrapper">
                    <li class="main_options_item">
                        Жанры
                    </li>
                    <li class="main_options_item">
                        Жанры
                    </li>
                    <li class="main_options_item">
                        Жанры
                    </li>
                    <li class="btn">Искать</li>
                </ul>
            </div>
        </div>
        <div class="anime_films_wrapper">
            <div class="container">
                <div class="preload" v-if="isPreload">
                    <span class="preload_item">
                        <i class='bx bx-loader-alt bx-spin bx-lg'></i>
                    </span>
                </div>
                <ul class="card_anime_films">
                    <router-link :to="`/anime-card/${item.id}`" tag="li" class="card_anime_films_item"
                        v-for="item in getData" :key="item.id">
                        <img class="card_anime_films_item_img" :src="item.material_data.poster_url" alt="">
                        <span class="rating"><span class="rating_value">{{
                            item.material_data.shikimori_rating }}</span></span>
                        <span class="card_anime_films_item_span_title">
                            {{ item.material_data.title }}
                        </span>
                    </router-link>
                </ul>
                <div class="btn_show_pagination">
                    <div v-if="isBtn_show_pagination" @click="btn_show_pagination" class="btn">Показать еще 10</div>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
.main_options {
    background-color: #272727;
    width: 100%;
    padding: 20px 0;
    color: #fff;
    font-weight: 300;
    font-size: 16px;
}

.main_options_wrapper {
    display: flex;
    align-items: center;
}

.main_options_item {
    margin-right: 30px;
}

.main_options_item:hover {
    cursor: pointer;
}

.card_anime_films {
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(5, 215px);
    grid-column-gap: 30px;
    grid-row-gap: 110px;
    margin-bottom: 100px;
}

.card_anime_films_item {
    height: 350px;
    transition: transform 400ms ease;
    position: relative;
}

.card_anime_films_item:hover {
    cursor: pointer;
    transform: scale(1.012, 1.012);
}

.card_anime_films_item_span_title {
    display: block;
    color: #fff;
    font-size: 16px;
    font-weight: 200;
    margin-top: 10px;
}

.card_anime_films_item_img {
    border-radius: 10px;
    /* min-width: 100%; */
    min-width: 215px;
    max-width: 215px;
    height: 100%;
    object-fit: cover;
}

.btn_show_pagination {
    height: 38px;
    width: 250px;
    margin: 0 auto;
}

.btn_show_pagination .btn {
    text-align: center;
}



.anime_films_wrapper {
    position: relative;
}
</style>