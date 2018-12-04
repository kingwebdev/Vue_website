<template>
  <section>
    <div class="row split">
      <div class="title" v-scroll-class:showtitle=450><h6>Careers</h6></div>
      <div class="col-sm-6 purple-bg">
        <h1 class="huge">We're always looking for purple talent.</h1>
      </div>
      <div class="col-sm-6">
        <p class="large purple">
          If you stop by Fearless HQ, you're guaranteed to see a few things: bean bags, hoodies, and a whole lot of purple cow print.</p>
        <p>
          We want our employees to be excited to come into work every day, and we encourage members of the Fearless team to explore their passions both in and out of the office. So if you need a custom shirt printed, drop Amber a line. And if you want to talk Corvettes, Shannon is our resident expert. Our people make us who we are, and we recruit talented individuals who not only believe in our mission, but who are excited to be part of our unique team.</p>
        <p>
          We don't take ourselves too seriously, and we work hard to build a culture that is fun, creative, and family-friendly. So what gets us out of bed every morning?</p>
      </div>
    </div>
    <div class="row nopaddingb">
        <br/><br/>
        <div class="col-sm-12 col-padding">
            <div class="playpause" v-on:click="togglePlayPause">
                <i class="material-icons icon-200" title="play" id="playpause">play_circle_outline</i>
            </div>
            <video poster="../../static/images/work14.jpg" width="100%" id="video">
                <source src="../../static/vids/careers.mp4" type="video/mp4">
            </video>
        </div>
    </div>
    <div class="row">
        <div class="col-sm-12 col-padding">
            <div class="row row-padding">
                <div class="col-sm-3 col-padding-sm">
                    <h1 class="huge"><i class="icon-target purple"></i></h1>
                    <h4 class="purple">We only build software that aligns with our mission.</h4>
                    <p>Fearless is a purpose-driven organization, and we focus on building software that impacts lives and communities.</p>
                </div>
                <div class="col-sm-3 col-padding-sm">
                    <h1 class="huge"><i class="icon-happy purple"></i></h1>
                    <h4 class="purple">We actually like being together!</h4>
                    <p>People are always surprised by how close-knit we are even though we don't always see each other every day, or even work on the same projects. Our monthly pizza meetings, Tech Breakfasts, Backoffice Breakfasts, and seasonal bashes help to build our family atmosphere.</p>
                </div>
                <div class="col-sm-3 col-padding-sm">
                    <h1 class="huge"><i class="icon-chat purple"></i></h1>
                    <h4 class="purple">We admit it: we love using Slack.</h4>
                    <p>Sure, we use it to communicate across projects and teams, but you can also catch us swapping Game of Thrones fan theories, sharing pictures of our pets, and celebrating team member milestones and achievements on and off the job.</p>
                </div>
                <div class="col-sm-3 col-padding-sm">
                    <h1 class="huge"><i class="icon-hourglass purple"></i></h1>
                    <h4 class="purple">Got some down time?</h4>
                    <p>When they're not hustling, our team members can grab a handful (or two) of Skittles, Peanut M&Ms, or trail mix from our company candy machines and play with some of our tech toys (including our very own company drone). And if they really need some energy, employees can take a quick nap on one of our giant purple bean bag chairs.</p>
                </div>
            </div>
      </div>
    </div>
    <div class="row parallax" style="background-image: url('../static/images/play1.jpg');">
      <div class="col-sm-6 col-padding col-sm-offset-6 overlay">
        <h1 class="purple">We do things a bit differently around here.</h1>

        <h4>Things happen fast.</h4>
        <p>
          We're small so we can move quickly. Have a suggestion for something we need or a better way of doing things? If you see things that we can improve on, drop us a line — we're always looking for ways to get better.</p>
        <br/>

        <h4>Our cultural interview is weighted higher than our technical interviews.</h4>
        <p>
          We get excited about applicants who believe in our mission and values because we know that passion drives our success. We understand that technology, markets and trends will change over time — the one thing that will remain consistent is who we are as a company and what we believe in.</p>
        <br/>

        <h4>We believe in diversity in tech.</h4>
        <p>
          We know that the tech industry can be hard to break into, and as a certified Minority Business Enterprise with a workforce of over 40% women and 30% minority employees, we strive to support and share our knowledge with historically underrepresented populations.</p>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12 col-padding">
        <h1 class="purple">Benefits</h1>
        <p>
          People perform at their best when they're happy and healthy, so at Fearless, we not only provide our team members with competitive healthcare and paid time off, we also offer fun perks like snack allowances and tech budgets to keep things interesting. Our benefits package reflects the changing needs of our diverse workforce, and it's designed to support our team (and their families) as they grow. We keep an open dialogue with everyone on the team to find ways to improve our benefits package each year.</p>

        <div class="row row-padding">
          <div class="col-md-4 col-padding-sm">
            <i class="icon-mobile icon-40 gray"></i>
            <h4 class="orange">Tech</h4>
            <p>
              Everyone gets a yearly budget of $750 for any tech or gadgets they need in their life. Team members have bought drones, home automation systems, fitness trackers, and even 3D printers.</p>
          </div>
          <div class="col-md-4 col-padding-sm">
            <i class="icon-wine icon-40 gray"></i>
            <h4 class="orange">Snacks</h4>
            <p>
              If you like snacking, we've got your back. Get a monthly Amazon allowance for your own stash of snacks, and hit up our snack dispenser, candy machine, or drink fridge for some treats and a purple Gatorade.</p>
          </div>
          <div class="col-md-4 col-padding-sm">
            <i class="icon-gift icon-40 gray"></i>
            <h4 class="orange">Swag</h4>
            <p>A lot of us live in our Fearless gear, and our moms have even asked for it. We'll set you up.</p>
          </div>
        </div>
        <div class="row row-padding">
          <div class="col-md-4 col-padding-sm">
            <i class="icon-strategy icon-40 gray"></i>
            <h4 class="orange">Toys</h4>
            <p>
              We have an office tech toy collection that team members can check out and hack on. So far it includes a company drone, Google Glass, several Leap Motion Controllers, and lots of AWS sandboxes.</p>
          </div>
          <div class="col-md-4 col-padding-sm">
            <i class="icon-map icon-40 gray"></i>
            <h4 class="orange">Housing</h4>
            <p>
              Live in a HUBZone? We have an incentive for HUBZone team members to help offset the cost of rent or mortgage. For aspiring homeowners, we also participate in Baltimore City's <a href="https://livebaltimore.com/live-near-your-work/" target="_blank">Live Near Your Work</a> program and the Maryland Mortgage Program's <a href="https://livebaltimore.com/financial-incentives/details/house-keys-4-employees/#.WmIbNJM-fzJ" target="_blank">House Keys 4 Employees initiative</a>.</p>
          </div>
          <div class="col-md-4 col-padding-sm">
            <i class="icon-hotairballoon icon-40 gray"></i>
            <h4 class="orange">Paid Leave</h4>
            <p>
              We don't believe in working on our birthdays. Everybody receives 3 weeks accrued vacation, 1 week sick leave, 10 Federal holidays, their birthday, jury duty, and bereavement.</p>
          </div>
        </div>
        <div class="row row-padding">
          <div class="col-md-4 col-padding-sm">
            <i class="icon-pencil icon-40 gray"></i>
            <h4 class="orange">Education & Training</h4>
            <p>
              Go to the conferences and training events that you want to attend! Team members get an accrued budget of up to $4,000 per year for classes, travel, events, and materials.</p>
          </div>
          <div class="col-md-4 col-padding-sm">
            <i class="icon-alarmclock icon-40 gray"></i>
            <h4 class="orange">Flexible Schedules</h4>
            <p>
              This isn't a 9-5 job unless you want it to be. We get it. Life doesn't contain itself to the hours after 5pm and before 9am. As long as you meet core hours, you typically have a lot of freedom in setting your own schedule.</p>
          </div>
          <div class="col-md-4 col-padding-sm">
            <i class="icon-shield icon-40 gray"></i>
            <h4 class="orange">Insurance</h4>
            <p>
              We cover 100% of the employee-only premium for HMO medical / PPO HSA, Prescription Drug, Dental, Vision, Life, Short-Term Disability, and Long-Term Disability coverage. We also offer the option for dependent coverage on all the group plans.</p>
          </div>
        </div>
        <div class="row row-padding">
          <div class="col-md-4 col-padding-sm">
            <i class="icon-wallet icon-40 gray"></i>
            <h4 class="orange">401K</h4>
            <p>We match up to 4% of your salary in a Safe Harbor 401k Matching Plan.</p>
          </div>
          <div class="col-md-4 col-padding-sm">
            <i class="icon-newspaper icon-40 gray"></i>
            <h4 class="orange">Publishing Bonus</h4>
            <p>Write a how-to or training publication and receive a publishing bonus from Fearless for your work.</p>
          </div>
          <div class="col-md-4 col-padding-sm">
            <i class="icon-profile-female icon-40 gray"></i>
            <h4 class="orange">Referral Bonus</h4>
            <p>Bring your friends! Team members referring a friend (cleared with poly) can get a nice bonus.</p>
          </div>
        </div>
        <div class="row row-padding">
          <div class="col-md-4 col-padding-sm">
            <i class="icon-ribbon icon-40 gray"></i>
            <h4 class="orange">Orioles Tickets</h4>
            <p>Let's go O's! We have season tickets that we give out to interested team members.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row split">
      <div class="col-sm-12 col-padding">
        <div class="row">
          <div class="col-sm-4 purple-bg">
            <h1 class="lightpurple">Think we might be a good fit?</h1>
            <p>
              We're always in the market for fresh and exciting talent. If you want to join a team of people passionate about doing work differently, check out our open positions below.</p>
          </div>
          <div class="col-sm-4 text-center">
            <i class="icon-puzzle icon-200 lightpurple"></i>
          </div>
          <div class="col-sm-4">
            <h4 class="purple">The process</h4>
            <p>
              If you apply for a position and we like what we see, we'll ask you to start our multi-interview process. Our mission is what drives us, so in addition to our
              <router-link :to="{name: 'BlogPostByUrl', params: {
                id: 238,
                year: '2015',
                month: '11',
                day: '24',
                title: 'letting-the-techies-handle-the-tech-the-technical-interview'
                }}">technical and business interviews</router-link>, we also take time to
                <router-link :to="{name: 'BlogPostByUrl', params: {
                  id: 199,
                  year: '2015',
                  month: '11',
                  day: '12',
                  title: 'the-cultural-interview'
                }}">talk about our unique culture</router-link>
              to make sure you'll be part of a team with values and opportunities that align with your own goals. Performing peer-interviews right off the bat also gives you a chance to get to know the people that you'd be working with every day.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="row parallax" style="background-image: url('../static/images/work4.jpg')"></div>
    <div class="row split" id="openings">
      <div class="col-sm-6 purple-bg">
        <h1 class="lightpurple">Openings</h1>
        <p>
          Want to work with Fearless but don't see a posting that fits? Submit your resume and a cover letter to pitch your dream job.</p>
        <p>In our world, things change quickly—you may be perfect for a future role on our team.</p>
      </div>
      <div class="col-sm-6">
        <div v-if="department.jobs.length" v-for="department in departments">
          <h3 class="gray">{{department.name}}</h3>
          <div v-for="job in department.jobs">
            <router-link :to="{name: 'Job', query: {gh_jid: job.id}}">
              <h4 class="material-icons icon-40 pull-right">arrow_forward</h4>
              <h4>{{job.title}}</h4>
              <p>{{job.location.name}}</p>
            </router-link>
            <hr/>
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
          'scroll-class': VueScrollClass,
        },
        data() {
          return {
            showMenu: false,
            jobs: [],
            departments: []
          }
        },
        created() {
          this.getDepartments()
        },
        methods: {
            getDepartments: function () {
              this.$http.jsonp('https://api.greenhouse.io/v1/boards/fearless/departments?render_as=tree')
              .then(response => {
                this.departments = response.data.departments;
              })
            },
            togglePlayPause: function () {
               var playpause = document.getElementById("playpause");
               if (video.paused || video.ended) {
                  playpause.title = "pause";
                  playpause.innerHTML = "pause_circle_outline";
                  playpause.classList.add("pause");
                  video.play();
               }
               else {
                  playpause.title = "play";
                  playpause.innerHTML = "play_circle_outline";
                  playpause.classList.remove("pause");
                  video.pause();
               }
            }
        }
    }
</script>