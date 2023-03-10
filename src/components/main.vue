<script>
import mainPage from '../pages/mainPage.vue'
import animeSerialCard from '../pages/animeSerialCard.vue'
import notFoundPage from '../pages/notFoundPage.vue'
export default {
    data() {
        return {

        }
    },
    components: {
        mainPage,
        animeSerialCard,
        notFoundPage,
    }
}
</script>

<template>
    <main>
        <router-view>
        </router-view>
    </main>
</template>

<style scoped>
main{
    margin-top: 98px;
    min-height: 100vh;
}
</style>