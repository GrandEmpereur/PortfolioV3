<template>
    <div :router="true" class="menu u-flex justify-content-between align-items-center u-pad-t-l">

        <div index="/">
            <img src="../assets/icons/logoGE.svg" alt="">
        </div>

        <div class="project-numbers u-flex justify-content-between align-items-center">
            <img src="../assets/images/nav.svg" alt="">
            <div class="u-flex justify-content-around align-items-center">
                <span>10</span>
                <span>30</span>
            </div>
            <img src="../assets/images/nav.svg" alt="">
        </div>

        <div index="/about">
            <span>About</span>
        </div>

    </div>
</template>

<style lang="scss">
.menu {
    padding: 40px 130px ;
    color: var(--color-primary) ;

}

.project-numbers{
    width: 569px;

    >div {
        width: 126px;
    }
}

</style>