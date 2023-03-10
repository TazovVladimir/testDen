<script>
export default {
    data() {
        return {
            ifOut: 'true',
            posY: 0
        }
    },
    components: {

    },
    created() {
        window.addEventListener('scroll', this.handleScroll);
    },
    unmounted() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            if (scrollY > 250 && scrollY > this.posY) {
                this.ifOut = false
            }
            else {
                this.ifOut = true
            }
            this.posY = scrollY
        }
    }
}

</script>

<template>
    <header>
        <div class="main_header" id="main_header" :class="{ out: !ifOut }">
            <div class="container">
                <div class="header_logo_control_wrappper">
                    <div class="header_logo">
                        <router-link to="/home" class="header_logo_a">
                            <svg width="130" height="26" viewBox="0 0 156 26" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M0.82 26L12.16 0.799998H16.768L28.144 26H23.248L13.492 3.284H15.364L5.644 26H0.82ZM6.04 20.168L7.3 16.496H20.908L22.168 20.168H6.04ZM31.3488 26V0.799998H35.2008L51.0048 20.204H49.0968V0.799998H53.7408V26H49.8888L34.0848 6.596H35.9928V26H31.3488ZM60.4934 26V0.799998H65.1734V26H60.4934ZM94.9113 26V0.799998H99.5913V26H94.9113ZM106.407 26V0.799998H111.087V22.04H124.263V26H106.407ZM127.958 26V0.799998H131.81L142.826 19.196H140.81L151.646 0.799998H155.498L155.534 26H151.106L151.07 7.748H152.006L142.79 23.12H140.702L131.342 7.748H132.422V26H127.958Z"
                                    fill="white" />
                                <path
                                    d="M76.2735 12.392H88.8375V16.352H76.2735V12.392ZM76.6695 26H71.9895V0.799998H90.3855V4.724H76.6695V26Z"
                                    fill="#007DFF" />
                            </svg>
                        </router-link>
                    </div>
                    <ul class="header_logo_control">
                        <li>
                            <router-link to="/anime-serial" activeClass="header_logo_control_a_active" class="header_logo_control_a">
                                сериалы
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/anime-film" activeClass="header_logo_control_a_active" class="header_logo_control_a">
                                фильмы
                            </router-link>
                        </li>
                        <!-- <li class="header_search_wrapper">
                            <span class="header_search_el"><i class='bx bx-search'></i></span>
                            <input type="search" id="search" placeholder="Найти">
                        </li> -->
                    </ul>
                </div>
                <div class="btn_auth_wrapper">
                    <div class="btn">
                        войти
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<style scoped>
header{
    min-height: 100%;
}
.main_header {
    background-color: #171717;
    padding: 30px 0;
    display: flex;
    justify-content: space-between;
    position: fixed;
    top: 0;
    z-index: 999999;
    width: 100%;
    transition: all 300ms ease;
}

.container {
    display: flex;
    justify-content: space-between;
}

.header_logo_control_wrappper {
    display: flex;
    align-items: center;
}

.header_logo_control {
    margin-left: 60px;
    display: flex;
    align-items: center;
}

.header_logo_control_a {
    color: #fff;
    transition: color 300ms ease;
    font-weight: 300;
    font-size: 19px;
    margin-right: 20px;
}


.header_logo_control_a:hover {
    color: #5baaff;
}
.header_logo_control_a_active {
    color: #5baaff;
}

.header_logo_a:hover {
    opacity: 70%;
}

.header_search_wrapper {
    position: relative;
}

.out {
    transform: translateY(-100%);
}</style>