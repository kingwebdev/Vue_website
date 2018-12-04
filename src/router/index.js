import Vue from 'vue'
import Router from 'vue-router'

// ELEMENTS
import Logo from '@/components/Elements/Logo'
import LogoHome from '@/components/Elements/LogoHome'
import Footer from '@/components/Elements/Footer'
import NotFound from '@/components/NotFound'
import Brand from '@/components/Brand'

// PAGES
import Home from '@/components/Home'

// // ABOUT
import Story from '@/components/About/Story'
import People from '@/components/About/People'
import PurpleCow from '@/components/About/PurpleCow'
import Community from '@/components/About/Community'
import ProBono from '@/components/Applications/ProBono'
import PassionAward from '@/components/Applications/PassionAward'

// // WORK
import Services from '@/components/Work/Services'
import Portfolio from '@/components/Work/Portfolio'
import Case from '@/components/Work/Case'

// // THOUGHTS
import Playbooks from '@/components/Playbooks'
import Playbook from '@/components/Playbook'
import Blog from '@/components/Blog'
import BlogPost from '@/components/BlogPost'

// // CONNECT
import Careers from '@/components/Careers'
import Job from '@/components/Job'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
      if (to.hash) {
          return {selector: to.hash}
      } else {
          return { x: 0, y: 0 }
      }
  },
  routes: [
    {
      path: '/',
      name: 'Home',
      components: {
          content: Home,
          logo: LogoHome,
          footer: Footer
      }
    },
    {
      path: '/about/story',
      name: 'Story',
      components: {
          content: Story,
          logo: Logo,
          footer: Footer
      }
    },
    {
      path: '/about/people',
      name: 'People',
      components: {
          content: People,
          logo: Logo,
          footer: Footer
      }
    },
    {
      path: '/about/purplecow',
      name: 'PurpleCow',
      components: {
          content: PurpleCow,
          logo: Logo,
          footer: Footer
      }
    },
    {
      path: '/about/community',
      name: 'Community',
      components: {
          content: Community,
          logo: Logo,
          footer: Footer
      }
    },
    {
      path: '/applications/probono',
      name: 'ProBono',
      components: {
          content: ProBono,
          logo: Logo,
          footer: Footer
      }
    },
    {
      path: '/applications/passionaward',
      name: 'PassionAward',
      components: {
          content: PassionAward,
          logo: Logo,
          footer: Footer
      }
    },
    {
      path: '/work/services',
      name: 'Services',
      components: {
          content: Services,
          logo: Logo,
          footer: Footer
      }
    },
    {
      path: '/work/all',
      name: 'Portfolio',
      components: {
          content: Portfolio,
          logo: Logo,
          footer: Footer
      }
    },
    {
      path: '/work/:id',
      name: 'PortfolioTag',
      components: {
          content: Portfolio,
          logo: Logo,
          footer: Footer
      },
      props: (route) => ({ id: route.params.id })
    },
    {
      path: '/work/all/case/:id',
      name: 'Case',
      components: {
          content: Case,
          logo: Logo,
          footer: Footer
      },
      props: (route) => ({ id: route.params.id })
    },
    {
      path: '/playbooks',
      name: 'Playbooks',
      components: {
          content: Playbooks,
          logo: Logo,
          footer: Footer
      }
    },
    {
      path: '/playbooks/:id',
      name: 'Playbook',
      components: {
          content: Playbook,
          logo: Logo,
          footer: Footer
      },
      props: (route) => ({ id: route.params.id })
    },
    {
      path: '/blog',
      name: 'Blog',
      components: {
          content: Blog,
          logo: Logo,
          footer: Footer
      }
    },
    {
      path: '/blog/:year/:month/:day/:title',
      name: 'BlogPostByUrl',
      components: {
          content: BlogPost,
          logo: Logo,
          footer: Footer
      },
      props: (route) => ({
        year: route.params.year,
        month: route.params.month,
        day: route.params.day,
        title: route.params.title
      })
    },
    {
      path: '/careers',
      name: 'Careers',
      components: {
          content: Careers,
          logo: Logo,
          footer: Footer
      }
    },
    {
      path: '/careers/job',
      name: 'Job',
      components: {
          content: Job,
          logo: Logo,
          footer: Footer
      }
    },
    {
      path: '/contact',
      name: 'Contact',
      components: {
          content: Contact,
          logo: Logo,
          footer: Footer
      }
    },
    {
      path: '/brand',
      components: {
          content: Brand,
          logo: Logo,
          footer: Footer
      }
    },
    {
      path: '/404',
      components: {
          content: NotFound,
          logo: Logo
      }
    },
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/index.html',
      redirect: '/'
    }
  ]
})
