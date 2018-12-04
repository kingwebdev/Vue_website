<template>
    <section v-if="item.data">
        <div class="row nopaddingb split">
            <div class="title" v-scroll-class:showtitle=450><h6>People</h6></div>
            <div class="col-sm-6 purple-bg">
                <h1 class="huge">People. We're pretty sure we have the best.</h1>
                <p>At Fearless, we're not afraid to show off our distinctly Purple culture (and no, we're not just talking about the color). Our people are our secret sauce — we could tell you about how amazingly talented our employees are and how passionate they are about their work, but if they made it on the team, that should be obvious.</p>
                <p class="large lightpurple">So who are we? Here’s our team at a glance.</p>
                <div class="img-flush">
                    <img class="img-responsive" src="../../../static/images/play2.jpg" />
                    <img class="img-responsive" src="../../../static/images/team2.jpg" />
                </div>
            </div>
            <div class="col-sm-6 text-center infographic">
                <div class="row">
                    <div class="col-lg-6 col-md-12 col-xs-6">
                        <i class="material-icons icon-80 lightgray">group</i>
                        <h1 class="purple">{{item.data.number_members}}</h1>
                        <p>Team members</p>
                    </div>
                    <div class="col-lg-6 col-md-12 col-xs-6">
                        <i class="material-icons icon-80 lightgray">forum</i>
                        <h1 class="purple">{{item.data.number_channels}}+</h1>
                        <p>slack channels</p>
                    </div>
                </div>
                <br/>
                <vue-chart type="horizontalBar" :data="memberData" :options="memberOptions" :height="100"></vue-chart>
                <br/>
                <div class="row">
                    <div class="col-lg-4 col-md-12 col-xs-4">
                        <h6 class="purple">over</h6>
                        <h3 class="purple">{{item.data.percentage_female}}%</h3>
                        <p>female</p>
                        <br/>
                    </div>
                    <div class="col-lg-4 col-md-12 col-xs-4">
                        <h6 class="purple">over</h6>
                        <h3 class="purple">{{item.data.percentage_minority}}%</h3>
                        <p>minority</p>
                        <br/>
                    </div>
                    <div class="col-lg-4 col-md-12 col-xs-4">
                        <h6 class="purple">over</h6>
                        <h3 class="purple">{{item.data.percentage_hubzone}}%</h3>
                        <p>live in <a href="http://maps.certify.sba.gov/hubzone/map" target="_blank">HUBZones</a></p>
                        <br/>
                    </div>
                </div>
                <hr/>
                <vue-chart type="pie" :data="petData" :options="petOptions"></vue-chart>
                <br/>
                <div class="row">
                    <div class="col-lg-6 col-md-12 col-xs-6">
                        <vue-chart type="pie" :data="deviceData" :options="deviceOptions"></vue-chart>
                        <h1 class="purple">3:1</h1>
                        <p>Macs outnumbering PCs</p><br/>
                    </div>
                    <div class="col-lg-6 col-md-12 col-xs-6">
                        <i class="material-icons icon-80 lightgray">child_friendly</i>
                        <h3 class="purple">7 babies </h3>
                        <p>born since 2016</p>
                    </div>
                </div>
                <hr/>
                <h6 class="gray text-center">
                    Last year we consumed
                </h6><br/>
                <div class="row">
                    <div class="col-lg-3 col-md-12 col-xs-6">
                        <h3 class="purple">84lbs</h3>
                        <p>Peanut M&Ms</p>
                        <br/>
                    </div>
                    <div class="col-lg-3 col-md-12 col-xs-6">
                        <h3 class="purple">77lbs</h3>
                        <p>Reese's Pieces</p>
                        <br/>
                    </div>
                    <div class="col-lg-3 col-md-12 col-xs-6">
                        <h3 class="purple">18lbs</h3>
                        <p>Skittles</p>
                        <br/>
                    </div>
                    <div class="col-lg-3 col-md-12 col-xs-6">
                        <h3 class="purple">40 gal</h3>
                        <p>Grape Gatorade</p>
                        <br/>
                    </div>
                </div>
                <hr/>
                <div class="row">
                    <div class="col-lg-6 col-md-12 col-xs-6">
                        <i class="material-icons icon-60 lightgray">directions_run</i>
                        <h3 class="orange">65 hrs/mo</h3>
                        <p>Spent at our treadmill desks (how else would we work off the M&Ms?)</p>
                        <br/>
                    </div>
                    <div class="col-lg-6 col-md-12 col-xs-6">
                        <i class="material-icons icon-60 lightgray">restaurant</i>
                        <h3 class="orange">$1,600/yr</h3>
                        <p>Donated from our snack funds to the MD Food Bank</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row nopaddingb">
            <div class="col-sm-12 col-padding text-center">
                <h1 class="purple">The faces of Fearless.</h1>
            </div>
        </div>
        <div class="row flush-sm">
            <div class="col-lg-2 col-sm-3 col-xs-4 col-flush" v-for="value in item.data.member">
                <img v-bind:src="value.img_member.url" class="img-responsive" />
                <div class="img-overlay">
                    <br class="hidden-xs"/>
                    <br class="hidden-xs"/>
                    <h4>{{value.name}}</h4>
                    <hr class="hidden-xs"/>
                    <h6 class="hidden-xs">{{value.department}}</h6>
                </div>
            </div>
            <router-link class="col-lg-2 col-sm-3 col-xs-4 col-flush text-center purple" to="/careers">
                <img src="../../../static/images/cow.jpg" class="img-responsive" />
                <div class="img-overlay" style="display:block">
                    <h2><b>You?</b></h2>
                    <p class="hidden-xs"><b>Are you a purple cow? Check out our current openings.</b></p>
                    <i class="lnr lnr-arrow-right icon-40 hidden-xs"></i>
                </div>
            </router-link>
        </div>
    </section>
