<script setup>
import {ref, watch} from 'vue';

const email = ref('');
const senha = ref('');
const erroEmail = ref('');
const erroSenha = ref('');


const validarLogin=()=>{
    erroEmail.value="";
    erroSenha.value="";

    if(email.value.trim()===""){
        erroEmail.value="Campo obrigatório";
    }
    if(senha.value.trim()===""){
        erroSenha.value="Campo obrigatório";
    }
    if(!erroEmail.value && !erroSenha.value){
        alert("Bem vindo, pronto para login")
    }

    watch([email, senha],()=>{
        erroEmail.value=""
        erroSenha.value="";
    })
}


</script>

<template>

    <section>

        <div class="container">
            <div class="wrapper-main">
                <div class="box-banner-form">
                    <div class="banner-overlay">
                        <div class="tag-marca">
                            <span class="material-symbols-outlined">star</span>
                            <p>VueTS</p>
                        </div>
                        <h1>
                            Bem-vindo <br/> de volta!
                        </h1>
                        <p>
                            Acesse sua conta para gerenciar seus projetos, acompanhar métricas e colaborar com sua
                            equipe.

                        </p>
                        <div class="tag-effection">
                            <span>+2.500 usuários</span>
                            <span>já fazem parte da plataforma</span>
                        </div>
                        <footer>
                            <p class="copyright">© 2026 Carlos | Todos os direitos reservados.</p>
                        </footer>
                    </div>
                </div>
                <div class="box-formulario">
                    <form @submit.prevent="validarLogin" class="form" >
                        <h2>Área de Acesso</h2>
                        <p>Faço login no sistema para ter acesso aos serviços exclusivos</p>
                        <div class="group">
                            <label for="email">E-mail</label>
                            <input type="text" name="" id="email" placeholder="E-mail" v-model="email">
                            <span class="error">{{erroEmail}}</span>
                        </div>

                        <div class="group">
                            <label for="senha">Senha</label>
                            <input type="password" name="" id="senha" placeholder="Senha" v-model="senha">
                            <span class="error">{{ erroSenha }}</span>
                        </div>
                        <div class="group">
                            <button>Acessar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>


</template>

<style lang="scss" src="../styles/login.scss" scoped />