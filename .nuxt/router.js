import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _895f86ee = () => interopDefault(import('../pages/about-us-one.vue' /* webpackChunkName: "pages/about-us-one" */))
const _aa833dfe = () => interopDefault(import('../pages/about-us-three.vue' /* webpackChunkName: "pages/about-us-three" */))
const _58902522 = () => interopDefault(import('../pages/about-us-two.vue' /* webpackChunkName: "pages/about-us-two" */))
const _2f518025 = () => interopDefault(import('../pages/coming-soon.vue' /* webpackChunkName: "pages/coming-soon" */))
const _6dc4f977 = () => interopDefault(import('../pages/contact-me.vue' /* webpackChunkName: "pages/contact-me" */))
const _7c31077d = () => interopDefault(import('../pages/contact-us.vue' /* webpackChunkName: "pages/contact-us" */))
const _6a1c61fc = () => interopDefault(import('../pages/distant-learning.vue' /* webpackChunkName: "pages/distant-learning" */))
const _823f3618 = () => interopDefault(import('../pages/faq.vue' /* webpackChunkName: "pages/faq" */))
const _9312411a = () => interopDefault(import('../pages/gallery-grid.vue' /* webpackChunkName: "pages/gallery-grid" */))
const _4c0e8da8 = () => interopDefault(import('../pages/gallery-masonry.vue' /* webpackChunkName: "pages/gallery-masonry" */))
const _262c8cd8 = () => interopDefault(import('../pages/kindergarten.vue' /* webpackChunkName: "pages/kindergarten" */))
const _18cf5a0f = () => interopDefault(import('../pages/kitchen-coach.vue' /* webpackChunkName: "pages/kitchen-coach" */))
const _2c17466b = () => interopDefault(import('../pages/landing-demo.vue' /* webpackChunkName: "pages/landing-demo" */))
const _54eebe9e = () => interopDefault(import('../pages/my-account.vue' /* webpackChunkName: "pages/my-account" */))
const _45de95f8 = () => interopDefault(import('../pages/online-academy.vue' /* webpackChunkName: "pages/online-academy" */))
const _4da75ce5 = () => interopDefault(import('../pages/pricing-table.vue' /* webpackChunkName: "pages/pricing-table" */))
const _09c30829 = () => interopDefault(import('../pages/privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */))
const _08a9bfc2 = () => interopDefault(import('../pages/purchase-guide.vue' /* webpackChunkName: "pages/purchase-guide" */))
const _5f02698b = () => interopDefault(import('../pages/shop/index.vue' /* webpackChunkName: "pages/shop/index" */))
const _88e2f49a = () => interopDefault(import('../pages/terms-condition.vue' /* webpackChunkName: "pages/terms-condition" */))
const _1f17edc0 = () => interopDefault(import('../pages/university.vue' /* webpackChunkName: "pages/university" */))
const _4c94e6f8 = () => interopDefault(import('../pages/yoga-instructor.vue' /* webpackChunkName: "pages/yoga-instructor" */))
const _c9a3667c = () => interopDefault(import('../pages/blog/blog-details.vue' /* webpackChunkName: "pages/blog/blog-details" */))
const _ad719764 = () => interopDefault(import('../pages/blog/blog-list.vue' /* webpackChunkName: "pages/blog/blog-list" */))
const _332f9f45 = () => interopDefault(import('../pages/blog/blog-masonry.vue' /* webpackChunkName: "pages/blog/blog-masonry" */))
const _1149aeed = () => interopDefault(import('../pages/blog/blog-standard.vue' /* webpackChunkName: "pages/blog/blog-standard" */))
const _0433e062 = () => interopDefault(import('../pages/course/course-details.vue' /* webpackChunkName: "pages/course/course-details" */))
const _7dab7df2 = () => interopDefault(import('../pages/course/course-details-2.vue' /* webpackChunkName: "pages/course/course-details-2" */))
const _7d8f4ef0 = () => interopDefault(import('../pages/course/course-details-3.vue' /* webpackChunkName: "pages/course/course-details-3" */))
const _653760c2 = () => interopDefault(import('../pages/course/course-five.vue' /* webpackChunkName: "pages/course/course-five" */))
const _bcc1c594 = () => interopDefault(import('../pages/course/course-four.vue' /* webpackChunkName: "pages/course/course-four" */))
const _49f56e86 = () => interopDefault(import('../pages/course/course-one.vue' /* webpackChunkName: "pages/course/course-one" */))
const _24df07be = () => interopDefault(import('../pages/course/course-three.vue' /* webpackChunkName: "pages/course/course-three" */))
const _625d1f6c = () => interopDefault(import('../pages/course/course-two.vue' /* webpackChunkName: "pages/course/course-two" */))
const _5ed3bb38 = () => interopDefault(import('../pages/event/event-details.vue' /* webpackChunkName: "pages/event/event-details" */))
const _95e0df80 = () => interopDefault(import('../pages/event/event-grid.vue' /* webpackChunkName: "pages/event/event-grid" */))
const _1b616cd0 = () => interopDefault(import('../pages/event/event-list.vue' /* webpackChunkName: "pages/event/event-list" */))
const _09942946 = () => interopDefault(import('../pages/instructor/instructor-one.vue' /* webpackChunkName: "pages/instructor/instructor-one" */))
const _df9671ee = () => interopDefault(import('../pages/instructor/instructor-profile.vue' /* webpackChunkName: "pages/instructor/instructor-profile" */))
const _77ba127e = () => interopDefault(import('../pages/instructor/instructor-three.vue' /* webpackChunkName: "pages/instructor/instructor-three" */))
const _21fbda2c = () => interopDefault(import('../pages/instructor/instructor-two.vue' /* webpackChunkName: "pages/instructor/instructor-two" */))
const _1db76e77 = () => interopDefault(import('../pages/shop/cart.vue' /* webpackChunkName: "pages/shop/cart" */))
const _bfc373c6 = () => interopDefault(import('../pages/shop/checkout.vue' /* webpackChunkName: "pages/shop/checkout" */))
const _689535dd = () => interopDefault(import('../pages/shop/product-details.vue' /* webpackChunkName: "pages/shop/product-details" */))
const _3750571c = () => interopDefault(import('../pages/shop/wishlist.vue' /* webpackChunkName: "pages/shop/wishlist" */))
const _39bd4b30 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about-us-one",
    component: _895f86ee,
    name: "about-us-one"
  }, {
    path: "/about-us-three",
    component: _aa833dfe,
    name: "about-us-three"
  }, {
    path: "/about-us-two",
    component: _58902522,
    name: "about-us-two"
  }, {
    path: "/coming-soon",
    component: _2f518025,
    name: "coming-soon"
  }, {
    path: "/contact-me",
    component: _6dc4f977,
    name: "contact-me"
  }, {
    path: "/contact-us",
    component: _7c31077d,
    name: "contact-us"
  }, {
    path: "/distant-learning",
    component: _6a1c61fc,
    name: "distant-learning"
  }, {
    path: "/faq",
    component: _823f3618,
    name: "faq"
  }, {
    path: "/gallery-grid",
    component: _9312411a,
    name: "gallery-grid"
  }, {
    path: "/gallery-masonry",
    component: _4c0e8da8,
    name: "gallery-masonry"
  }, {
    path: "/kindergarten",
    component: _262c8cd8,
    name: "kindergarten"
  }, {
    path: "/kitchen-coach",
    component: _18cf5a0f,
    name: "kitchen-coach"
  }, {
    path: "/landing-demo",
    component: _2c17466b,
    name: "landing-demo"
  }, {
    path: "/my-account",
    component: _54eebe9e,
    name: "my-account"
  }, {
    path: "/online-academy",
    component: _45de95f8,
    name: "online-academy"
  }, {
    path: "/pricing-table",
    component: _4da75ce5,
    name: "pricing-table"
  }, {
    path: "/privacy-policy",
    component: _09c30829,
    name: "privacy-policy"
  }, {
    path: "/purchase-guide",
    component: _08a9bfc2,
    name: "purchase-guide"
  }, {
    path: "/shop",
    component: _5f02698b,
    name: "shop"
  }, {
    path: "/terms-condition",
    component: _88e2f49a,
    name: "terms-condition"
  }, {
    path: "/university",
    component: _1f17edc0,
    name: "university"
  }, {
    path: "/yoga-instructor",
    component: _4c94e6f8,
    name: "yoga-instructor"
  }, {
    path: "/blog/blog-details",
    component: _c9a3667c,
    name: "blog-blog-details"
  }, {
    path: "/blog/blog-list",
    component: _ad719764,
    name: "blog-blog-list"
  }, {
    path: "/blog/blog-masonry",
    component: _332f9f45,
    name: "blog-blog-masonry"
  }, {
    path: "/blog/blog-standard",
    component: _1149aeed,
    name: "blog-blog-standard"
  }, {
    path: "/course/course-details",
    component: _0433e062,
    name: "course-course-details"
  }, {
    path: "/course/course-details-2",
    component: _7dab7df2,
    name: "course-course-details-2"
  }, {
    path: "/course/course-details-3",
    component: _7d8f4ef0,
    name: "course-course-details-3"
  }, {
    path: "/course/course-five",
    component: _653760c2,
    name: "course-course-five"
  }, {
    path: "/course/course-four",
    component: _bcc1c594,
    name: "course-course-four"
  }, {
    path: "/course/course-one",
    component: _49f56e86,
    name: "course-course-one"
  }, {
    path: "/course/course-three",
    component: _24df07be,
    name: "course-course-three"
  }, {
    path: "/course/course-two",
    component: _625d1f6c,
    name: "course-course-two"
  }, {
    path: "/event/event-details",
    component: _5ed3bb38,
    name: "event-event-details"
  }, {
    path: "/event/event-grid",
    component: _95e0df80,
    name: "event-event-grid"
  }, {
    path: "/event/event-list",
    component: _1b616cd0,
    name: "event-event-list"
  }, {
    path: "/instructor/instructor-one",
    component: _09942946,
    name: "instructor-instructor-one"
  }, {
    path: "/instructor/instructor-profile",
    component: _df9671ee,
    name: "instructor-instructor-profile"
  }, {
    path: "/instructor/instructor-three",
    component: _77ba127e,
    name: "instructor-instructor-three"
  }, {
    path: "/instructor/instructor-two",
    component: _21fbda2c,
    name: "instructor-instructor-two"
  }, {
    path: "/shop/cart",
    component: _1db76e77,
    name: "shop-cart"
  }, {
    path: "/shop/checkout",
    component: _bfc373c6,
    name: "shop-checkout"
  }, {
    path: "/shop/product-details",
    component: _689535dd,
    name: "shop-product-details"
  }, {
    path: "/shop/wishlist",
    component: _3750571c,
    name: "shop-wishlist"
  }, {
    path: "/",
    component: _39bd4b30,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
