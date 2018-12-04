<template>
    <section>
        <div class="title" v-scroll-class:showtitle=450><h6>Community</h6></div>
        <div class="row parallax" style="background-image: url('../../static/images/baltimore.jpg')">
            <div class="col-sm-6 col-padding overlay col-sm-offset-6">
                <h1 class="purple huge">The Fearless Passion Award</h1>
                <p>We're excited to provide $1500 grants for Baltimore City residents who are committed to affecting change in their communities. At Fearless, we believe that magic happens when you support people who pursue their passions. If you have a passion project that will make Baltimore a better place, we want to hear from you!</p>
                <a target="_blank" class="btn btn-action" href="https://docs.google.com/forms/d/e/1FAIpQLSf9BimkhVSDvYTPfqBY3eb5ioo3Ukq4kWYjA7yQLILu_VfZpw/viewform?usp=sf_link"> Apply now</a>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12 col-padding">
                <div class="row">
                    <div class="col-sm-6">
                        <h3 class="orange">Information Sessions (optional)</h3>
                        <p>If you’re ready to apply for a Passion Award and want to learn more, you can attend one of our info sessions to ask some questions and hear more about how the grants work. Information sessions will be held on ________ at 4pm online. Registration is required to attend—to sign up, email ccoache@fearless.tech with your preferred date.</p>
                        
                        <h3 class="orange">Who is Eligible to Apply?</h3>
                        <p>Applicants must be high school-aged or older to be eligible to receive a Passion Award. If you are a high school student, you will need a project sponsor who is over the age of 18.</p>
                        
                        <h3 class="orange">Application Deadline</h3>
                        <p>Applications are due _________ by midnight. Late submissions will not be accepted for consideration. You will hear back about the status of your application by _________.</p>
                    </div>
                    <div class="col-sm-6">
                        <h3 class="orange">In-Person Pitch</h3>
                        <p>If selected, you will be invited to pitch your passion project to a small panel of judges. The panel will give you feedback on your idea and ultimately decide whether to award you the money for your project!</p>
                        
                        <h3 class="orange">Post-Award Requirements</h3>
                        <p>If you receive a passion award, you will be required to update us twice during the lifetime of your project. At the midpoint of your project, you will be required to submit a mid-project update to tell us how it's going and submit receipts. You will be provided with a template and must submit your mid-project update online. At the end of your project, we will ask you to come to Fearless to present on your work and submit remaining receipts. We will provide you with guidelines for the presentation.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row lightgray-bg text-center">
            <a target="_blank" class="btn btn-primary" href="https://docs.google.com/forms/d/e/1FAIpQLSf9BimkhVSDvYTPfqBY3eb5ioo3Ukq4kWYjA7yQLILu_VfZpw/viewform?usp=sf_link"> Apply for the Passion Award</a>
        </div>
        <!--<div class="row lightgray-bg">
            <div class="col-sm-12 col-padding">
                <h1 class="purple"><small>Apply for the </small>Fearless Passion Award</h1>
                <p>Reminder - it is a good idea to review our scoring rubric for your application before getting started to make sure you've got everything ready to go. Please make sure you submit only one application per project.</p>
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
                    <div class="form-group col-sm-12">
                        <label>Will you have a partner? If so, give their information</label>
                        <input type="text" class="form-control" />
                    </div>
                    <div class="form-group col-sm-12">
                        <label>Describe the problem or opportunity in Baltimore that your Passion Project will address. Be sure to explicitly explain the civic importance of this issue (up to 500 words).</label>
                        <textarea class="form-control"></textarea>
                    </div>
                    <div class="form-group col-sm-12">
                        <label>Summarize your Passion Project. Be sure your description explicitly describes how your project addresses the problem or opportunity you described earlier (up to 500 words).</label>
                        <textarea class="form-control"></textarea>
                    </div>
                    <div class="form-group col-sm-12">
                        <label>How will you know that your project was successful at the end? What will you use to measure success? (up to 250 words)</label>
                        <textarea class="form-control"></textarea>
                    </div>
                    <div class="form-group col-sm-12">
                        <label>What resources will you need to complete your project? What is your proposed budget?</label>
                        <textarea class="form-control"></textarea>
                    </div>
                    <div class="form-group col-sm-12">
                        <label>What are potential roadblocks to the successful completion of your project within the one year timeline? How will you mitigate those challenges? (up to 300 words)</label>
                        <textarea class="form-control"></textarea>
                    </div>
                    <div class="form-group col-sm-12">
                        <label>Please upload a proposed timeline for your project. Indicate how much time it will take you to hit each milestone.</label>
                        <textarea class="form-control"></textarea>
                    </div>
                    <div class="form-group col-sm-12">
                        <label>Why are you the best person to complete this project? Why should Fearless give you the grant? (up to 300 words)</label>
                        <textarea class="form-control"></textarea>
                    </div>
                    <div class="form-group col-sm-12">
                        <label>Your Résumé</label>
                        <input type="file" class="form-control" />
                    </div>
                    <div class="form-group col-sm-12 text-center">
                        <br/><a href="#" class="btn btn-primary">Send</a>
                    </div>
                </div>
            </div>
        </div>-->
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