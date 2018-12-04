<template>
    <router-link to="/">   
        <div class="logo" v-scroll-class:moveLogo=100>
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
               width="179.289px" height="146.544px" viewBox="0 0 179.289 146.544" enable-background="new 0 0 179.289 146.544"
               xml:space="preserve">
                <g>
                  <g>
                    <path class="path cowhorn" fill-rule="evenodd" clip-rule="evenodd" fill="white" d="M55.29,35.754c-4.228-2.44-8.109-5.426-11.532-8.852
                      c-3.434-3.434-6.433-7.312-8.866-11.539l-16.095,9.282c3.255,5.644,7.252,10.811,11.815,15.382
                      c4.588,4.575,9.737,8.554,15.376,11.814c10.943,6.328,23.629,9.945,37.161,9.945V43.212C72.999,43.212,63.478,40.503,55.29,35.754
                      L55.29,35.754z"/>
                    <path class="path cowface" opacity="1" fill-rule="evenodd" clip-rule="evenodd" fill="#CCC4D5" d="M114.724,108.893v3.713
                      c0,10.26-8.32,18.574-18.582,18.574v-18.574v-3.713V93.111v-9.285v-9.289c15.863,0,30.727-4.242,43.527-11.643l9.291,16.084
                      c-10.418,6.027-21.963,10.334-34.236,12.504V108.893L114.724,108.893z"/>
                    <path class="path cowface" opacity="1" fill-rule="evenodd" clip-rule="evenodd" fill="#CCC4D5" d="M83.149,108.893v3.713v18.574
                      c-10.265,0-18.581-8.314-18.581-18.574v-3.713v-17.41c-12.276-2.17-23.821-6.477-34.237-12.504l9.276-16.084
                      c12.814,7.4,27.676,11.643,43.542,11.643v9.289v9.285V108.893L83.149,108.893z"/>
                    <path class="path cowhorn" fill-rule="evenodd" clip-rule="evenodd" fill="white" d="M124.011,35.754c4.215-2.44,8.111-5.426,11.533-8.852
                      c3.422-3.434,6.42-7.312,8.855-11.539l16.092,9.282c-3.252,5.644-7.238,10.811-11.814,15.382
                      c-4.572,4.575-9.736,8.554-15.377,11.814c-10.928,6.328-23.627,9.945-37.158,9.945V43.212
                      C106.291,43.212,115.81,40.503,124.011,35.754z"/>
                  </g>
                </g>
            </svg>
        </div>
    </router-link>
</template>


<script>
    import VueScrollClass from 'vue-scroll-class'
    
    export default {
      name: 'app',
      directives: {
        'scroll-class': VueScrollClass,
      }
    }
</script>


<style scoped>
    .logo.moveLogo, 
    .showmenu .logo {
        width: 80px;
        height: 80px;
        top: 30px;
        left: 30px;
        right: auto;
        background: #5C3977;
        z-index: 5;
        opacity: 1;
    }

        .logo.moveLogo .path.cowhorn,
        .showmenu .logo .path.cowhorn {
            fill: white;
        }

        .logo.moveLogo .path.cowface,
        .showmenu .logo .path.cowface {
            fill: #CCC4D5;
        }
    
    @media (max-width: 768px) {
        .logo.moveLogo, 
        .showmenu .logo {
            top: 0;
            left: 0;
        }
    }
    
    @media (min-width: 768px) {
        .logo {
            width: 1400px;
            height: 1400px;
            top: -400px;
            right: -400px;
            left: auto;
            z-index: 1;
            opacity: .7;
        }

            .logo svg {
                background: transparent;
            }

            .logo .path.cowhorn {
                fill: #5C3977;
            }

            .logo .path.cowface {
                fill: #78638F;
            }
    }
</style>
