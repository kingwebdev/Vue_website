<template>
    <section>
        <div class="row split">
            <div class="title" v-scroll-class:showtitle=450><h6>Story</h6></div>
            <div class="col-sm-6 purple-bg">
                <h1 class="huge">We're serious about changing the world.</h1>
            </div>
            <div class="col-sm-6">
                <h3 class="purple">Good companies adapt to shifting market trends. Great companies shape them.</h3>
                <p>We're constantly pushing the envelope so that we don’t just stay ahead of the tech industry: we drive it forward. Fearless was founded in 2009 to be a different kind of digital services company, so we’ve made it our mission to do more than just build software. We create tools that empower users and change lives. We're committed to building <b>software with a soul</b>, so we don't measure our success just in profits, but <router-link to="/about/community">by our impact.</router-link></p>
                <br/><hr/><br/>
                <div class="row">
                    <div class="col-md-6">
                        <h6>Our mission</h6>
                        <p class="large orange">To build software with a soul</p>
                        <br/>
                    </div>
                    <div class="col-md-6">
                        <h6>Our vision</h6>
                        <p class="large orange">To create a world where good software powers the things that matter</p>
                        <br/>
                    </div>
                </div>
            </div>
        </div>
        <div class="row parallax" style="background-image: url('../static/images/work11.jpg');">
            <div class="col-sm-6 col-padding col-sm-offset-6 overlay">
                <i class="icon-flag icon-200 purple"></i>
                <h1 class="purple">The truths we live by.</h1>

                <a @click="show2 = !show2">
                    <h4>Passion
                        <i v-if="show2" class="material-icons pull-right">remove</i>
                        <i v-else="show2" class="material-icons pull-right">add</i>
                    </h4>
                </a>
                <transition name="slide-fade">
                    <p v-if="show2">Life is short, so why waste time on something you're not passionate about? Do what you love, and love what you do.</p>
                </transition>
                <br/>

                <a @click="show1 = !show1">
                    <h4>Innovation
                        <i v-if="show1" class="material-icons pull-right">remove</i>
                        <i v-else="show1" class="material-icons pull-right">add</i>
                    </h4>
                </a>
                <transition name="slide-fade">
                    <p v-if="show1">Don't get boxed in by the possible. The greatest breakthroughs start out as pipe dreams — that's what makes them revolutionary.</p>
                </transition>
                <br/>

                <a @click="show3 = !show3">
                    <h4>Integrity
                        <i v-if="show3" class="material-icons pull-right">remove</i>
                        <i v-else="show3" class="material-icons pull-right">add</i>
                    </h4>
                </a>
                <transition name="slide-fade">
                    <p v-if="show3">It's one thing to think up the next big idea, but another to deliver on it. We don't cut corners, and we only take on projects that align with our values.</p>
                </transition>
                <br/>

                <a @click="show4 = !show4">
                    <h4>Improvement
                        <i v-if="show4" class="material-icons pull-right">remove</i>
                        <i v-else="show4" class="material-icons pull-right">add</i>
                    </h4>
                </a>
                <transition name="slide-fade">
                    <p v-if="show4">Technology is constantly improving and evolving, so why shouldn’t we? We strive to make every project better than our last.</p>
                </transition>
                <br/>

                <a @click="show5 = !show5">
                    <h4>Community
                        <i v-if="show5" class="material-icons pull-right">remove</i>
                        <i v-else="show5" class="material-icons pull-right">add</i>
                    </h4>
                </a>
                <transition name="slide-fade">
                    <p v-if="show5">We believe in giving back wherever we can, and we don’t consider a project a win unless it helps our communities thrive and flourish, too.</p>
                </transition>
            </div>
        </div>
        <div class="row split nopadding">
            <div class="timeline" v-scroll-class:activated=600>
                <div class="bar">
                    <div class="timeline-item">
                        <h1><i class="icon-lightbulb"></i></h1>
                        <h6>February 2009</h6>
                        <p>Delali founds Fearless in a basement in Laurel, MD.</p>
                    </div>
                    <div class="timeline-item">
                        <h1><i class="lnr lnr-apartment"></i></h1>
                        <h6>June 2010</h6>
                        <p>We hire our second employee and get an upgrade, moving into a one-cubicle "office" at UMBC.</p>
                    </div>
                    <div class="timeline-item">
                        <h6>October 2010</h6>
                        <p>Our first prime contract with the Secret Service kicks off. Soon after, our monthly pizza parties begin.</p>
                    </div>
                    <div class="timeline-item">
                        <h6>December 2012</h6>
                        <p>We begin our monthly Fearless Tech Breakfasts, because sometimes you just need to talk tech over a stack of pancakes.</p>
                    </div>
                    <div class="timeline-item">
                        <h1><i class="lnr lnr-users"></i></h1>
                        <h6>September 2013</h6>
                        <p>The Fearless herd grows to 10 Purple Cows.</p>
                    </div>
                    <div class="timeline-item">
                        <h6>December 2013</h6>
                        <p>Fearless partners up to launch ADV, an open source tool suite aimed at helping DoD developers share and collaborate.</p>
                    </div>
                    <div class="timeline-item">
                        <h6>May 2014</h6>
                        <p>Our beloved Cow Costume makes its debut at the AFCEA 5K run.</p>
                    </div>
                    <div class="timeline-item">
                        <h1><i class="lnr lnr-shirt"></i></h1>
                        <h6>January 2015</h6>
                        <p>The Fearless hoodies arrive, and #fearlessswagsighting makes its first appearance.</p>
                    </div>
                    <div class="timeline-item">
                        <h6>July 2015</h6>
                        <p>Cowbot, our helpful Slack robot, is born.</p>
                    </div>
                    <div class="timeline-item">
                        <h6>October 2015</h6>
                        <p>We launch our HUBZone certification and compliance tool, <a href="http://hubfinder.io" target="_blank">HUBFinder</a>, at the National HUBZone Conference.</p>
                    </div>
                    <div class="timeline-item">
                        <h6>November 2015</h6>
                        <p>A cardboard cutout of Delali starts floating around the office and startling unsuspecting employees.</p>
                    </div>
                    <div class="timeline-item">
                        <h1><i class="lnr lnr-apartment"></i></h1>
                        <h6>February 2016</h6>
                        <p><router-link :to="{name: 'BlogPostByUrl', params: {
                          id: 727,
                          year: '2016',
                          month: '04',
                          day: '04',
                          title: 'weve-moved'
                        }}">Fearless moves to Spark Baltimore!</router-link></p>
                    </div>
                    <div class="timeline-item">
                        <h6>April 2016</h6>
                        <p>We <router-link :to="{name: 'BlogPostByUrl', params: {
                          id: 1258,
                          year: '2016',
                          month: '12',
                          day: '27',
                          title: 'fearless-awarded-funding-from-tedco-to-develop-new-product'
                          }}">win $100,000 in Seed Funding from TEDCO</router-link> to develop our product, <a href="http://geoand.io/" target="_blank">Geo&!</a></p>
                    </div>
                    <div class="timeline-item">
                        <h1><i class="lnr lnr-heart"></i></h1>
                        <h6>June 2016</h6>
                        <p>The Fearless Baby Boom begins, with seven new calves (and counting!) born in 2016 and 2017.</p>
                    </div>
                    <div class="timeline-item">
                        <h1><i class="lnr lnr-apartment"></i></h1>
                        <h6>November 2016</h6>
                        <p>We continue to grow, with thirty employees on staff! We claim the suite across the hall at Spark to accommodate our growing herd.</p>
                    </div>
                    <div class="timeline-item">
                        <h6>March 2017</h6>
                        <p>The whole company takes the day off for our first office <router-link :to="{name: 'BlogPostByUrl', params: {
                          id: 1516,
                          year: '2017',
                          month: '03',
                          day: '30',
                          title: 'team-building-day-at-fearless'
                          }}">Hooky Day</router-link>, giving us all a chance to witness Amber's hip hop dance skills.</p>
                    </div>
                    <div class="timeline-item">
                        <h6>April 2017</h6>
                        <p>After hiring our fourth employee named "Jo(h)n," we hold a "re-naming ceremony" to end the madness. Philly John, Father John, Doc Jon, and King Jon make their debut.</p>
                    </div>
                    <div class="timeline-item">
                        <h6>May 2017</h6>
                        <p>Fearless is awarded our 40th contract!</p>
                    </div>
                    <div class="timeline-item">
                        <h1><i class="lnr lnr-apartment"></i></h1>
                        <h6>June 2017</h6>
                        <p>Our team continues to grow, and we need even more space! Fearless gets a <router-link :to="{name: 'BlogPostByUrl', params: {
                          id: 1740,
                          year: '2017',
                          month: '07',
                          day: '11',
                          title: 'spark-baltimore-is-about-to-get-a-lot-more-purple'
                          }}">third suite at Spark</router-link>, painted in our signature purple cow print.</p>
                    </div>
                    <div class="timeline-item">
                        <h1><i class="lnr lnr-shirt"></i></h1>
                        <h6>August 2018</h6>
                        <p>Fearless launches a <router-link :to="{name: 'BlogPostByUrl', params: {
                          id: 2184,
                          year: '2018',
                          month: '08',
                          day: '16',
                          title: 'new-look-same-purple-cow'
                        }}">new brand</router-link>, as well as <a href="http://fearless.store/" target="_blank">the official Fearless Store</a></p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row parallax" style="background-image: url('../static/images/team1.jpg');">
            <div class="col-sm-6 col-padding col-sm-offset-6 overlay">
                <i class="icon-trophy icon-200 sway purple"></i>
                <h1 class="purple">Brags</h1>
                <div class="row">
                    <div class="col-sm-6">
                        <ul class="list-trophies">
                            <li>SBA's Maryland Minority-Owned Small Business of the Year 2017</li>
                            <li>Baltimore Business Journal's 2017 Best Places to Work</li>
                            <li>The Maryland Incubator Company of the Year Awards Best Service Company 2017</li>
                            <li>GBC Bridging the Gap Finalist 2016</li>
                            <li>SmartCEO Family Owned Business Award 2016</li>
                            <li>Baltimore Innovation Week’s Dev/Design Firm of the Year 2016</li>
                            <li>Downtown Baltimore Award 2015</li>
                            <li>Baltimore TechConnect Grant Winner</li>
                        </ul>
                    </div>
                    <div class="col-sm-6">
                        <ul class="list-arrows">
                            <li><b>8(a)</b></li>
                            <li><b>HUBZone</b></li>
                            <li><b>DoD Mentor-Protégé Participant</b></li>
                            <li><b>Chef Partner</b></li>
                            <li><b>AWS Partner</b></li>
                            <li><b>bwTech@UMBC Cyber Security Graduate</b></li>
                            <li><b>MBE/DBE Maryland</b></li>
                            <li><b>Baltimore MBE</b></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script>
import VueScrollClass from 'vue-scroll-class'

export default {
    directives: {
        'scroll-class': VueScrollClass
    },
    data() {
        return {
            show1: false,
            show2: false,
            show3: false,
            show4: false,
            show5: false
        }
    }
}
</script>
