<template>
    <div id="app" class="container-fluid">
        <navContent></navContent>
        <router-view name="content"></router-view>
        <router-view name="footer"></router-view>
    </div>
</template>

<script>
    import './main.less'
    import navContent from '@/components/Elements/Navigation';
    
    export default {
      name: 'app',
      components: {
        navContent
      }
    }
</script>