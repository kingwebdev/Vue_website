<template>
    <section>
        <div class="row parallax visible-xs" style="background-image: url('../../static/images/work12.jpg');">
            <h1 class="huge white">Hi, we're F<span class="nonalt">e</span>arl<span class="nonalt">e</span>ss.</h1>
        </div>
        <div class="row parallax video hidden-xs">
            <video ref="videobg" loop muted autoplay poster="../../static/images/work12.jpg" v-scroll-class:hiddenVid=500>
                <source src="../../static/vids/bg.mp4" type="video/mp4">
            </video>
            
            <h1 class="giant white">Hi, we're F<span class="nonalt">e</span>arl<span class="nonalt">e</span>ss.</h1>
        </div>
        <div class="row nopadding white-bg">
            <div class="col-sm-4 angle-support">
                <router-link to="/work/services">
                    <div class="row text-center">
                        <div class="col-xs-4 col-sm-6 col-lg-4">
                            <h3 class="icon-streetsign icon-40"></h3>
                            <p class="small">Design</p>
                        </div>
                        <div class="col-xs-4 col-sm-6 col-lg-4">
                            <h3 class="icon-gears icon-40"></h3>
                            <p class="small">Development</p>
                        </div>
                        <div class="col-xs-4 col-sm-6 col-lg-4">
                            <h3 class="icon-cloud icon-40"></h3>
                            <p class="small">DevOps & Cloud</p>
                        </div>
                        <div class="col-xs-4 col-sm-6 col-lg-4">
                            <h3 class="icon-linegraph icon-40"></h3>
                            <p class="small">Data Analytics</p>
                        </div>
                        <div class="col-xs-4 col-sm-6 col-lg-4">
                            <h3 class="icon-map-pin icon-40"></h3>
                            <p class="small">Geospatial</p>
                        </div>
                        <div class="col-xs-4 col-sm-6 col-lg-4">
                            <h3 class="icon-refresh sway icon-40"></h3>
                            <p class="small">Agile Coaching</p>
                        </div>
                    </div>
                </router-link>
            </div>
            <div class="col-sm-2 angle hidden-xs">
            </div>
            <div class="col-sm-6 col-padding white-bg">
                <br/><br/>
                <p class="large text-muted">We're a full stack digital services firm in Baltimore that delivers sleek, modern, and user-friendly software designed to push the boundaries of possibility.</p>
                <h3 class="purple">We build software to solve problems.</h3>
                <p class="large text-muted">Software has the potential to change lives, so we've made it our business to create innovative digital tools that allow users to perform at their maximum potential.</p>
                <router-link to="/work/services" class="btn btn-action">What we do</router-link>
            </div>
        </div>
        <div class="row white-bg nopaddingb">
            <div class="col-sm-6 col-sm-offset-6 col-padding">
                <h2 class="orange visible-xs">Software with a soul</h2>
                <p class="large text-muted">It's our mission to build software with a soul - tools that empower communities and make a difference - so we can create a world where good software powers the things that matter.</p>
                <router-link to="/about/community" class="btn btn-action">Our community</router-link>
            </div>
            <img src="../../static/images/skyline.svg" style="width: 100%;" />
            <h1 class="giant orange hidden-xs text-diagonal">Software with a soul</h1>
        </div>
        <div class="row nopadding white-bg">
            <div class="col-sm-12 col-padding text-center">
                <h2 class="purple">Our work speaks for itself.</h2>
            </div>
        </div>
        <div v-for="item in cases" class="row parallax overlay-bg" v-bind:style="{ 'background-image': 'url(' + item.data.img_featured.url + ')' }">
            <router-link :to="{ name: 'Case', params: { id: item.uid }}" class="col-lg-4 col-md-6 col-xs-9 triangle-box">
                <h6>Case Study</h6>
                <h1>{{item.data.title}}</h1>
                <p class="text-muted visible-xs">{{item.data.tagline}}</p>
                <p class="text-muted hidden-xs">{{item.data.description}}</p>
                <p><span class="label label-default" v-for="tags in item.tags">{{tags}}</span></p>
            </router-link>
        </div>
        <div class="row">
            <div class="col-sm-12 col-padding text-center">
                <router-link to="/work/all" class="btn btn-action">See more work</router-link>
            </div>
        </div>
        <div class="row lightgray-bg hidden-xs">
            <div class="col-sm-12 col-padding">
                <h2 class="purple text-center">Our latest thoughts.</h2>
                <div class="row nopadding">
                    <router-link :to="{name: 'BlogPostByUrl', params: {
                      id: post.ID,
                      year: /[0-9]{4}/.exec(post.URL)[0],
                      month: /[0-9]{4}\/([0-9]{2})/.exec(post.URL)[1],
                      day: /[0-9]{4}\/[0-9]{2}\/([0-9]{2})/.exec(post.URL)[1],
                      title: /[0-9]{4}\/[0-9]{2}\/[0-9]{2}\/(.+)?\//.exec(post.URL)[1]
                    }}" v-for="post in posts" :key="post.id" class="col-md-3 col-sm-6 post">
                        <div v-if="post.post_thumbnail" class="col-flush" style="min-height:200px;" v-bind:style="{ 'background-image': 'url(' + post.post_thumbnail.URL + ')' }"></div>
                        <div v-else class="col-flush" style="min-height:200px; background-image: url('../../static/brand/Logo_mark-w-social2.png');"></div>
                        <h4>{{post.title}}</h4>
                        <span class="text-muted">
                            <i class="fa fa-clock-o"></i> {{ post.date | moment("MMM D, YYYY") }}
                        </span>
                        <span class="label label-default" v-for="category in post.categories">{{category.name}}</span>
                        <br class="visible-sm visible-xs" />
                        <br class="visible-sm visible-xs" />
                        <br class="visible-sm visible-xs" />
                    </router-link>
                </div>
            </div>
        </div>
        <div class="row cow-bg nopaddingb">
            <div class="col-sm-6 col-sm-offset-3 col-padding">
                <br/>
                <h2 class="purple">We have a thing for purple cows.</h2>
                <p class="large text-muted">In a world of brown cows, a purple cow stands out and people can't help but notice it. There are plenty of brown cow software shops around, but we're not one of them.</p>
                <p class="large text-muted">We're passionate about being surprisingly different through the work that we do, the problems we solve, and the difference we make.</p>
                <router-link to="/about/purplecow" class="btn btn-action">Why our mascot is a purple cow</router-link>
            </div>
            <div class="col-sm-3 hidden-xs">
                <img src="../../static/brand/logo_mark.svg" class="img-off" />
            </div>
        </div>
        <div class="row lightgray-bg nopaddingb">
            <div class="col-sm-6">
                <img src="../../static/images/store-hoodie.png" class="img-responsive" />
            </div>
            <div class="col-sm-6 col-padding">
                <h2 class="orange visible-xs">Power what matters</h2>
                <h3 class="purple">We started a store to sell the purple.</h3>
                <p class="large">Each item you buy helps support an hour of coding education for a Baltimore City Student. We love our city, we love encouraging the next generation to pursue tech, and we love purple gear.</p>
                <a href="https://fearless.store" target="_blank" class="btn btn-action">Start shopping</a>
            </div>
            <h1 class="giant orange hidden-xs text-diagonal">Power what matters</h1>
        </div>
        <div class="sticky hidden-xs" v-scroll-class:showSticky=650>
            <div class="sticky-button">tl;dr?</div>
            <div class="sticky-content">
                <h4>too long; didn't read?</h4>
                <ul class="list-inline text-muted">
                    <li><b>Software with a soul</b><br/>
                        We use software as a tool for civic action.</li>
                    <li><b>We're a purple cow in a brown cow world.</b><br/>
                        We make it our business to stand out from the herd.</li>
                    <li><b>Agile experts</b><br/>
                        Our hardcore agile approach speeds up development so we can deliver quick, quality solutions for any digital problem.</li>
                    <li><b>User-centered design</b><br/>
                        Software that puts the user first.</li>
                    <li><b>We <3 Charm City</b><br/>
                        Baltimore is our home, and we want to give back.</li>
                </ul>
            </div>
        </div>
    </section>
