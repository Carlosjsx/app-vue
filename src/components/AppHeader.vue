<script setup lang="ts">
    import {ref} from 'vue';

    const menu = ref(false);

    function exibirMenuMobile(){
        menu.value = !menu.value;
    }
</script>

<template>
    <header>
        <nav class="navbar">
            <div>
                <router-link class="brand" to="/">
                    <span class="material-symbols-outlined">stacks</span>
                    <p>
                        Vue.TS
                    </p>

                </router-link>
            </div>

            <ul class="menu" :class="{'ativo':menu}">
                <li>
                    <router-link to="/" @click="exibirMenuMobile" class="link">Home</router-link>
                </li>
                <li>
                    <router-link to="/login" @click="exibirMenuMobile" class="link">Entrar</router-link>
                </li>
                <li>
                    <router-link to="/cadastro" @click="exibirMenuMobile" class="link">Cadastrar</router-link>
                </li>
            </ul>
            <button class="btn-ham" @click="exibirMenuMobile">
                <span class="material-symbols-outlined">
                    {{ menu ? 'close' : 'menu' }}
                </span>
            </button>
        </nav>
    </header>
</template>

<style scoped lang="scss">
@import "../styles/appHeader.scss";
</style>