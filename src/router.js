import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/index.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: Index
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
    ]
})
