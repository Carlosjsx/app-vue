<script setup lang="ts">
  import AppHeader from './components/AppHeader.vue';
  import Footer from './components/Footer.vue';
  </script>
  
  <template>
      <div id="app">
        <AppHeader />
        
        <router-view />
        <Footer />
      </div>
    </template>
    
 