</template>



<script>
  import Prismic from 'prismic-javascript'
  import VueScrollClass from 'vue-scroll-class'
  import VueChart from 'vue-chart-js'

  export default {
    directives: {
      'scroll-class': VueScrollClass,
    },
    components: {
        VueChart
    },
    data: () => ({
        item: [],
        Prismic: null,
        PrismicDOM: null,
        linkResolver: null,
        memberData: {
            datasets: [{
                data: [40, 30, 40],
                backgroundColor: ['#663399', '#4d2673', '#c1add6']
            }],
            labels: [
                'Female',
                'Minority',
                'HUBZone'
            ]
        },
        memberOptions: {
            legend: false,
            scales: {
                xAxes: [{
                    gridLines: false,
                    display: false,
                    ticks: {
                        suggestedMin: 0,
                        suggestedMax: 100,
                        beginAtZero: true
                    }
                }]
            }
        },
        deviceData: {
            datasets: [{
                data: [3, 1],
                backgroundColor: ['#663399', '#c1add6']
            }],

            labels: [
                'Mac',
                'PC'
            ]
        },
        deviceOptions: {
            legend: {
                position: 'left',
            }
        },
        petData: {
            datasets: [{
                data: [20, 13, 10, 2, 2],
                backgroundColor: ['#d95926', '#4d2673', '#663399', '#854873', '#A45358']
            }],
            labels: [
                'Cats',
                'Dogs',
                'Fish',
                'Horses',
                'Rats'
            ]
        },
        petOptions: {
            legend: {
                position: 'left',
            }
        }
    }),
    created () {
      this.Prismic = require('prismic-javascript')
      this.PrismicDOM = require('prismic-dom')
      this.getContent()
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

            var linkResolver = function(doc) {
              return "/";
            };
            this.linkResolver = linkResolver;

            Prismic.getApi(apiEndpoint, {accessToken: apiToken})

            .then(function (api) {
                return api.query([
                    Prismic.Predicates.at('document.type', 'people_page')
                ]);
            })

            .then(response => {
                this.item = response.results[0];
            })
        }
    },
    beforeMount () {
        this.getContent()
    }
  }
</script>

<style scoped>
    .infographic h1,
    .infographic h2,
    .infographic h3,
    .infographic h4,
    .infographic h5,
    .infographic h6,
    .infographic p {
        padding: 0;
        margin: 0;
    }
</style>
