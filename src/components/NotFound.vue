<template>
    <section class="footer">
        <div class="row cow-bg">
            <div class="col-sm-6 col-padding">
                <h6 class="text-muted">404</h6>
                <br/><br/><br/>
                <h1 class="huge purple">Looks like we lost that page.</h1>
                <p>Sorry about that. Try a link below or <router-link to="/">head back home.</router-link></p>
            </div>
            <div class="col-sm-6">
                <img src="../../static/brand/logo_mark.svg" class="img-off" />
            </div>
        </div>
        <navMenu></navMenu>
    </section>
</template>

<script>
    import navMenu from '@/components/Elements/Menu';
    
    export default {
      components: {
        navMenu
      }
    }
    
</script>