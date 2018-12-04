<template>
    <section>
        <div class="row split">
            <div class="title" v-scroll-class:showtitle=450><h6>Playbooks</h6></div>
            <div class="col-sm-6 purple-bg">
                <h1 class="huge">We don't follow trends. We set them.</h1>
                <p>Through years of experience, we've developed a seasoned agile approach that allows us to work better, faster, and cheaper, increasing our accountability to customers and improving end products. We're constantly refining the way that we work, using our outside-the-box thinking to remain at the forefront of innovation within the tech industry. But we're not software snobs, and we believe in sharing our discoveries with the world.</p>
            </div>
            <div class="col-sm-6">
                <img src="../../static/images/playbook.svg" class="img-responsive" />
                <h3 class="purple">Enter the Fearless Playbooks.</h3>
                <p>You've probably heard words like agile, scrum, user-centered design... but you may not know exactly what they mean. Even if you know what they mean, the rest of your team may not. At Fearless, we don't think that anyone should be left in the dark; it's our goal to demystify development processes and approaches, define them, and explore how they should be used in practice. We hope you'll be able to benefit from our years of tinkering and fine-tuning our process.</p>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12 col-padding">
                <div class="row row-padding">
                    <div v-for="(item, i) in items" :key="item.uid" class="col-lg-3 col-padding-sm">
                        <h4 class="orange">
                            <span class="lightpurple">0{{item.data.number}} | </span>
                            {{item.data.title}}
                        </h4>
                        <router-link :to="{ name: 'Playbook', params: { id: item.uid }}" class="btn btn-action btn-block">Read playbook</router-link>
                        <br/>
                        <p v-html="item.data.description"></p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row parallax" style="background-image: url('../../static/images/work1.jpg');"></div>
    </section>
</template>



<script>
  import VueScrollClass from 'vue-scroll-class'
  import Prismic from 'prismic-javascript'

  export default {
    data () {
        return {
            items: [],
            Prismic: null,
            PrismicDOM: null,
        }
    },
    directives: {
      'scroll-class': VueScrollClass,
    },
    created () {
      this.Prismic = require('prismic-javascript')
      this.PrismicDOM = require('prismic-dom')
      this.getPlaybooks()
    },
    methods: {
        // Get all playbooks
        getPlaybooks () {

            var Prismic = this.Prismic;
            var PrismicDOM = this.PrismicDOM;
            var apiEndpoint = 'https://fearless.cdn.prismic.io/api/v2'
            var apiToken = 'MC5XaVdueGgwQUFES0pIbWZU.eUNh77-977-977-9Qw4YJWg677-977-977-9Y--_ve-_vVLvv73vv73vv73vv73vv73vv71k77-977-977-977-977-9EQ'


            Prismic.getApi(apiEndpoint, {accessToken: apiToken})

            .then(function (api) {
                  return api.query(
                      Prismic.Predicates.at('document.type', 'playbook'),
                      {orderings: '[my.playbook.number, my.playbook.date]'}
                  );
            })

            .then(response => {
                this.items = response.results;
            })
        }
    }
  }
</script>


<style scoped>
    .col-padding-sm:nth-child(4n+1) {
        clear: both;
    }
</style>

