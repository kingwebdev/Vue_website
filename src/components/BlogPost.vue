<template>
    <section v-if="post">
        <div class="row">
            <div class="title" v-scroll-class:showtitle=450><h6>Blog</h6></div>
            <div class="col-sm-12 col-padding">
                <div class="row">
                    <div class="col-md-8 col-md-offset-2 text-muted">
                        <h1 class="huge purple" v-html="post.title"></h1>
                        <h4>{{ post.date | moment("MMM D, YYYY") }}
                        <small v-if="post.author">&nbsp;&nbsp;//&nbsp;&nbsp; by {{post.author.name}}</small></h4>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="post.featured_image" class="row parallax overlay-bw-bg" v-bind:style="{ 'background-image': 'url(' + post.featured_image + ')' }">
        </div>
        <div class="row">
            <div class="col-sm-12 col-padding text-center">
                <div class="row text-left">
                    <div class="col-md-8 col-md-offset-2 text-muted">
                        <hr/>
                        <p>
                            <span v-if="post.categories">
                                <i class="fa fa-folder-open fa-fw gray"></i>
                                <span class="label label-gray" v-for="category in post.categories">{{category.name}}</span>
                            </span>
                            &nbsp;&nbsp;
                            <span v-if="post.tags">
                                <i class="fa fa-tag fa-fw gray"></i>
                                <span class="label label-default" v-for="tag in post.tags">{{tag.name}}</span>
                            </span>
                        </p>
                        <hr/><br/>
                        <div v-html="post.content" class="post-content"></div>
                        <hr/><br/>
                    </div>
                </div>
                <router-link to="/blog" class="btn btn-primary">See all blog posts</router-link>
            </div>
        </div>
        <div class="row">
            <!-- prev post display -->
            <div class="col-xs-6 purple-bg" v-if="prevPost">
                <router-link :to="{name: 'BlogPostByUrl', params: {
                  id: prevPost.ID,
                  year: getYear(prevPost.date),
                  month: getMonth(prevPost.date),
                  day: getDay(prevPost.date),
                  title: prevPost.slug
                }}">
                    <h3 class="lightpurple">
                        <i class="material-icons icon-80 pull-left">arrow_back</i>
                        <br/><b class="hidden-xs">previous</b>
                    </h3>
                    <br/><br/>
                    <div class="row">
                        <div v-if="prevPost.featured_image" class="col-flush" v-bind:style="{ 'background-image': 'url(' + prevPost.featured_image + ')' }"></div>
                        <div v-else class="col-flush" style="background-image: url('../../../../static/brand/Logo_mark-w-social2');">
                        </div>
                    </div>
                    <div class="col-sm-12 col-padding-sm lightpurple">
                        <h1 class="white" v-html="prevPost.title"></h1>
                        <h4>{{ prevPost.date | moment("MMM D, YYYY") }} <small class="lightpurple" v-if="prevPost.author">&nbsp;&nbsp;//&nbsp;&nbsp; by {{prevPost.author.name}}</small></h4>
                        <div class="hidden-xs" v-html="prevPost.excerpt"></div>
                    </div>
                </router-link>
            </div>
            <div class="col-xs-6" v-else></div>

            <!-- next post display -->
            <div class="col-xs-6" v-if="nextPost">
                <router-link :to="{name: 'BlogPostByUrl', params: {
                  id: nextPost.ID,
                  year: getYear(nextPost.date),
                  month: getMonth(nextPost.date),
                  day: getDay(nextPost.date),
                  title: nextPost.slug
                }}">
                    <h3 class="purple text-right">
                        <i class="material-icons icon-80 pull-right">arrow_forward</i>
                        <br/><b class="hidden-xs">next</b>
                    </h3>
                    <br/><br/>
                    <div class="row">
                        <div v-if="nextPost.featured_image" class="col-flush" v-bind:style="{ 'background-image': 'url(' + nextPost.featured_image + ')' }"></div>
                        <div v-else class="col-flush" style="background-image: url('../../../../static/brand/Logo_mark-w-social2');">
                        </div>
                    </div>
                    <div class="col-sm-12 col-padding-sm text-muted">
                        <h1 class="purple" v-html="nextPost.title"></h1>
                        <h4>{{ nextPost.date | moment("MMM D, YYYY") }} <small v-if="nextPost.author">&nbsp;&nbsp;//&nbsp;&nbsp; by {{nextPost.author.name}}</small></h4>
                        <div class="hidden-xs" v-html="nextPost.excerpt"></div>
                    </div>
                </router-link>
            </div>
        </div>
    </section>
</template>



