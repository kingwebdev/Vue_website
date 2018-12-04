<template>
    <section>
        <div class="row split">
            <div class="title" v-scroll-class:showtitle=450><h6>Services</h6></div>
            <div class="col-sm-6 purple-bg">
                <h1 class="huge">We're not your typical assembly-line software shop.</h1>
                <p>If you ordered a custom hoodie but were sent one straight off the rack, you'd ask for your money back. So when it comes to custom software, why settle for anything less than a perfect fit?</p>
                <p class="large lightpurple">We recognize that there is no one-size-fits-all solution to software.</p>
                <p>Our talented team of designers and developers works with customers to identify their unique needs, and we pride ourselves on our ability to build custom products that turn digital dreams into reality. Our customers know what their users need, so we don't just drop off our product at the end of a project: we make customers and users an integral part of the development process.</p>
            </div>
            <div class="col-sm-6">
                <h2 class="purple">How we work</h2>
                <p class="large orange">Scrum. Kanban. Extreme Programming.</p>
                <p>We know agile like the back of our hand. Our small, cross-functional agile teams use iterative development cycles to rapidly deliver sleek, intuitive, and responsive software. Building software is a process, and our developers know that project goals are moving targets that shift as customer needs evolve. Adapting to change is baked into our development process, allowing us to deliver software that meets customer and user needs, no matter what.</p>

                <h2 class="purple">What we do</h2> 
                <p class="large orange">Innovate. Create. Disrupt.</p>
                <p>When it comes to software development, we're not afraid to push boundaries. Building sleek visualizations, powerful geospatial infrastructures, and cutting-edge user interfaces, we transform the way users interact with software.</p>
            </div>
        </div>
        <div class="row nopaddingb">
            <br/><br/>
            <div class="col-sm-12 col-padding">
                <div class="playpause" v-on:click="togglePlayPause">
                    <i class="material-icons icon-200" title="play" id="playpause">play_circle_outline</i>
                </div>
                <video poster="../../static/images/work11.jpg" width="100%" id="video">
                    <source src="../../static/vids/services.mp4" type="video/mp4">
                </video>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12 col-padding">
                <div class="row row-padding">
                    <div class="col-sm-4 col-padding-sm">
                        <i class="icon-streetsign icon-40 purple"></i>
                        <h4 class="purple">Design</h4>
                        <p>Building clean, fresh experiences that are intuitive, engaging, and smart.</p>
                        <br/>
                    </div>
                    <div class="col-sm-4 col-padding-sm">
                        <i class="icon-gears icon-40 purple"></i>
                        <h4 class="purple">Development</h4>
                        <p>Delivering powerful and scalable applications in diverse environments.</p>
                        <br/>
                    </div>
                    <div class="col-sm-4 col-padding-sm">
                        <i class="icon-cloud icon-40 purple"></i>
                        <h4 class="purple">DevOps & Cloud</h4>
                        <p>Improving workflows by establishing environments that employ agile and CI/CD best practices.</p>
                        <br/>
                    </div>
                </div>
                <div class="row row-padding">
                    <div class="col-sm-4 col-padding-sm">
                        <i class="icon-linegraph icon-40 purple"></i>
                        <h4 class="purple">Data Analytics</h4>
                        <p>Making complex data easy to understand through data correlation and organization.</p>
                        <br/>
                    </div>
                    <div class="col-sm-4 col-padding-sm">
                        <i class="icon-map-pin icon-40 purple"></i>
                        <h4 class="purple">Geospatial</h4>
                        <p>Creating detailed mapping visualizations and systems.</p>
                        <br/>
                    </div>
                    <div class="col-sm-4 col-padding-sm">
                        <i class="icon-refresh sway icon-40 purple"></i>
                        <h4 class="purple">Agile Coaching</h4>
                        <p>Changing cultures to adopt agile best practices, streamline workflows, and increase responsiveness.</p>
                        <br/>
                    </div>
                </div>
            </div>
        </div>
        <div class="row parallax" style="background-image: url('../static/images/work8.jpg')"></div>
        <div class="row">
            <div class="col-sm-12 col-padding">
                <h2 class="purple">The people we serve</h2>
                <hr/>
                <div class="row row-padding">
                    <div class="col-lg-3 col-md-6 col-padding-sm">
                        <h1 class="huge"><i class="icon-flag gray"></i></h1>
                        <h4 class="orange">Government</h4>
                        <router-link to="/work/government" class="btn btn-action btn-block">See work</router-link><br/>
                        <p>We started our business to help streamline government software, and we’ve never looked back. We love helping federal, state, and local agencies work better and smarter so they can increase their impact on communities across the country.</p>
                    </div>
                    <div class="col-lg-3 col-md-6 col-padding-sm">
                        <h1 class="huge"><i class="icon-heart gray"></i></h1>
                        <h4 class="orange">Healthcare</h4>
                        <router-link to="/work/healthcare" class="btn btn-action btn-block">See work</router-link><br/>
                        <p>We get healthcare. With a team of physicians on-staff, our healthcare division delivers solutions that are based on an in-depth understanding of the industry and a commitment to improving patient experiences.</p>
                    </div>
                    <div class="col-lg-3 col-md-6 col-padding-sm">
                        <h1 class="huge"><i class="icon-globe gray"></i></h1>
                        <h4 class="orange">Nonprofit & Education</h4>
                        <router-link to="/work/education" class="btn btn-action btn-block">See work</router-link><br/>
                        <p>Software with a soul is our MO. We've been lucky enough to receive a lot of support on our journey, and want to pay it forward. Together, we can make our communities stronger.</p>
                    </div>
                    <div class="col-lg-3 col-md-6 col-padding-sm">
                        <h1 class="huge"><i class="icon-beaker gray"></i></h1>
                        <h4 class="orange">Fearless Labs</h4>
                        <router-link to="/work/labs" class="btn btn-action btn-block">See work</router-link><br/>
                        <p>We're all about improvement, and that applies to our own processes, too. Our team is always thinking about how they can work better and smarter. Check out some of our creative in-house solutions.</p>
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
        methods: {
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