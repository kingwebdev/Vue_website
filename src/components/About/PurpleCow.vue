<template>
  <section>
    <div class="row split">
      <div class="title" v-scroll-class:showtitle=450><h6>Purple Cow</h6></div>
      <div class="col-sm-6 purple-bg">
        <h1 class="huge">Our mascot is a purple cow.</h1>
        <p>If you saw a purple cow while driving down the road, you'd stop to take a closer look, post a photo, and tell your grandma, right?</p>
        <p>Seth Godin dreamt up this surprising visual in his book, <a href="http://www.sethgodin.com/" target="_blank">Purple Cow</a>. In a world full of brown cows, a purple cow stands out from the crowd, and people can't help but take notice.</p>
        <h3 class="white">Standing apart from the herd</h3>
        <p>It's our goal to be exceptional in everything we do: <a href="http://fearless.tech/work/all/case/bop">from building software that supports oyster restoration in the New York Harbor</a> to <router-link to="/careers">offering our employees a monthly snack stipend</router-link>, we strive to be a surprisingly different kind of company. Our commitment to passion, innovation, integrity, improvement, and community  pervades every aspect of our business.</p>
      </div>
      <div class="col-sm-6 cow-bg">
        <img src="../../../static/brand/logo_mark.svg" class="img-off" />
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12 col-padding">
        <div class="definition">
          <h1 class="purple">Purple</h1>
          <h3 class="lightpurple">adjective | pur·ple | \ˈpər-pəl\</h3>
          <ol>
            <li>Going beyond what is usual or expected; of a higher standard</li>
            <li>Surprisingly different; exceptional; noteworthy</li>
            <li>Standing out from the crowd; extraordinary</li>
          </ol>
        </div>
      </div>
    </div>
    <div class="row parallax" style="background-image: url('../static/images/play3.jpg')"></div>
    <div class="row">
      <h3 class="text-center">
        <a href="https://www.instagram.com/explore/tags/imfearless/" target="_blank">#imfearless</a>
      </h3>
      <div  v-for = "feed in feeds">
        <a  :href="feed.link" target="_blank" class="col-md-3 col-sm-4 col-xs-6 col-flush" v-bind:style="{ 'background-image': 'url(' + feed.images.standard_resolution.url + ')' }">
          <div class="img-overlay">
            <br/><br/>
            <p>{{feed.caption.text}}</p>
            <br/>
            <p v-if="feed.location"><i class="fa fa-map-marker"></i> <b>{{feed.location.name}}</b></p>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>



<script>

  import VueScrollClass from 'vue-scroll-class'
  import _ from 'lodash'
  import jsonp from 'browser-jsonp'

  export default {
    name: 'app',
    data() {
      return {
        tag: 'imfearless',
        count: 10,
        feeds: [],
        token: '1480162980.7b3457c.0410f2bc4e634e56a2d0a6ed606526c2',
        feed: []
      }
    },
    methods: {
      getUserFeed () {
        jsonp({
          url: `https://api.instagram.com/v1/tags/${this.tag}/media/recent`,
          data: { access_token: this.token, count: this.count },
          error: error => { throw error },
          complete: response => {
            if (response.meta.code === 400) this.error = response.meta
            if (response.meta.code === 200) {
              if (response.meta.code === 200) {
                let { data } = response
                const types = ['image', 'video']

                if (this.mediaType && types.indexOf(this.mediaType) > -1) {
                  data = _.filter(data, item => this.mediaType === item.type)
                }

                this.feeds = _.slice(_.values(data), 0, this.count);
                console.log(this.feeds);
              }
            }
          }
        })
      }
    },
    mounted() {
      this.getUserFeed();
    },
    directives: {
      'scroll-class': VueScrollClass,
    }
  }
</script>

<style scoped>
  @media (min-width: 768px) {
    .cow-bg .img-off {
      top: -50px;
    }
  }
</style>