<script>
  import VueScrollClass from 'vue-scroll-class'

  export default {
    directives: {
      'scroll-class': VueScrollClass,
    },
    data() {
      return {
        wpUrlBegin: 'https://public-api.wordpress.com/rest/v1.1/sites/fearlesssolutions.wordpress.com',
        post: null,
        nextPost: null,
        prevPost: null
      }
    },

    watch:  {
      '$route': 'getPost'
    },

    created() {
      this.getPost();
    },

    methods: {
      getPost: function () {
        var newSlug = this.$route.params.title
        if(newSlug) {
          this.$http.jsonp(this.wpUrlBegin + '/posts/slug:' + newSlug)
            .then(response => {
              this.post = response.data;

              //after getting the data for the currently viewed post
              //find the "next" post (nearest date after this.post's date)
              //and find the "prev" post (nearest date before this.posts's date)
              //if this.post is the earliest post, then prevPost will end up being null
              //and if this.post is the most recent post, then nextPost will end up being null
              this.getNextPost();
              this.getPrevPost();
            })
        }
      },

      getNextPost: function() {
        if(this.post) {
          var currPostDate = new Date(this.post.date);
          this.$http.jsonp(this.wpUrlBegin + '/posts?number=1&order=ASC&order_by=date&after=' + currPostDate.toISOString())
          .then(response => {
            if(response.data && response.data.posts && response.data.posts.length > 0) {
              this.nextPost = response.data.posts[0];
            } else {
              this.nextPost = null;
            }
          })
        }
      },

      getPrevPost: function() {
        if(this.post) {
          var currPostDate = new Date(this.post.date);
          this.$http.jsonp(this.wpUrlBegin + '/posts?number=1&order=DESC&order_by=date&before=' + currPostDate.toISOString())
          .then(response => {
            if(response.data && response.data.posts && response.data.posts.length > 0) {
              this.prevPost = response.data.posts[0];
            } else {
              this.prevPost = null;
            }
          })
        }
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
      }
    }
  }
</script>

<style scoped>

    .row.parallax {
        background-position: center top;
    }

    /* MOBILE */
    @media (max-width: 768px) {
        h1 {
            font-size: 25pt;
        }

        .row.split .purple-bg {
            padding-top: 0;
        }

        .col-padding-sm {
            padding: 0;
        }

            .col-padding-sm h1 {
                font-size: 18pt;
                padding-bottom: 0;
            }

            .col-padding-sm h4 {
                font-size: 11pt;
            }
    }

    /* DESKTOP & TABLET */
    @media (min-width: 768px) {
        .row.parallax {
            height: 70vh;
        }
    }

    .post-content >>> p {
        font-size: 12pt;
        line-height: 2;
    }

    .post-content >>> img {
        max-width: 100%;
        float: left;
        height: auto;
        margin: 25px 25px 25px 0;
    }

    .post-content >>> .tiled-gallery {clear:both;margin:0 0 20px;overflow:hidden;}

    .post-content >>> .tiled-gallery img {margin:2px !important;}

    .post-content >>> .tiled-gallery .gallery-group {float:left;position:relative;}

    .post-content >>> .tiled-gallery .tiled-gallery-item {float:left;margin:0;position:relative;width:inherit;}

    .post-content >>> .tiled-gallery .gallery-row {overflow:hidden;}

    .post-content >>> .tiled-gallery .tiled-gallery-item a {background:transparent;border:none;color:inherit;margin:0;padding:0;text-decoration:none;width:auto;}

    .post-content >>> .tiled-gallery .tiled-gallery-item img,
    .post-content >>> .tiled-gallery .tiled-gallery-item img:hover {background:none;border:none;box-shadow:none;max-width:100%;padding:0;vertical-align:middle;}

    .post-content >>> .tiled-gallery-caption {background:#eee;background:rgba( 255,255,255,0.8 );color:#333;font-size:13px;font-weight:400;overflow:hidden;padding:10px 0;position:absolute;bottom:0;text-indent:10px;text-overflow:ellipsis;width:100%;white-space:nowrap;}

    .post-content >>> .tiled-gallery .tiled-gallery-item-small .tiled-gallery-caption {font-size:11px;}

    .post-content >>> .widget-gallery .tiled-gallery-unresized {visibility:hidden;height:0px;overflow:hidden;}

    .post-content >>> .tiled-gallery .tiled-gallery-item img.grayscale {position:absolute;left:0;top:0;}

    .post-content >>> .tiled-gallery .tiled-gallery-item img.grayscale:hover {opacity:0;}

    .post-content >>> .tiled-gallery.type-circle .tiled-gallery-item img {border-radius:50% !important;}

    .post-content >>> .tiled-gallery.type-circle .tiled-gallery-caption {display:none;opacity:0;}
</style>
