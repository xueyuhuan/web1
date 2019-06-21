import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/index.vue'

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: Index
        },
        {
            path:'*',
            redirect:'/404'
        },
        {
            path:'/404',
            component:()=>import('./views/Blank'),
            meta: { blank: true }
        },
        {
            path:'/my-account',
            component:()=>import('./views/MyAccount')
        },
        {
            path:'/faq',
            component:()=>import('./views/FAQ')
        },
        {
            path:'/contact-us',
            component:()=>import('./views/ContactUs')
        },
        {
            path:'/blog',
            component:()=>import('./views/Blog')
        },
        {
            path:'/blog-detail/:id',
            component:()=>import('./views/BlogDetail'),
            props: true
        },
        {
            path: '/about-us',
            component: () => import(/* webpackChunkName: "about-us" */ './views/AboutUs.vue')
        },
        {
            path:'/shipping-info',
            component:()=>import('./views/ShippingInfo.vue')
        },
        {
            path:'/service-commitment',
            component:()=>import('./views/ServiceCommitment')
        },
        {
            path:'/refund-policy',
            component:()=>import('./views/RefundPolicy')
        },
        {
            path:'/terms-conditions',
            component:()=>import('./views/TermsConditions')
        },
        {
            path:'/privacy-policy',
            component:()=>import('./views/PrivacyPolicy')
        }
    ],
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 500 }
        }
    }
})

export default router
