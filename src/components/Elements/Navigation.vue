<template>
    <section v-bind:class="{ showmenu: showMenu }">
        
        <div @click="showMenu = false">
            <router-view name="logo"></router-view>
        </div>
        
        <div class="title-overlay" v-scroll-class:showtitleoverlay=450></div>
        
        <div class="menu-overlay" @click="showMenu = false"></div>   

        <a class="menu-button" @click="showMenu = !showMenu">
            <div class="line-1"></div>
            <div class="line-2"></div>
            <div class="line-3"></div>
        </a>
        
        <div @click="showMenu = false">
            <navMenu></navMenu>
        </div>
             
    </section>
</template>


<script>
    import VueScrollClass from 'vue-scroll-class'
    import navMenu from '@/components/Elements/Menu'
    
    export default {
      name: 'app',
      components: {
        navMenu
      },
      directives: {
        'scroll-class': VueScrollClass,
      },
      data() {
        return {
            showMenu: false
        }
      }
    }
</script>