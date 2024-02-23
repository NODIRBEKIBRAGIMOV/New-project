<template>
    <div class="d-flex flex-column flex-md-row align-items-center px-3 py-2 mb-4 border-bottom">
        <RouterLink :to="{name: 'home'}" class="me-3 py-2 link-body-emphasis text-decoration-none"><a href="/"
                class="img d-flex align-items-center link-body-emphasis text-decoration-none">Aliy</a></RouterLink>

        <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
            <RouterLink :to="{name: 'login'}" class="me-3 py-2 link-body-emphasis text-decoration-none">Login</RouterLink>
            <RouterLink :to="{name: 'registor'}" class="me-3 py-2 link-body-emphasis text-decoration-none">Register</RouterLink>
        </nav>
    </div>
</template>
<script>
export default {
    data() {
        return {
        }
    }
}
</script>
<style scoped>
.img {
    border: 2px solid black;
    width: auto;
    font-size: 30px;
    padding: 0 35px;
    font-family: "Comfortaa", sans-serif;
    font-weight: 800;
}

a {
    font-family: "Comfortaa", sans-serif;
}</style>