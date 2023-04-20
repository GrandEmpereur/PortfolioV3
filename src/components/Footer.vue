<script setup>
import IconCircle from '../assets/icons/IconCircle.vue';

</script>
<template>
    <div class="footer-container u-flex justify-content-between align-items-center">
        <div class="footer-left"> 
            <h3>
                INDEPENDENT Full stack DEVELOPER
            </h3>
        </div>

        <div class="footer-center u-flex justify-content-between align-items-start">
            <div class="footer-center__info u-flex gap-xl">
                <div>
                    <ul>
                        <li>
                            <IconCircle />
                            Completed
                        </li>
                        <li>
                            <IconCircle />
                            Type
                        </li>
                        <li>
                            <IconCircle />
                            Role
                        </li>
                        <li>
                            <IconCircle />
                            Client
                        </li>
                    </ul>
                </div>

                <div>
                    <ul>
                        <li>April 20221</li>
                        <li>School Project</li>
                        <li>BackEnd Développer</li>
                        <li>School</li>
                    </ul>
                </div>
            </div>

            <div class="projectShow">
                <div>
                    <a href="">
                        <img src="../assets/icons/footerMenuIcon.svg" alt="footerMenuIcon">
                    </a>
                </div>
                <span>Explore</span>
                <div></div>
            </div>

            <div class="footer-center__stack u-flex gap-xl">
                <div>
                    <ul>
                        <li>
                            <IconCircle />
                            Name
                        </li>
                        <li>
                            <IconCircle />
                            Language
                        </li>
                    </ul>
                </div>

                <div>
                    <ul>
                        <li>cc</li>
                        <li>HTML | Css | JS</li>
                    </ul>
                </div>
            </div>
        </div>

        <div>
            <ul>
                <li><a href="">Email</a></li>
                <li><a href="">GitHub</a></li>
                <li><a href="">LinkedIn</a></li>
                <li><a href="">Instagram</a></li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss">
.footer-container {
    padding: 0 130px 40px 130px ;

    .footer-left{
        h3{
            font-family: 'Nunito';
            font-style: normal;
            font-weight: 600;
            font-size: 9px;
            line-height: 19px;

            text-transform: uppercase;

            color: #DAB967;
        }
    }


    .footer-center {
        width: 674px;

        &__info {
            font-family: 'Fira Sans Condensed';
            font-style: normal;
            font-weight: 700;
            font-size: 9px;
            line-height: 10px;
            /* identical to box height, or 111% */

            text-transform: uppercase;

            color: #DAB967;
            ::before {
                contain: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg>';
            }
        }

        .projectShow{
            font-family: 'Fira Sans Condensed';
            font-style: normal;
            font-weight: 700;
            font-size: 9px;
            line-height: 10px;
            /* identical to box height, or 111% */

            text-transform: uppercase;

            color: #DAB967;
        }

        &__stack {
            font-family: 'Fira Sans Condensed';
            font-style: normal;
            font-weight: 700;
            font-size: 9px;
            line-height: 10px;
            /* identical to box height, or 111% */

            text-transform: uppercase;

            color: #DAB967;
        }
    }
}

</style>