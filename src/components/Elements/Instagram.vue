<template>
    <vue-instagram token="1480162980.7b3457c.0410f2bc4e634e56a2d0a6ed606526c2" username="fearlessbmore" :count="count" :tags="tags">
        <template slot="feeds" slot-scope="props">
            <a :href="props.feed.link" target="_blank" class="col-md-3 col-sm-4 col-xs-6 col-flush" v-bind:style="{ 'background-image': 'url(' + props.feed.images.standard_resolution.url + ')' }">
                <div class="img-overlay">
                    <br/><br/>
                    <p>{{props.feed.caption.text}}</p>
                    <br/>
                    <p v-if="props.feed.location"><i class="fa fa-map-marker"></i> <b>{{props.feed.location.name}}</b></p>
                </div>
            </a>
        </template>
        <!--<template slot="error" slot-scope="props">
            <div class="fancy-alert"> {{ props.error.error_message }} </div>
        </template>-->
    </vue-instagram>
</template>



<script>
  import VueInstagram from 'vue-instagram'

  export default {
    name: 'app',

    components: {
      VueInstagram
    },

    props: {
      tags: Array,
      count: Number
    }
  }
</script>
