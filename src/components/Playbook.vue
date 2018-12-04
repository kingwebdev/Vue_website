<template>
    <section v-if="item.data">
        <div class="row darkpurple-bg">
            <div class="title" v-scroll-class:showtitle=450><h6>Playbooks</h6></div>
            <div class="col-sm-12 col-padding">
                <div class="row">
                    <div class="col-md-8 col-md-offset-2">
                        <h6 class="hidden-xs"><router-link to="/playbook">The Fearless Playbooks</router-link></h6>
                        <h1 class="huge"><span class="lightpurple">0{{item.data.number}}</span> {{item.data.title}}</h1>
                        <p class="large">{{item.data.description}}</p>
                        <br/><br/>
                        <router-link to="#definition" class="btn btn-default">Go to definition</router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="row purple-bg">
            <div class="col-sm-12 col-padding">
                <div class="row">
                    <div class="col-md-8 col-md-offset-2">
                        <h6>{{item.data.title}} Plays</h6>
                        <div v-if="item.data.plays" v-for="(value, i) in item.data.plays">
                            <h4>{{i + 1}}. {{value.play_title}}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row post-content">
            <div class="col-sm-12 col-padding">
                <div class="row">
                    <div class="col-md-8 col-md-offset-2">
                        <div v-if="item.data.plays" v-for="(value, i) in item.data.plays">
                            <h2 class="orange"><small class="gray">Play {{i + 1}}</small><br/><br/>{{value.play_title}}</h2>
                            <span v-if="value.play_content"
                              v-html="PrismicDOM.RichText.asHtml(value.play_content, linkResolver)">
                            </span>

                            <br/><hr/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row parallax" v-bind:style="{ 'background-image': 'url(' + item.data.img_featured.url + ')' }">
        </div>
        <div class="row post-content" id="definition">
            <div class="col-sm-12 col-padding">
                <div class="row">
                    <div class="col-md-8 col-md-offset-2 text-muted">
                        <div v-if="item.data.content"
                          v-html="PrismicDOM.RichText.asHtml(item.data.content, linkResolver)">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row lightgray-bg">
            <div class="col-sm-12 col-padding">
                <h2 class="purple">Inspiration & Resources</h2>
                <div v-if="item.data.resources"
                  v-html="PrismicDOM.RichText.asHtml(item.data.resources, linkResolver)">
                </div>
                <br/>
            </div>
        </div>
        <div class="row split">
            <div class="col-sm-6 purple-bg">
                <h3>Read the <span class="lightpurple">next playbook</span>
                    <i class="material-icons icon-80 lightpurple pull-right">arrow_downward</i>
                </h3>
            </div>
        </div>
        <div v-for="item in next" class="row parallax overlay-bg" v-bind:style="{ 'background-image': 'url(' + item.data.img_featured.url + ')' }">
            <router-link :to="{ name: 'Playbook', params: { id: item.uid }}" class="col-md-6 col-xs-9 triangle-box">
                <h6>Playbook</h6>
                <h1 class="huge"><span class="lightpurple">0{{item.data.number}}</span> {{item.data.title}}</h1>
                <p class="text-muted hidden-xs" v-html="item.data.description"></p>
            </router-link>
        </div>
    </section>
</template>



<script>
  import VueScrollClass from 'vue-scroll-class'
  import Prismic from 'prismic-javascript'

  export default {
    data () {
        return {
            item: [],
            next: [],
            Prismic: null,
            PrismicDOM: null,
            linkResolver: null
        }
    },
    directives: {
      'scroll-class': VueScrollClass,
    },
    created () {
      this.Prismic = require('prismic-javascript')
      this.PrismicDOM = require('prismic-dom')
      this.getPlaybook()
      this.getNext()
    },
    watch: {
        '$route': 'getPlaybook',
        item: 'getNext'
    },
    methods: {
        // Get Playbook according to slug UID
        getPlaybook () {

            var Prismic = this.Prismic;
            var PrismicDOM = this.PrismicDOM;
            var apiEndpoint = 'https://fearless.cdn.prismic.io/api/v2'
            var apiToken = 'MC5XaVdueGgwQUFES0pIbWZU.eUNh77-977-977-9Qw4YJWg677-977-977-9Y--_ve-_vVLvv73vv73vv73vv73vv73vv71k77-977-977-977-977-9EQ'
            var makeUid = this.$route.params.id


            var linkResolver = function(doc) {
              return "/";
            };
            this.linkResolver = linkResolver;

            Prismic.getApi(apiEndpoint, {accessToken: apiToken})

            .then(function (api) {
                return api.query([,
                    Prismic.Predicates.any('my.playbook.uid', [makeUid]),
                ]);
            })

            .then(response => {
                this.item = response.results[0];
            })
        },

        // Get additional Playbooks for the "read next" links
        getNext () {
            var req
            var self = this
            var Prismic = self.Prismic;
            var PrismicDOM = self.PrismicDOM;
            var apiEndpoint = 'https://fearless.cdn.prismic.io/api/v2'
            var apiToken = 'MC5XaVdueGgwQUFES0pIbWZU.eUNh77-977-977-9Qw4YJWg677-977-977-9Y--_ve-_vVLvv73vv73vv73vv73vv73vv71k77-977-977-977-977-9EQ'

            if(self && self.item && self.item.id) {
              self.Prismic.getApi(apiEndpoint, {accessToken: apiToken})

              //get the next playbook after this one
              .then(function (api) {
                return api.query(
                  Prismic.Predicates.at('document.type', 'playbook'),
                  {
                    pageSize: 1,
                    orderings : '[my.playbook.number, my.playbook.date]',
                    after: self.item.id
                  }
                );
              })

              //if the next playbook doesn't return any results,
              //get the first playbook again to loop back through
              .then(function(response) {
                if(response.results && response.results.length > 0) {
                  self.next = response.results
                } else {
                    self.Prismic.getApi(apiEndpoint, {accessToken: apiToken})
                    .then(function (api) {
                    return api.query(
                      Prismic.Predicates.at('document.type', 'playbook'),
                      {
                        pageSize: 1,
                        orderings : '[my.playbook.number, my.playbook.date]',
                      }
                    );
                  })
                  .then(response => {
                      self.next = response.results;
                  });
                }
              });
            }
        }
    }
  }
</script>

<style scoped>
    .post-content >>> p {
        font-size: 12pt;
        line-height: 2;
    }

    .post-content >>> ul,
    .post-content >>> ol {
        line-height: 2;
    }

    .post-content >>> img {
        max-width: 100%;
        margin-top: 50px;
    }

    .post-content >>> h5 {
        font-size: 9pt;
        text-align: center;
        margin-bottom: 60px;
    }
</style>
