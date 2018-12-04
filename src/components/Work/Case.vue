<template>
    <section v-if="item.data">
        <div class="row parallax parallax-lg overlay-bg" v-bind:style="{ 'background-image': 'url(' + item.data.img_featured.url + ')' }">
            <div class="title delaytitle" v-scroll-class:showtitle=450><h6>Case Study</h6></div>
            <div class="col-md-6 col-xs-9 clear-box">
                <h6>Case Study</h6>
                <h1 class="huge" v-if="item.data.title">{{item.data.title}}</h1>
                <p class="large text-muted" v-if="item.data.tagline">{{item.data.tagline}}</p>
            </div>
            <div class="col-md-6 col-xs-9 triangle-box" style="min-height: 0" v-if="item.data.description">
                <br/>
                <p class="text-muted">{{item.data.description}}</p>
            </div>
        </div>
        <div class="row lightgray-bg nopadding">
            <div class="col-sm-12 col-padding">
                <div class="row row-padding">
                    <div v-if="item.data.launch_url.url" class="col-sm-4 col-xs-12 col-padding-sm pull-right text-right">
                        <a class="btn btn-action btn-block" :href="item.data.launch_url.url" target="_blank" style="margin-top: 0;"> Launch product</a>
                    </div>
                    <div v-if="item.data.techstack" class="col-sm-4 col-xs-6 col-padding-sm pull-right">
                        <p class="small"><b>Tech Stack</b></p>
                        <p>{{item.data.techstack}}</p>
                    </div>
                    <div class="col-sm-4 col-xs-6 col-padding-sm pull-right">
                        <p class="small"><b>Tags</b></p>
                        <p class="large">
                            <span v-for="tags in item.tags">
                                <router-link :to="{ name: 'PortfolioTag', params: { id: tags }}"><span class="label label-default">{{tags}}</span></router-link>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12 col-padding">
                <div class="row">
                    <div class="col-md-9">
                        <h1 class="purple">The challenge</h1>
                        <div class="large" v-if="item.data.challenge"
                          v-html="PrismicDOM.RichText.asHtml(item.data.challenge, linkResolver)">
                        </div>
                    </div>
                    <div class="col-md-3 text-center">
                        <br/>
                        <img v-if="item.data.customer" v-for="value in item.data.customer" :src="value.img_customerlogo.url" class="img-responsive" style="display: inline-block; max-width: 200px" />
                    </div>
                </div>
                <div class="row row-padding">
                    <div class="col-sm-4 col-padding-sm">
                        <br/><br/>
                        <h6 class="orange">Innovate</h6><hr/>
                        <span v-if="item.data.challenge_innovate"
                          v-html="PrismicDOM.RichText.asHtml(item.data.challenge_innovate, linkResolver)">
                        </span>
                    </div>
                    <div class="col-sm-4 col-padding-sm">
                        <br/><br/>
                        <h6 class="orange">Create</h6><hr/>
                        <span v-if="item.data.challenge_create"
                          v-html="PrismicDOM.RichText.asHtml(item.data.challenge_create, linkResolver)">
                        </span>
                    </div>
                    <div class="col-sm-4 col-padding-sm">
                        <br/><br/>
                        <h6 class="orange">Disrupt</h6><hr/>
                        <span v-if="item.data.challenge_disrupt"
                          v-html="PrismicDOM.RichText.asHtml(item.data.challenge_disrupt, linkResolver)">
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="row split">
            <div class="col-sm-12 col-padding">
                <div class="row">
                    <div class="col-sm-5 text-right purple-bg">
                        <span v-if="item.data.content_title"
                          v-html="PrismicDOM.RichText.asHtml(item.data.content_title, linkResolver)">
                        </span>
                        <p v-if="item.data.content1" v-html="PrismicDOM.RichText.asHtml(item.data.content1, linkResolver)"></p>
                    </div>
                    <div class="col-sm-2">
                        <h1 class="text-center" v-if="item.data.content_icon">
                            <i class="fa icon-180 lightpurple" v-bind:class="item.data.content_icon"></i>
                        </h1>
                    </div>
                    <div class="col-sm-5">
                      <p v-if="item.data.content2" v-html="PrismicDOM.RichText.asHtml(item.data.content2, linkResolver)"></p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12 col-padding">
                <h1 class="purple text-center">Our solution</h1>
            </div>
        </div>
        <div class="row parallax parallax-lg parallax-bordered" v-bind:style="{ 'background-image': 'url(' + item.data.img_screenshot.url + ')' }"></div>
        <div class="row sets" v-if="item.data.sets" v-for="value in item.data.sets">
            <div class="col-sm-6 col-padding">
                <hr class="visible-xs" />
                <h1 class="huge orange"><i class="icon-caution"></i></h1>
                <h6 class="orange">Problem</h6>
                <span v-if="value.problem"
                  v-html="PrismicDOM.RichText.asHtml(value.problem, linkResolver)">
                </span>
                <div class="solution">
                    <h1 class="huge purple"><i class="icon-lightbulb"></i></h1>
                    <h6 class="purple">Solution</h6>
                    <span v-if="value.solution"
                      v-html="PrismicDOM.RichText.asHtml(value.solution, linkResolver)">
                    </span>
                </div>
            </div>
            <br class="visible-xs" />
            <img v-if="value.img_solution" :src="value.img_solution.url" class="img-responsive col-sm-6 col-padding" />
        </div>
        <div class="row split nopaddingb">
            <div class="col-sm-6 purple-bg">
                <h1>Our approach</h1>
                <span v-if="item.data.approach"
                  v-html="PrismicDOM.RichText.asHtml(item.data.approach, linkResolver)">
                </span>
                <p class="text-right"><i class="material-icons icon-80 lightpurple hidden-xs">subdirectory_arrow_right</i></p>
                <br/><br/>
                <img :src="item.data.img_screenshot.url" v-if="item.data.img_screenshot" class="img-thumbnail img-off" />
            </div>
            <div class="col-sm-6">
                <div v-if="item.data.steps" v-for="(value, i) in item.data.steps">
                    <div class="row nopadding">
                        <div class="col-lg-2 col-md-3 col-sm-3 col-xs-2 text-center">
                            <h6 class="lightpurple">Step</h6>
                            <i class="fa fa-circled fa-circled-lg lightpurple">{{i + 1}}</i>
                        </div>
                        <div class="col-lg-10 col-md-9 col-sm-9 col-xs-10">
                            <br/><h4 class="orange">{{value.title}}</h4>
                        </div>
                    </div>
                    <br/>
                    <span v-if="value.text"
                      v-html="PrismicDOM.RichText.asHtml(value.text, linkResolver)">
                    </span>
                    <br/><hr/>
                </div>
            </div>
        </div>
        <div class="row lightgray-bg" v-if="item.data.body">
            <div class="col-sm-12 col-padding text-center" v-for="value in item.data.body">
                <h2 class="orange">The team at work. <!--{{value.non-repeat.title.value}}--> </h2>
                <div class="row">
                    <div class="col-md-4 col-xs-6 col-flush" v-for="repeat in value.items" v-bind:style="{ 'background-image': 'url(' + repeat.gallery_image.url + ')' }">
                        <div class="img-overlay" v-if="repeat.image_captions && repeat.image_captions.length > 0">
                            <br/><br/>
                            <p v-if="repeat.image_captions"
                              v-html="PrismicDOM.RichText.asHtml(repeat.image_captions, linkResolver)">
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row cow-bg">
            <div class="col-sm-6 col-sm-offset-3 col-padding">
                <h2 class="purple">What made this project Fearless?</h2>
                <span v-if="item.data.purple"
                  v-html="PrismicDOM.RichText.asHtml(item.data.purple, linkResolver)">
                </span>
            </div>
            <div class="col-sm-3">
                <img src="../../../static/brand/logo_mark.png" class="img-off" />
            </div>
        </div>
        
        <div class="row split">
            <div class="col-sm-6 purple-bg">
                <h3>See <router-link to="/work/government">more of our work</router-link>
                    <i class="material-icons icon-80 lightpurple pull-right">arrow_downward</i>
                </h3>
            </div>
        </div>
        <div v-for="item in more" class="row parallax overlay-bg" v-bind:style="{ 'background-image': 'url(' + item.data.img_featured.url + ')' }">
            <router-link :to="{ name: 'Case', params: { id: item.uid }}" class="col-lg-4 col-md-6 col-xs-9 triangle-box">
                <h6>Case Study</h6>
                <h1>{{item.data.title}}</h1>
                <p class="text-muted visible-xs">{{item.data.tagline}}</p>
                <p class="text-muted hidden-xs">{{item.data.description}}</p>
                <p><span class="label label-default" v-for="tags in item.tags">{{tags}}</span></p>
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
            more: [],
            caseTags: [],
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
      this.getContent()
      this.getMore()
    },
    watch: {
        '$route': 'getContent',
        item: 'getMore'
    },
    methods: {
        // Get Case Study according to slug UID
        getContent () {

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
                    Prismic.Predicates.any('my.case_study.uid', [makeUid]),
                ]);
            })

            .then(response => {
                this.item = response.results[0];
                this.caseTags = this.item.tags;
            })
        },

        // Get additional Case Studies for the "read more" links
        getMore () {
            var req
            var self = this
            var Prismic = self.Prismic;
            var PrismicDOM = self.PrismicDOM;
            var apiEndpoint = 'https://fearless.cdn.prismic.io/api/v2'
            var apiToken = 'MC5XaVdueGgwQUFES0pIbWZU.eUNh77-977-977-9Qw4YJWg677-977-977-9Y--_ve-_vVLvv73vv73vv73vv73vv73vv71k77-977-977-977-977-9EQ'

            if(self && self.item && self.item.id) {
              self.Prismic.getApi(apiEndpoint, {accessToken: apiToken})

              .then(function (api) {
                  return api.query(
                     [ Prismic.Predicates.any('document.tags', self.caseTags),
                      Prismic.Predicates.not('document.id', self.item.id) ],
                      {pageSize: 2}
                  );
              })

              .then(response => {
                 this.more = response.results
              })
            }
        }
    },
    beforeMount () {
        this.getContent()
        this.getMore()
    }
  }
