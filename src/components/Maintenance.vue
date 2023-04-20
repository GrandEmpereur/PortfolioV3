<template>
    <div class="container">
        <div class="logo">
            <img src="../assets/icons/logoGE.svg" alt="">
        </div>

        <span class="title">
            Work In Progress ...
        </span>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.container {
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;

    .logo img {
        width: 500px;
        height: 380px;
        margin-bottom: 100px;

        @media (max-width: 768px) {
            width: 300px;
            height: 230px;
            margin-bottom: 50px;
        }
    }

    .title {
        font-size: 100px;
        font-weight: bold;
        font-family: 'Amaranth';
        text-transform: Uppercase;

        // tablet
        @media (max-width: 1024px) {
            font-size: 70px;
        }

        // mobile
        @media (max-width: 768px) {
            font-size: 30px;
        }
    }
}
</style>