</template>



<script>
  import VueScrollClass from 'vue-scroll-class'
  import Case from '@/components/Work/Case'
    
  export default {
    directives: {
      'scroll-class': VueScrollClass,
    },
    mounted: function() {
      this.$refs.videobg.play();
    },
    components: {
        Case
    },
    data() {
        return {
            cases: [],
            posts: [],
            src: [],
            Prismic: null,
            PrismicDOM: null,
            linkResolver: null
        }
    },
    created() {
      this.Prismic = require('prismic-javascript')
      this.PrismicDOM = require('prismic-dom')
      this.getPosts()
    },
    methods: {
        getContent () {
            var req
            var Prismic = this.Prismic;
            var PrismicDOM = this.PrismicDOM;
            var apiEndpoint = 'https://fearless.cdn.prismic.io/api/v2'
            var apiToken = 'MC5XaVdueGgwQUFES0pIbWZU.eUNh77-977-977-9Qw4YJWg677-977-977-9Y--_ve-_vVLvv73vv73vv73vv73vv73vv71k77-977-977-977-977-9EQ'

            var linkResolver = function(doc) {
              return "/";
            };
            this.linkResolver = linkResolver;

            Prismic.getApi(apiEndpoint, {accessToken: apiToken})

            .then(function (api) {
                return api.query(
                    Prismic.Predicates.at('document.type', 'case_study'),
                    {pageSize: 2, orderings : '[document.last_publication_date desc]' }
                );
            })

            .then(response => {
                this.cases = response.results;
            })
        },
        getPosts: function () {
            this.$http.jsonp('https://public-api.wordpress.com/rest/v1.1/sites/fearlesssolutions.wordpress.com/posts/?number=4&fields=ID,URL,title,date,categories,post_thumbnail&pretty=true')
                .then(response => {
                    this.posts = response.data.posts;
                })
        }
    },
    beforeMount () {
        this.getContent()
    }
  }
