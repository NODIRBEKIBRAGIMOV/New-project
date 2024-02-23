<template>
    <div class="text-center">
        <main class="form-signin w-25 m-auto mt-5">
            <form>
                <img class="" style="width: 250px; height: 150px;" src="../assets/ali-letter-logo.webp" alt="" width="72"
                    height="57">
                <h1 class="h3 mb-3 fw-normal">Login</h1>
                <Input :label="'Email address '" :type="'email'" />
                <Input :label="'Password'" :type="'password'" />
                <Button type="submit">Register</Button>
                <!-- <button class="btn btn-primary w-100 py-2 mt-3" type="submit">Sign in</button> -->
            </form>
        </main>
    </div>
</template>
<script>
import Button from '@/Ui-components/Button.vue';
import Input from '@/Ui-components/Input.vue';
export default {
    components: { Button, Input }
}
</script>
<style scoped></style>