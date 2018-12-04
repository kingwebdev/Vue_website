<template>
    <div class="menu">
        <div class="row">
            <div class="col-sm-3">
                <h6>About</h6>
                <ul class="list-unstyled">
                    <li>
                        <router-link to="/about/story">
                            Story 
                            <span class="small">Cliché, but we actually did start in a basement.</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/about/people">
                            People 
                            <span class="small">Our secret sauce.</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/about/purplecow">
                            Purple Cow 
                            <span class="small">The folktale that became our beloved mascot.</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/about/community">
                            Community 
                            <span class="small">We really love Baltimore.</span>
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="col-sm-3">
                <h6>Work</h6>
                <ul class="list-unstyled">
                    <li>
                        <router-link to="/work/services">
                            Services 
                            <span class="small">What we do and how we work.</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/work/all">
                            Portfolio 
                            <span class="small">Some of our work.</span>
                        </router-link>
                    </li>
                    <li class="divider"></li>
                    <li>
                        <router-link to="/work/government">
                            <i class="icon-flag fa-fw"></i>&nbsp;&nbsp; Government
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/work/healthcare">
                            <i class="icon-heart fa-fw"></i>&nbsp;&nbsp; Healthcare
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/work/education">
                            <i class="icon-globe fa-fw"></i>&nbsp;&nbsp; Nonprofit & Education
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/work/labs">
                            <i class="icon-beaker fa-fw"></i>&nbsp;&nbsp; Fearless Labs
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="col-sm-3">
                <h6>Thoughts</h6>
                <ul class="list-unstyled">
                    <li>
                        <router-link to="/playbooks">
                            Playbooks
                            <span class="small">The rules we live by.</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/blog">
                            Blog
                            <span class="small">Find out the latest.</span>
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="col-sm-3">
                <h6>Connect</h6>
                <ul class="list-unstyled">
                    <li>
                        <router-link to="/careers">
                            Careers
                            <span class="small">Do you bleed purple?</span>
                        </router-link>
                    </li>
                    <li>
                        <a href="https://fearless.store">
                            Store
                            <span class="small">Our moms even ask for gear.</span>
                        </a>
                    </li>
                    <li>
                        <router-link to="/contact">
                            Contact
                            <span class="small">Let's talk.</span>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
        <div class="social">
            <a target="_blank" href="http://twitter.com/fearlessbmore"><i class="fa fa-twitter fa-circled fa-circled-sm"></i></a>
            <a target="_blank" href="http://facebook.com/fearlessbmore"><i class="fa fa-facebook fa-circled fa-circled-sm"></i></a>
            <a target="_blank" href="http://instagram.com/fearlessbmore"><i class="fa fa-instagram fa-circled fa-circled-sm"></i></a>
            <a target="_blank" href="https://www.linkedin.com/company/fearlessbmore"><i class="fa fa-linkedin fa-circled fa-circled-sm"></i></a>
        </div>
    </div>
</template>