</script>

<style scoped>
    @media (min-width: 768px) {
        .row.split {
            background: -webkit-linear-gradient(to left, white 50%, #53327a 50%);
            background: -o-linear-gradient(to left, white 50%, #53327a 50%);
            background: -moz-linear-gradient(to left, white 50%, #53327a 50%);
            background: linear-gradient(to left, white 50%, #53327a 50%);
        }
    }

    .row.video video.hiddenVid {
        display: none;
    }
    
    .row.parallax {
        background-attachment: scroll;
    }

    @media (max-width: 768px) {
        .row.split {
            background: white;
        }

        .row.parallax.video,
        .row.parallax.visible-xs {
            height: 300px;
            min-height: 300px;
        }

        .row.video:before {
            background: rgba(102, 51, 153, 0.4);
        }

        .row.video video {
            width: auto;
            height: 100%;
        }

        .text-center h2 {
            text-align: left;
        }

        .cow-bg {
            background-color: #F4F5F9;
        }
        
        .huge {
            line-height: .75;
            text-shadow: 1px 1px #777;
            font-size: 50pt;
        }
    }
    
    /* Angles & Diagonals */
    .angle {
        min-height: 70vh;
        background: -webkit-linear-gradient(to top right, #EE5340 50%, transparent 50%);
        background: linear-gradient(to top right, #EE5340 50%, transparent 50%);
    }
    
    .angle-support {
        min-height: 70vh;
        background-color: #EE5340;
        padding-top: 100px;
    }

        .angle-support a {
            color: #F5CEC8;
        }

        .angle-support a:hover {
            color: white;
        }
            
        .angle-support p {
            font-size: 8pt;
            padding: 5px 0;
        }
    
        @media (max-width: 768px) {
            .angle-support {
                min-height: 0;
                padding-top: 30px;
                padding-bottom: 30px;
            }
            
            .angle-support .icon-40 {
                font-size: 25px;
                padding: 0;
            }
        }   

    .text-diagonal {
        transform: rotate(-45deg); 
        width: 50%; 
        text-align: right;
        font-size: 120px; 
        bottom: auto; 
        top: 200px;
    }

    /* Sticky tl;dr */
    .sticky .sticky-button {
        visibility: hidden;
        position: fixed;
        right: -100px;
        bottom: 80px;
        background: #78638F;
        color: white;
        width: 50px;
        height: 50px;
        border-radius: 50px;
        text-align: center;
        padding: 15px 0;
        z-index: 2;
        -webkit-transition: all .5s ease-out;
        -moz-transition: all .5s ease-out;
        -o-transition: all .5s ease-out;
        transition: all .5s ease-out;
    }

    .sticky.showSticky .sticky-button {
        visibility: visible;
        right: 50px;
    }

    .sticky .sticky-content {
        visibility: hidden;
        margin: 0 -250px 0 0;
        width: 500px;
        padding: 50px;
        border-right: 80px solid #F3F3F4;
        background: #fff;
        position: fixed;
        right: 0;
        bottom: 0;
        z-index: 1;
        -webkit-transition: all .5s ease-out;
        -moz-transition: all .5s ease-out;
        -o-transition: all .5s ease-out;
        transition: all .5s ease-out;
        box-shadow: -1px -1px 5px #F3F3F4;
    }

        .sticky h4 {
            position: absolute;
            top: 120px;
            right: -140px;
            -webkit-transform: rotate(90deg);
            -moz-transform: rotate(90deg);
            -ms-transform: rotate(90deg);
            -o-transform: rotate(90deg);
            filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=1);
        }

        .sticky ul li {
            margin-top: 15px;
            padding: 0;
        }

    .sticky .sticky-button:hover + .sticky-content {
        visibility: visible;
        margin-right: 0;
    }

</style>
