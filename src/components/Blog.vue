<template>
    <section>
        <div class="title" v-scroll-class:showtitle=450><h6>Blog</h6></div>
        <div class="row boxes">
            <router-link :to="{name: 'BlogPostByUrl', params: {
              id: post.ID,
              year: getYear(post.date),
              month: getMonth(post.date),
              day: getDay(post.date),
              title: post.slug
              }}" v-for="post in posts.slice(0, 4)" :key="post.id" class="boxes-item">
                <div v-if="post.post_thumbnail" class="boxes-bg" v-bind:style="{ 'background-image': 'url(' + post.post_thumbnail.URL + ')' }"></div>
                <div v-else class="boxes-bg" style="background-image: url('../../static/brand/logo_mark-w-social2.svg');"></div>
                <div class="boxes-title">
                    <h1><b v-html="post.title"></b></h1>
                </div>
                <div class="boxes-content">
                    <h1 class="lnr lnr-arrow-right-circle huge"></h1>
                    <p v-html="post.excerpt"></p>
                </div>
            </router-link>
        </div>

          <div class="row">
              <div class="col-sm-12 col-padding">
                  <div class="row">
                    <router-link :to="{name: 'BlogPostByUrl', params: {
                      id: post.ID,
                      year: getYear(post.date),
                      month: getMonth(post.date),
                      day: getDay(post.date),
                      title: post.slug
                    }}" v-for="post in posts.slice(4)" :key="post.id" class="col-md-3 col-sm-6 col-xs-12 post">
                        <div v-if="post.post_thumbnail" class="col-flush"
                        :style="[{minHeight: '200px'}, { backgroundImage: 'url(http://i0.wp.com/' + post.post_thumbnail.URL.substring(8) + '?h=200)' }]">
                        </div>
                        <div v-else class="col-flush" style="min-height:200px; background-image: url('../../static/brand/logo_mark-w-social2.svg');">
                        </div>
                        <h4 v-html="post.title"></h4>
                        <span class="text-muted">
                            <i class="fa fa-clock-o"></i> {{ post.date | moment("MMM D, YYYY") }}
                        </span>
                        <span class="label label-default" v-for="category in post.categories">{{category.name}}</span>
                    </router-link>
                </div>
            </div>
        </div>
        <div class="row text-center">
          <a @click="loadMore()" class="btn btn-primary"> {{ isLoading ? "Loading..." : "Load more" }}</a>
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
        show: false,
        isLoading: false,
        posts: []
      }
    },
    created() {
      this.getPosts()
    },

    methods: {

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

      getPosts: function () {
        this.isLoading = true;
        this.$http.jsonp('https://public-api.wordpress.com/rest/v1.1/sites/fearlesssolutions.wordpress.com/posts?number=20&fields=ID,URL,title,date,categories,post_thumbnail,excerpt,slug')
          .then(response => {
            this.preloadImages(response.data.posts);
          })
      },

      preloadImages: function(postsArray, index) {
          index = index || 0;
          if (postsArray && postsArray.length > index) {
            if(postsArray[index] != null && postsArray[index].post_thumbnail) {
              var img = new Image ();
              img.onload = this.preloadImages(postsArray, index + 1);
              img.src = postsArray[index].post_thumbnail.URL;
            } else {
              this.preloadImages(postsArray, index+1);
            }
          } else {
            this.posts.push(...postsArray);
            this.isLoading = false;
          }
      },

      loadMore: function () {
        var self = this;
        var moreBlogPosts = null;
        self.isLoading = true;
        self.$http.jsonp('https://public-api.wordpress.com/rest/v1.1/sites/fearlesssolutions.wordpress.com/posts?number=8&fields=ID,URL,title,date,categories,post_thumbnail,excerpt,slug&offset=' + self.posts.length)
          .then(response => {
            self.preloadImages(response.data.posts);
          })
      }

    }
  }
</script>

<style scoped>
    .post {
        padding-top: 80px;
    }

    .post:nth-child(4n+1) {
        clear: both;
    }

    /* MOBILE */
    @media (max-width: 992px) {
        .post:nth-child(2n+1) {
            clear: both;
        }
    }
</style>