</script>

<style scoped>

/* DESKTOP */
@media (min-width: 768px) {
    .row.sets .solution {
        border-right: 2px solid #663399;
        position: relative;
        margin: 50px -50px 50px 0;
        padding: 10px 50px 20px 50px;
        background: #F4F5F9;
    }

        .row.sets .solution:before {
            content: '';
            position: absolute;
            left: 100%;
            width: 120px;
            margin: 120px 0 0 0;
            height: 2px;
            background: #663399;
        }

    .row.sets:nth-child(even) div.col-padding {
        text-align: right;
    }

    .row.sets:nth-child(even) img.col-padding {
        padding-left: 0;
    }

    .row.sets:nth-child(odd) div.col-padding {
        float: right;
        text-align: left;
    }

    .row.sets:nth-child(odd) img.col-padding {
        padding-right: 0;
    }

        .row.sets:nth-child(odd) >>> .solution {
            border-left: 2px solid #663399;
            margin: 50px 0 50px -50px;
            border-right: none;
        }

            .row.sets:nth-child(odd) >>> .solution:before {
                right: 100%;
                left: auto;
            }
}

/* TABLET / SMALL DESKTOP */
@media (min-width: 768px) and (max-width: 1200px) {
    .row.sets img.col-padding {
        margin-top: 200px;
    }
}
</style>
