<template>
    <section>
        <div class="title" v-scroll-class:showtitle=450><h6>Contact</h6></div>
        <div class="row parallax">
            <iframe src='https://a.tiles.mapbox.com/v4/bhalt.m5kg251m/attribution.html?access_token=pk.eyJ1IjoiYmhhbHQiLCJhIjoiRG1rSGdZSSJ9.85bx0sn_v0wR1ez21QJzGg' style="width: 100%; height: 100%; min-height: 500px; position: absolute;"></iframe>
            <div class="col-sm-6 col-padding overlay">
                <h1 class="huge orange">You can find us in Baltimore.</h1>
                <p>Have ideas for how we could work together, or just want to chat to find out more? We'd love to hear from you! If working with or joining a purple cow software shop appeals to you, send us a message and we'll get right back to you.</p>
                <br/><br/>
                <a target="_blank" href="http://twitter.com/fearlesssol"><i class="fa fa-twitter fa-circled"></i></a>
                <a target="_blank" href="http://facebook.com/fearlesssolutions"><i class="fa fa-facebook fa-circled"></i></a>
                <a target="_blank" href="http://instagram.com/fearlesssolutions/"><i class="fa fa-instagram fa-circled"></i></a>
                <a target="_blank" href="http://www.linkedin.com/companies/fearless-"><i class="fa fa-linkedin fa-circled"></i></a>
            </div>
        </div>
        <div class="row split nopaddingb" id="contact-form-success-scroll">
            <div class="col-sm-6 purple-bg">
                <br/><br/>
                <p class="large">8 Market Place, Suite 304<br/>
                Baltimore, MD 21202</p>
                <p class="lightpurple"><b>Phone</b> (410) 394-9600<br/>
                <b>Fax</b> (410) 779-3706</p>
                <div class="img-flush">
                    <img class="img-responsive" src="../../static/images/work6.jpg" />
                </div>
            </div>
            <div class="col-sm-6">
                <h2 class="orange">Want to be in the know?</h2>
                <div id="mc_embed_signup">
                    <form action="//tech.us10.list-manage.com/subscribe/post?u=a7bfc3e8de1cea97640297650&amp;id=2c63ffe5a7" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                        <div id="mc_embed_signup_scroll">
                            <div id="mce-responses">
                                <div class="response" id="mce-error-response" style="display:none"></div>
                                <div class="response" id="mce-success-response" style="display:none"></div>
                            </div>
                            <div class="form-group">
                                <label for="mce-EMAIL">Subscribe to our occasional blog digest.</label>
                                <input type="email" value="" name="EMAIL" class="required email form-control" placeholder="Enter your email" id="mce-EMAIL">
                            </div>
                            <div style="position: absolute; left: -5000px;" aria-hidden="true">
                                <input type="text" name="b_a7bfc3e8de1cea97640297650_2c63ffe5a7" tabindex="-1" value="">
                            </div>
                            <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="btn btn-primary btn-block">
                        </div>
                    </form>
                </div>
                <br/><br/>
                <h2 class="orange">Talk to us.</h2>
                
                <div id="contact-form-success" class="purple well lightgray-bg text-center" style="display:none;">
                    <h4 class="lnr lnr-checkmark-circle icon-40"></h4>
                    <p>Your message was sent! We'll be in touch.</p>
                </div>
                
                <form id="contact-form" action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8" method="post" @submit.prevent="validateForm">
                    <input type="hidden" name="oid" value="00Dj0000001og8q" />
                    <input type="hidden" name="lead_source" value="web" />
                    <input type="hidden" name="retURL" value="http://fearless.tech/contact">
                    <!--
                    <input id="honeypot" name="honeypot" type="text" value="" style="display:none" />
                    <input type="hidden" name='captcha_settings' value='{"keyname":"fearless_contact_form","fallback":"true","orgId":"00Dj0000001og8q","ts":""}' />
                    <input type="hidden" name="debugEmail" value="bhalteman@fearless.tech"> 
                    <input type="hidden" name="debug" value=1>
                    -->

                    <div class="form-group">
                        <label for="first_name" :class="{'orange': errors.has('first_name') }">First name <span class="orange">*</span> <small v-show="errors.has('first_name')">{{ errors.first('first_name') }}</small></label>
                        <input v-validate="'required'" :class="{'form-control': true, 'orange-border': errors.has('first_name') }" id="first_name" maxlength="40" name="first_name" size="20" type="text" />
                    </div>
                    <div class="form-group">
                        <label for="last_name" :class="{'orange': errors.has('last_name') }">Last name <span class="orange">*</span> <small v-show="errors.has('last_name')">{{ errors.first('last_name') }}</small></label>
                        <input v-validate="'required'" :class="{'form-control': true, 'orange-border': errors.has('last_name') }" id="last_name" maxlength="80" name="last_name" size="20" type="text" />
                    </div>
                    <div class="form-group">
                        <label for="email" :class="{'orange': errors.has('email') }">Email <span class="orange">*</span> <small v-show="errors.has('email')">{{ errors.first('email') }}</small></label>
                        <input v-validate="'required|email'" data-vv-delay="500" :class="{'form-control': true, 'orange-border': errors.has('email') }" id="email" maxlength="80" name="email" size="20" type="text" />
                    </div>
                    <div class="form-group">
                        <label for="phone">Phone</label>
                        <input class="form-control" id="phone" maxlength="40" name="phone" size="20" type="text" />
                    </div>
                    <div class="form-group">
                        <label for="company">Company</label>
                        <input class="form-control" id="company" maxlength="40" name="company" size="20" type="text" />
                    </div>
                    <div class="form-group">
                        <label for="00Nj0000004eZsm" :class="{'orange': errors.has('00Nj0000004eZsm') }">Message <span class="orange">*</span> <small v-show="errors.has('00Nj0000004eZsm')">{{ errors.first('00Nj0000004eZsm') }}</small></label>
                        <textarea v-validate="'required'" :class="{'form-control': true, 'orange-border': errors.has('message') }" id="00Nj0000004eZsm" name="00Nj0000004eZsm" rows="5"></textarea>
                    </div>
                    <!--<div class="g-recaptcha form-group" data-sitekey="6LcC1z4UAAAAAB0ec6AjoWabeEJSyk0BthrGu_kN"></div>-->
                    <input class="btn btn-primary btn-block" type="submit" name="submit_btn" value="Send" />
                </form>
            </div>
        </div>
    </section>
</template>



<script>
  import VueScrollClass from 'vue-scroll-class'
  import VeeValidate from 'vee-validate'
   
  import { Validator } from 'vee-validate'
  const dictionary = {
      en: {
        attributes: {
          '00Nj0000004eZsm': 'message',
          'first_name': 'first name',
          'last_name': 'last name'
        }
      }
  };
  Validator.localize(dictionary);

  export default {
    directives: {
      'scroll-class': VueScrollClass,
    },
    methods: {
      validateForm() {
            
//          if (document.getElementById("honeypot").val().length != 0) {
//            return false;
//          }
          
        this.$validator.validateAll().then((result) => {
          if (result) {
            document.getElementById("contact-form").submit();
            document.getElementById("contact-form").style.display = "none";
            document.getElementById("contact-form-success").style.display = "block";
            document.getElementById('contact-form-success-scroll').scrollIntoView(true);
            return;
          }
        });
      }
    }
  }
</script>