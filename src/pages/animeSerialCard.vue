<script>
import axios from 'axios'
export default {
    data() {
        return {
            anime_arr: [],
            id: '',
            isFind: true,
        }
    },
    computed: {
    },
    mounted() {
        this.id = this.$route.params.id

        axios.get(`https://kodikapi.com/search?token=f0c645eb1ff13aba4c20cbd022384bf7&id=${this.id}&with_material_data=true`)
            .then(response => {
                this.anime_arr = response.data.results
            })
            .catch(error => {
                console.log(error)
                this.isFind = false
            })
    },
}
</script>

<template>
    <div v-if="isFind">
        <section class="section_anime_card">
            <div class="container">
                <h3 class="section_anime_card_title" v-for="item in anime_arr">{{ item.material_data.anime_title }}</h3>
                <div class="wrapper">
                    <div class="section_anime_card_item">
                        <div class="anime_img">
                            <img v-for="item in anime_arr" :src="item.material_data.poster_url" alt="">
                            <span v-for="item in anime_arr" class="rating"><span class="rating_value">{{
                                item.material_data.shikimori_rating }}</span></span>
                            <div class="btn_add_to_list">
                                Добавить в список
                                <span class="btn_add_to_list_arr">
                                    <i class='bx bx-chevron-down bx-sm'></i>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="description_right">
                        <ul>
                            <li class="description_right_li" v-for="item in anime_arr"><span
                                    class="description_right_title">Название в оригинале:</span><span
                                    class="description_right_description">{{ item.title_orig }}</span></li>
                            <li class="description_right_li" v-for="item in anime_arr"><span
                                    class="description_right_title">Описание:</span><span
                                    class="description_right_description">{{ item.material_data.description }}</span></li>
                            <li class="description_right_li" v-for="item in anime_arr"><span
                                    class="description_right_title">Тип:</span><span
                                    class="description_right_description">{{ item.type }}</span></li>
                            <li class="description_right_li" v-for="item in anime_arr"><span
                                    class="description_right_title">Год выпуска:</span><span
                                    class="description_right_description">{{ item.year }}</span></li>
                            <li class="description_right_li" v-for="item in anime_arr"><span
                                    class="description_right_title">Жанры:</span><span
                                    v-for=" child in item.material_data.anime_genres"
                                    class="description_right_description">{{ child }}</span></li>
                            <li class="description_right_li" v-for="item in anime_arr"><span
                                    class="description_right_title">Страна производства:</span><span
                                    v-for="child in item.material_data.countries" class="description_right_description">{{
                                        child }}</span></li>
                            <li class="description_right_li" v-for="item in anime_arr"><span
                                    class="description_right_title">Производитель:</span><span
                                    v-for="child in item.material_data.anime_studios"
                                    class="description_right_description">{{ child }}</span></li>
                            <li class="description_right_li" v-for="item in anime_arr"><span
                                    class="description_right_title">Режисер:</span><span
                                    v-for="child in item.material_data.producers" class="description_right_description">{{
                                        child }}</span></li>
                            <li class="description_right_li" v-for="item in anime_arr"><span
                                    class="description_right_title">Дата выхода в прокат:</span><span
                                    class="description_right_description">{{ item.material_data.premiere_world }}</span>
                            </li>
                            <li class="description_right_li" v-for="item in anime_arr"><span
                                    class="description_right_title">Дата следующей серии:</span><span
                                    class="description_right_description">{{ item.material_data.next_episode_at }}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <section class="anime_episodes">
            <div class="container">
                <div class="vidio_player">
                    <iframe id="kodik-player" v-for="item in anime_arr" :src="item.link" width="100%" height="500px"
                        frameborder="0" allowfullscreen allow="autoplay *; fullscreen *"></iframe>
                </div>
            </div>
        </section>
    </div>
    <div v-else>
        <div class="container">
            <p class="error">
                По вашему запросу
                <span class="error_id"> "{{ id }}"</span> не найден
                <router-link class="error_back" to="/">вернуться</router-link>
            </p>
        </div>
    </div>
</template>

<style scoped>
.section_anime_card_title {
    color: #fff;
    margin-bottom: 20px;
    font-size: 24px;
    font-weight: 400;
}

.section_anime_card_item img {
    width: 290px;
    height: 416px;
    border-radius: 10px;
    object-fit: cover;
}

.anime_img {
    margin-right: 40px;
    position: relative;
}

.section_anime_card_item {
    display: flex;
}

.btn_add_to_list_arr {
    display: block;
    position: absolute;
    top: 8px;
    right: 20px;
}

.vidio_player {
    margin-top: 30px;
}

#kodik-player {
    border-radius: 10px;
}

.screen_ul_img {
    max-width: 200px;
    min-width: 200px;
    max-height: 120px;
    object-fit: cover;
    margin-right: 15px;
}

.error {
    font-size: 18px;
    color: #fff;
}

.error_back {
    color: #007DFFDE;
}

.error_id {
    color: rgb(163, 163, 163);
}

.wrapper {
    display: flex;
}

.description_right_title {
    font-size: 17px;
    color: rgb(143, 143, 143);
    min-width: 220px;
    max-width: 220px;
    margin-right: 20px;
}

.description_right_description {
    font-size: 17px;
    font-weight: 300;
    color: #fff;
}

.description_right_description::after {
    content: ',';
    margin-right: 8px;
}

.description_right_description:last-child:after {
    content: '';
}

.description_right_li {
    display: flex;
    margin-bottom: 11px;
}

.description_right {
    white-space: nowrap;
    overflow: hidden;
}
</style>