<template>
    <section>

        <!-- Complete Portfolio -->
        <div v-if="!this.$route.params.id" class="row split">
            <div class="col-sm-6 purple-bg">
                <h1 class="huge">Show and tell.</h1>
                <p class="large lightpurple">We're here to innovate, create, and disrupt.</p>
            </div>
            <div class="col-sm-6">
                <h3>
                    <router-link to="/work/government"><span class="label label-default">government</span></router-link>
                    <router-link to="/work/healthcare"><span class="label label-default">healthcare</span></router-link>
                    <router-link to="/work/education"><span class="label label-default">nonprofit & education</span></router-link>
                    <router-link to="/work/labs"><span class="label label-default">fearless labs</span></router-link>

                    <!-- TODO: USE & REMOVE DUPLICATES
                    <span v-for="item in cases">
                        <span v-for="tags in item.tags">
                            <router-link :to="{ name: 'PortfolioTag', params: { id: tags }}"><span class="label label-default">{{tags}}</span></router-link>
                        </span>
                    </span>-->
                </h3>
            </div>
        </div>

        <!-- Government -->
        <div v-else-if="this.$route.params.id === 'government'">
            <div class="row parallax" style="background-image: url('../../static/images/bg-government.jpg');">
                <div class="col-sm-6 col-padding overlay col-sm-offset-6">
                    <h1 class="huge purple">Supporting the Government, supporting our community.</h1>
                    <p class="large purple">Everyone benefits when the Government works more efficiently, and we've worked with a variety of agencies to provide or improve the digital services that Americans rely on every day.</p>
                    <p>We're passionate about building software that makes an impact, and we've been proud to support the Government on initiatives that boost the economies of disadvantaged communities, help millions of entrepreneurs build their businesses, and keep our country safe.</p>
                    <p>Fearless has extensive experience working with numerous Federal Agencies, including SBA, USSS, DoD, and CMS, and we're a member of the competitive DoD Mentor-Protégé program.</p>
                </div>
            </div>
            <div class="row split">
                <div class="col-sm-6 purple-bg">
                    <h3>NAICS Codes</h3>
                    <p>541330, 541430, 541490, 541511, 541512, 541513, 541519, 541611, 541618, 541990</p>
                </div>
                <div class="col-sm-6">
                    <h3>Certifications / Designators</h3>
                    <ul>
                        <li>Maryland State MBE</li>
                        <li>Baltimore City MBE</li>
                        <li>HUBZone</li>
                        <li>8(a) - Case #305630</li>
                        <li>GSA IT 70 Schedule Contract #GS-35F-115GA</li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- Healthcare -->
        <div v-else-if="this.$route.params.id === 'healthcare'">
            <div class="row parallax" style="background-image: url('../../static/images/bg-healthcare2.jpg');">
                <div class="col-sm-6 col-padding overlay col-sm-offset-6">
                    <h1 class="huge purple">Making a difference in our community's health.</h1>
                    <p>Over the past several decades, technology has redefined what's possible within the healthcare industry. When robotically-assisted surgery is a routine practice, it's clear that the sky's the limit when it comes to the impact technology can have on public health. And we want to help.</p>
                    <p class="large purple">While many healthcare IT companies only bring in doctors for subject matter expertise, our healthcare division is headed by a Baltimore-based physician with over 7 years of experience practicing and leading medical teams.</p>
                    <p>Backed by a team of physicians with a wide range of specialties including preventative medicine, family medicine, emergency medicine, and pediatrics, as well as engineers and researchers, our diverse and highly skilled team is made up of technical and healthcare professionals with cutting edge expertise in their respective fields. By prioritizing the customer's needs and frequently communicating with our experts, we're able to build software that transforms the way our customers do healthcare and, more importantly, the way they serve their patients. </p>
                </div>
            </div>
            <div class="row split">
                <div class="col-sm-6 purple-bg">
                    <h3>NAICS Codes</h3>
                    <p>541330, 541430, 541490, 541511, 541512, 541513, 541519, 541611, 541618, 541990, 621111, 621399, 621493, 621498</p>
                </div>
                <div class="col-sm-6">
                    <h3>Certifications / Designators</h3>
                    <ul>
                        <li>Maryland State MBE</li>
                        <li>Baltimore City MBE</li>
                        <li>HUBZone</li>
                        <li>8(a) - Case #305630</li>
                        <li>GSA IT 70 Schedule Contract #GS-35F-115GA</li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- Education -->
        <div v-else-if="this.$route.params.id === 'education'" class="row parallax" style="background-image: url('../../static/images/bg-education.jpg');">
            <div class="col-sm-6 col-padding overlay col-sm-offset-6">
                <h1 class="huge purple">Good tech has the power to change the world.</h1>
                <p class="large purple">That's why one of our core principles is to build software with a soul — technology we build with our community and for our community to make it a better place.</p>
                <p>Partnering with nonprofits, educational institutions, and other local organizations, we've worked on projects that run the gamut: from supporting initiatives that get students engaged in science and environmental restoration to creating online marketplaces that help college students find jobs. If it has an impact on our community, we're all in.</p>
            </div>
        </div>

        <!-- Labs -->
        <div v-else-if="this.$route.params.id === 'labs'" class="row split">
            <div class="col-sm-6 purple-bg">
                <h1 class="huge">We've always got something cooking.</h1>
            </div>
            <div class="col-sm-6">
                <p class="large purple">You can think of Fearless Labs as our personal kitchen.</p>
                <p>While you'll usually find our talented designers and developers dreaming up software for our customers, we aren't afraid to come up with creative fixes for in-house problems either.</p>
                <p>When we had a hard time keeping track of our HUBZone certification, we built HUBFinder to map and track HUBZone locations and compliance. And when we couldn't perform the sort of multi-level, location-based searches that we wanted, we built our own search engine. Our team is always thinking about how they can work better and smarter, which has led to some pretty interesting side projects.</p>
            </div>
        </div>

        <!-- Generic Tags-->
        <div v-else class="row split">
            <div class="col-sm-6 purple-bg">
                <h1 class="huge">Show and tell.</h1>
                <h3>Our work in <span class="label label-orange">{{this.$route.params.id}} <router-link to="/work/all" title="See all work"><i class="fa fa-times"></i></router-link></span></h3>
            </div>
        </div>

        <!-- Additional Elements -->
        <div v-if="this.$route.params.id === 'labs'" class="row parallax" style="background-image: url('../../static/images/office2.jpg');"></div>
        <div v-if="!this.$route.params.id" class="row">
            <div class="col-sm-12 col-padding">
                <div class="row row-padding">
                    <div class="col-sm-4 col-padding-sm">
                        <h4 class="orange">Innovate.</h4>
                        <p>Allow every project to spark your imagination. We work to come up with the best solution for the situation, no matter what.</p>
                    </div>
                    <div class="col-sm-4 col-padding-sm">
                        <h4 class="orange">Create.</h4>
                        <p>We're not satisfied just building what you want: we leverage the latest methods and cutting-edge technologies to build the software you need. </p>
                    </div>
                    <div class="col-sm-4 col-padding-sm">
                        <h4 class="orange">Disrupt.</h4>
                        <p>Shift the paradigm. We're not afraid to throw stale processes, technologies, or ideas out the window to pave the way forward.</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Headers -->
        <div v-if="this.$route.params.id === 'government' || this.$route.params.id === 'healthcare' || this.$route.params.id === 'education' || this.$route.params.id === 'labs'" class="row">
            <div class="col-sm-12 col-padding text-center">
                <h3>Our work in
                    <span class="label label-orange">
                        <span v-if="this.$route.params.id === 'labs'">fearless labs</span>
                        <span v-else-if="this.$route.params.id === 'education'">nonprofit & education</span>
                        <span v-else>{{this.$route.params.id}}</span>

                        <router-link to="/work/all" title="See all work"><i class="fa fa-times"></i></router-link>
                    </span>
                </h3>
            </div>
        </div>

        <!-- Titles -->
        <div v-if="this.$route.params.id === 'labs'" class="title" v-scroll-class:showtitle=450><h6>Fearless Labs</h6></div>
        <div v-else-if="this.$route.params.id === 'education'" class="title" v-scroll-class:showtitle=450><h6>Nonprofit & Education</h6></div>
        <div v-else-if="!this.$route.params.id" class="title" v-scroll-class:showtitle=450><h6>Portfolio</h6></div>
        <div v-else class="title" v-scroll-class:showtitle=450><h6>{{this.$route.params.id}}</h6></div>

        <!-- Cases -->
        <div v-for="item in cases" class="row parallax overlay-bg" v-bind:style="{ 'background-image': 'url(' + item.data.img_featured.url + ')' }">
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
  import Case from '@/components/Work/Case'

  export default {
    directives: {
      'scroll-class': VueScrollClass,
    },
    components: {
        Case
    },
    data() {
        return {
            cases: [],
            Prismic: null,
            PrismicDOM: null,
            linkResolver: null
        }
    },
    created() {
      this.Prismic = require('prismic-javascript')
      this.PrismicDOM = require('prismic-dom')
    },
    watch: {
      '$route': 'getContent'
    },
    methods: {
        getContent () {
            var req
            var Prismic = this.Prismic;
            var PrismicDOM = this.PrismicDOM;
            var apiEndpoint = 'https://fearless.cdn.prismic.io/api/v2'
            var apiToken = 'MC5XaVdueGgwQUFES0pIbWZU.eUNh77-977-977-9Qw4YJWg677-977-977-9Y--_ve-_vVLvv73vv73vv73vv73vv73vv71k77-977-977-977-977-9EQ'
            var makeTag = this.$route.params.id
            var linkResolver = function(doc) {
              return "/";
            };
            this.linkResolver = linkResolver;

            Prismic.getApi(apiEndpoint, {accessToken: apiToken})

            .then(function (api) {
                if (makeTag) {
                    return api.query([
                        Prismic.Predicates.at('document.type', 'case_study'),
                        Prismic.Predicates.at('document.tags', [makeTag])
                    ]);
                }
                else {
                    return api.query([
                        Prismic.Predicates.at('document.type', 'case_study')
                    ]);
                }
            })

            .then(response => {
                this.cases = response.results;
            })
        }
    },
    beforeMount () {
        this.getContent()
    }
  }
</script>
