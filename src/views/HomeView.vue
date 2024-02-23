<template>
    <div>
        <h1>Home {{ counter }}</h1>
        <div class="w-25">
            <Button @click="increment">Toggle</Button>
            <Button @click="dincrement">Toggle</Button>
        </div>
    </div>
</template>
<script>
import Button from '@/Ui-components/Button.vue';

export default {
    components: { Button },
    methods:{
        increment(){
            this.$store.commit('increment')
        },
        dincrement(){
            this.$store.commit('dincrement')
        }
    },
    computed:{
       counter(){
        return this.$store.state.count
       } 
    }
}
</script>
<style scoped></style>