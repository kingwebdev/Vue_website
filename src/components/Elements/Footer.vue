<template>
    <section class="footer">
        <div class="row white-bg">
            <div class="col-sm-12 col-padding text-center">
                <hr style="width: 200px "/>
                <router-link to="/about/purplecow"><img src="../../../static/brand/logo_mark.png" style="width:50px;margin:50px 0" /></router-link>

                <p class="text-muted">Have we convinced you yet?</p>
                <router-link to="/careers" class="btn btn-action">Join our team</router-link>
                <router-link to="/contact" class="btn btn-action">Put us to work</router-link>
            </div>
        </div>
        <div class="row purple-bg nopaddingb">
            <div class="col-sm-12 col-padding">
                <br/><br/><br/><br/>

                <div class="row">
                    <div class="col-sm-6">
                        <img src="../../../static/brand/logo_wordmark-w.png" class="img-responsive" style="height:30px"/>
                    </div>
                    <div class="col-sm-6">
                        <p class="white text-right">
                            (410) 394-9600<br/>
                            8 Market Place, Suite 304<br/>
                            Baltimore, MD 21202<br/>
                            <small>© Copyright 2018 Fearless,
                                <a href="http://madewithloveinbaltimore.org" target="_blank">made with ♥ in Baltimore</a>
                            </small>
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-sm-12 col-padding">
                <div class="row">
                    <!--<div class="col-md-3 col-sm-6">
                        <div class="row">
                            <a href="https://www.twitter.com/fearlesssol/">
                                <div class="col-xs-2">
                                    <i class="fa fa-twitter fa-circled fa-circled-sm"></i>
                                </div>
                                <div class="col-xs-10">
                                    <p class="small">Good morning Baltimore! We are ending the week on a great note with a team breakfast at Eggspectation #FearlessSwagSighting</p>
                                </div>
                            </a>
                        </div>
                        <div class="row">
                            <a href="https://www.twitter.com/fearlesssol/">
                                <div class="col-xs-2">
                                    <i class="fa fa-twitter fa-circled fa-circled-sm"></i>
                                </div>
                                <div class="col-xs-10">
                                    <p class="small">Good morning Baltimore! We are ending the week on a great note with a team breakfast at Eggspectation #FearlessSwagSighting</p>
                                </div>
                            </a>
                        </div>
                        <div class="row">
                            <a href="https://www.twitter.com/fearlesssol/">
                                <div class="col-xs-2">
                                    <i class="fa fa-twitter fa-circled fa-circled-sm"></i>
                                </div>
                                <div class="col-xs-10">
                                    <p class="small">Good morning Baltimore! We are ending the week on a great note with a team breakfast at Eggspectation #FearlessSwagSighting</p>
                                </div>
                            </a>
                        </div>
                    </div>-->
                    <div class="col-md-3 col-sm-6">
                        <div class="row" v-for="post in posts" :key="post.id">
                            <router-link :to="{name: 'BlogPostByUrl', params: {
                              id: post.ID,
                              year: getYear(post.date),
                              month: getMonth(post.date),
                              day: getDay(post.date),
                              title: post.slug
                            }}">
                                <div class="col-xs-2">
                                    <i class="material-icons fa-circled fa-circled-sm">format_align_left</i>
                                </div>
                                <div class="col-xs-10">
                                    <p class="small">{{post.title}}
                                        <span class="label label-default" v-for="category in post.categories">{{category.name}}</span>
                                    </p>
                                </div>
                            </router-link>
                        </div>
                    </div>
                    <div class="col-md-8 col-md-offset-1 col-sm-12 text-right">
                        <instagram :count="8" class="flush-sm"></instagram>
                    </div>
                </div>
            </div>
        </div>
        <navMenu></navMenu>
    </section>
</template>

<script>
    import navMenu from '@/components/Elements/Menu';
    import Instagram from '@/components/Elements/Instagram'

    export default {
        components: {
            navMenu,
            Instagram
        },
        data() {
          return {
            posts: [],
            post: []
          }
        },
        created() {
          this.getPosts()
        },
        methods: {
            getPosts: function () {
                this.$http.jsonp('https://public-api.wordpress.com/rest/v1.1/sites/fearlesssolutions.wordpress.com/posts/?number=5&fields=ID,URL,title,categories,slug,date&pretty=true')
                    .then(response => {
                        this.posts = response.data.posts;
                    })
            },

            getYear: function(dateStr) {
              return new Date(dateStr).getFullYear();
            },

            getMonth: function(dateStr) {
              var monthStr = new Date(dateStr).getMonth()+1;
              return ("0" + monthStr).slice(-2);
            },

            getDay: function(dateStr) {
              var dayStr = new Date(dateStr).getDate();
              return ("0" + dayStr).slice(-2);
            },
        },


    }
</script>

<style scoped>
    p.small {
        clear: both;
        font-size: 10pt;
        padding: 0 0 10px 0;
    }

    /* MOBILE & TABLET */
    @media (max-width: 992px) {
        .flush-sm {
            padding-top: 50px;
        }
    }

    /* MOBILE */
    @media (max-width: 768px) {
        .text-right {
            text-align: left;
            margin-top: 100px;
        }
    }
</style>
