<template>
  <section>
    <div class="row parallax" style="background-image: url('../../static/images/skyline_color.png');">
        <div class="title" v-scroll-class:showtitle=450><h6>Community</h6></div>
        <div class="col-sm-6 col-padding overlay">
            <h1 class="huge purple">It's no secret: we love our city.</h1>
            <p>With Baltimore's vibrant arts scene, great food, neighborhood feel, and unbeatable tech ecosystem, it's hard not to. Our community has played a huge part in making us who we are, and now it's our turn to pay it forward.</p>
            <router-link to="/work/baltimore" class="btn btn-action btn-block">See our work for Baltimore city</router-link>
        </div>
    </div>
    <div class="row split">
        <div class="col-sm-6 purple-bg">
            <h1>Power the things that matter</h1>
            <p class="large lightpurple">Our do-good ethos is built into our business model, and we're committed to developing <b class="white">software with a soul</b>
            —projects that will have a real and positive impact on people's lives.</p>
            <p>But we believe in a holistic approach at Fearless, so we don't just strive to make a difference on an organizational level: our talented, civically engaged team members also practice what we preach on the ground. We believe in creating a truly collaborative environment with our community and our customers, because together, we can change the world.</p>
        </div>
        <div class="col-sm-6">
            <div class="definition">
                <h4 class="purple">Software with a soul</h4>
                <h4 class="lightpurple">noun | soft·ware·with·a·sohl | \ˈsȯft-ˌwer\ \ˈwith\ \ˈā\ \ˈsōl\</h4>
                <ol>
                    <li>Digital services projects that have a social impact</li>
                    <li>Business model that emphasizes people over profits</li>
                </ol>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-sm-12 col-padding">
            <h2 class="purple">Our priorities</h2>
            <hr/>
            <div class="row row-padding">
                <div class="col-sm-4 col-padding-sm">
                    <h1 class="huge"><i class="icon-pencil gray"></i></h1>
                    <h4 class="orange">Education</h4>
                    <p>We're building strong relationships with local education initiatives like <a href="https://www.codeintheschools.org" target="_blank">Code in the Schools</a>, <a href="http://www.iamokah.org/" target="_blank">I AM O'KAH!</a>, <a href="https://www.denteducation.org/" target="_blank">Dent Education</a> and the <a href="http://www.digitalharbor.org" target="_blank">Digital Harbor Foundation</a> to help foster young tech talent in the city.</p>
                </div>
                <div class="col-sm-4 col-padding-sm">
                    <h1 class="huge"><i class="icon-briefcase gray"></i></h1>
                    <h4 class="orange">Opportunity</h4>
                    <p>We work to give underrepresented groups access.  Whether we are sponsoring programs, providing mentors, or hiring interns, we believe in getting great opportunities into the hands of people who don’t often get them. Fearless offers internships to high school and college students in Baltimore to give local youth real-world development and testing experience. We also sponsor a number of events for women in tech.</p>
                </div>
                <div class="col-sm-4 col-padding-sm">
                    <h1 class="huge"><i class="icon-chat gray"></i></h1>
                    <h4 class="orange">Engagement</h4>
                    <p>Fearless stays engaged in Baltimore's tech scene by organizing and getting involved in local meetups and events, such as <a href="https://www.devopsdays.org/events/2017-baltimore/welcome/" target="_blank">DevOpsDays Baltimore</a> and the <a href="https://www.baltimorehackathon.com/" target="_blank">Baltimore Hackathon</a>.</p>
                </div>
            </div>
        </div>
    </div>
    <div class="row parallax" style="background-image: url('../static/images/work3.jpg')"></div>
    <div class="row">
        <div class="col-sm-12 col-padding">
            <h2 class="purple">Our approach</h2>
            <hr/>
            <div class="row row-padding">
                <div class="col-md-6 col-padding-sm">
                    <h4 class="orange">Partnerships</h4>
                    <p>Each year, we invest in the work of three organizations. Our 2018 partners are <a href="https://www.codeintheschools.org" target="_blank">Code in the Schools</a>, <a href="http://www.iamokah.org/" target="_blank">I AM O'KAH!</a> and <a href="https://www.denteducation.org/" target="_blank">Dent Education</a>.</p>
                </div>
                <div class="col-md-6 col-padding-sm">
                    <h4 class="orange">Sponsorships</h4>
                    <p>We sponsor events that align to our priorities: preparing Baltimore city students to be competitive technologists and increasing access to opportunity to underrepresented groups interested in tech.  Whether it's sponsoring events geared towards women in tech or hosting a shadow day for formerly incarcerated individuals to see our work environment, we are committed to extending opportunities to all.</p>
                </div>
                <!--<div class="col-sm-6 col-padding-sm">
                    <h4 class="orange">Project Amplify</h4>
                    <p>Fearless matches funds (up to our yearly allocation) on employee donations in order to amplify the impact their giving has on organizations they care about that serve Baltimore.</p>
                </div>
                <div class="col-lg-3 col-md-6 col-padding-sm">
                    <h4 class="orange">Pro Bono <span class="badge gray-bg">Coming Summer 2018</span></h4>
                    <p>We select two pro bono projects per year to assist community organizations in improving their websites or building simple applications. Got an idea for a software project that could have a big impact on your community? We want to make it happen, and we'll donate our time to help you get it off the ground.</p>
                </div>
                <div class="col-lg-3 col-md-6 col-padding-sm">
                    <h4 class="orange">Micro Grants <span class="badge gray-bg">Coming February 2018</span> <span class="badge orange-bg">Now open for applications!</span></h4>
                    <p>Fearless awards three micro grants every year to get projects off the ground that will have a positive impact on our community.  We award one grant to a Baltimore city student, one to a community member, and one to a current employee. Got an idea for a project that could have a big impact on your community?</p>
                    <router-link to="/applications/passionaward" class="btn btn-action btn-block">More info</router-link>
                </div>-->
            </div>
        </div>
    </div>
    <div class="row">
        <h3 class="text-center">
            <a href="https://www.instagram.com/explore/tags/fearlessinthecommunity/" target="_blank">#fearlessinthecommunity</a>
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
        tag: 'fearlessinthecommunity',
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
          data: { access_token: this.token, count: this.count,min_tag_id: 1334847747140332760},
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
