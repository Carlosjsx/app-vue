<script setup lang="ts">

</script>

<template>
    <header>
        <nav>
            <div>
                <router-link to="/">
                    🚀 Vue.TS
                </router-link>
            </div>

            <ul>
                <li>
                    <router-link to="/" class="link">Home</router-link>
                </li>
                <li>
                    <router-link to="/login" class="link">Entrar</router-link>
                </li>
                <li>
                    <router-link to="/cadastro" class="link">Cadastrar</router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<style scoped>
link {
    cursor: pointer;
}
</style>