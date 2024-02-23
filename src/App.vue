<template>
  <div class="containers" >
    <Navbar/>
    <RouterView />
  </div>
</template>
<script>
import {Navbar} from '@/components/'
import { RouterView } from 'vue-router';
export default {
    components: { Navbar, RouterView }
}
</script>
<style scoped>
  
</style>