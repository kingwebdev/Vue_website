<template>
    <section>
        <div class="title" v-scroll-class:showtitle=450><h6>Careers</h6></div>
        <div class="row parallax" style="background-image: url('../../static/images/work11.jpg')">
            <div class="col-md-6 col-xs-9 triangle-box">
                <h1>{{job.title}}</h1>
                <p v-if="job.location" class="large text-muted">{{job.location.name}}</p>
                <p><span v-for="department in job.departments" class="label label-gray">{{department.name}}</span></p><br/>
                <router-link to="/careers#openings" class="btn btn-primary">Back to all openings</router-link>
            </div>
        </div>
        <div class="row split">
            <div class="col-sm-6 purple-bg">
                <div v-html="decodeHtml(job.content)"></div>
            </div>
            <div class="col-sm-6">
                <h4 class="purple">Apply for this job</h4>
              <div id="grnhse_app"></div>
            </div>
        </div>
        <div class="row lightgray-bg text-center">
            <router-link to="/careers#openings" class="btn btn-primary">Back to all openings</router-link>
        </div>
    </section>
</template>


<script>
  import VueScrollClass from 'vue-scroll-class'

  export default {

    name: 'app',
    directives: {
      'scroll-class': VueScrollClass,
    },
    data() {
      return {
        showMenu: false,
        job: [],
        jobId: this.$route.query.gh_jid
      }
    },
    created() {
      this.getJob()
      this.decodeHtml()
    },
    methods: {
      getJob: function () {
        this.$http.jsonp('https://api.greenhouse.io/v1/boards/fearless/jobs/' + this.jobId)
          .then(response => {
            this.job =response.data;
            Grnhse.Iframe.load(this.jobId);
          })
      },
      decodeHtml: function (html) {
        var txt = document.createElement("textarea");
        txt.innerHTML = html;
        return txt.value;
      }
    }
  }
  </script>
