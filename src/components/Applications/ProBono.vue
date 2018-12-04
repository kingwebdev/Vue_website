<template>
    <section>
        <div class="title" v-scroll-class:showtitle=450><h6>Community</h6></div>
        <div class="row parallax" style="background-image: url('../../static/images/baltimore.jpg')">
            <div class="col-sm-6 col-padding overlay col-sm-offset-6">
                <h1 class="purple huge">The Fearless Pro Bono Program</h1>
                <p>If you're familiar with Fearless, you know that we're crazy about Charm City. Baltimore has shaped our unique company culture, and we give back to our community by providing pro bono software development services that address local problems and support local organizations. Baltimore is made up of countless diverse neighborhoods all working to make our city the best it can be, and with the Fearless Pro Bono Program, we can build up our community together.</p>
                <h3><span class="label label-gray">Applications open Summer 2018</span></h3>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12 col-padding">
                <h3 class="orange">Let's get to work.</h3>
                <ul class="list-arrows">
                    <li>Our Pro Bono work is way for Fearless to help local organizations maximize their resources and work to their fullest potential.</li>
                    <li>Each Fearless Pro Bono Project is 4-8-weeks long and designed to deliver a working digital solution to a Baltimore-based organization.</li>
                    <li>Representatives from selected organizations will work closely with a small group of our developers to complete the project as our Pro Bono Partners.</li>
                    <li>Pro Bono Partners must be able to commit between 10 and 20 hours each week to their project.</li>
                    <li>While Pro Bono Partners must come up with the general idea for their digital solution, our designers and developers will help to define the project scope and set realistic goals.</li>
                    <li>Once the project is complete, Pro Bono Partners assume full responsibility for the maintenance of the software.</li>
                </ul>
            </div>
        </div>
        <div v-show="false" class="row lightgray-bg">
            <div class="col-sm-12 col-padding">
                <h1 class="purple"><small>Apply for the </small>Fearless ProBono Program</h1>
                <div class="row">
                    <div class="form-group col-sm-6">
                        <label>First name</label>
                        <input type="text" class="form-control" />
                    </div>
                    <div class="form-group col-sm-6">
                        <label>Last name</label>
                        <input type="text" class="form-control" />
                    </div>
                    <div class="form-group col-sm-6">
                        <label>Email</label>
                        <input type="text" class="form-control" />
                    </div>
                    <div class="form-group col-sm-6">
                        <label>Phone number</label>
                        <input type="text" class="form-control" />
                    </div>
                    <div class="form-group col-sm-6">
                        <label>Name of your organization</label>
                        <input type="text" class="form-control" />
                    </div>
                    <div class="form-group col-sm-6">
                        <label>Organization's website</label>
                        <input type="text" class="form-control" />
                    </div>
                    <div class="form-group col-sm-12">
                        <label>Organization's Mission</label>
                        <textarea class="form-control"></textarea>
                    </div>
                    <div class="form-group col-sm-12">
                        <label>What problem or opportunity do you see in Baltimore, and how can Fearless help you address it?</label>
                        <textarea class="form-control"></textarea>
                    </div>
                    <div class="form-group col-sm-12 text-center">
                        <br/><a href="#" class="btn btn-primary">Send</a>
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
    }
  }
</script>