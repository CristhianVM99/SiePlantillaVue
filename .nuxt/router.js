import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0a7037c4 = () => interopDefault(import('../pages/about-us-one.vue' /* webpackChunkName: "pages/about-us-one" */))
const _9c670d08 = () => interopDefault(import('../pages/about-us-three.vue' /* webpackChunkName: "pages/about-us-three" */))
const _22d7e8aa = () => interopDefault(import('../pages/about-us-two.vue' /* webpackChunkName: "pages/about-us-two" */))
const _d6109cec = () => interopDefault(import('../pages/coming-soon.vue' /* webpackChunkName: "pages/coming-soon" */))
const _fcdef11c = () => interopDefault(import('../pages/contact-me.vue' /* webpackChunkName: "pages/contact-me" */))
const _e006d510 = () => interopDefault(import('../pages/contact-us.vue' /* webpackChunkName: "pages/contact-us" */))
const _33f37092 = () => interopDefault(import('../pages/distant-learning.vue' /* webpackChunkName: "pages/distant-learning" */))
const _e566694e = () => interopDefault(import('../pages/faq.vue' /* webpackChunkName: "pages/faq" */))
const _0596daae = () => interopDefault(import('../pages/gallery-grid.vue' /* webpackChunkName: "pages/gallery-grid" */))
const _26c3848d = () => interopDefault(import('../pages/gallery-masonry.vue' /* webpackChunkName: "pages/gallery-masonry" */))
const _754c8813 = () => interopDefault(import('../pages/kindergarten.vue' /* webpackChunkName: "pages/kindergarten" */))
const _a4a27398 = () => interopDefault(import('../pages/kitchen-coach.vue' /* webpackChunkName: "pages/kitchen-coach" */))
const _7b3741a6 = () => interopDefault(import('../pages/landing-demo.vue' /* webpackChunkName: "pages/landing-demo" */))
const _68ba4c99 = () => interopDefault(import('../pages/my-account.vue' /* webpackChunkName: "pages/my-account" */))
const _37c26502 = () => interopDefault(import('../pages/online-academy.vue' /* webpackChunkName: "pages/online-academy" */))
const _3af26dec = () => interopDefault(import('../pages/pricing-table.vue' /* webpackChunkName: "pages/pricing-table" */))
const _10d120a4 = () => interopDefault(import('../pages/privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */))
const _0fb7d83d = () => interopDefault(import('../pages/purchase-guide.vue' /* webpackChunkName: "pages/purchase-guide" */))
const _72cdf786 = () => interopDefault(import('../pages/shop/index.vue' /* webpackChunkName: "pages/shop/index" */))
const _d37906d0 = () => interopDefault(import('../pages/terms-condition.vue' /* webpackChunkName: "pages/terms-condition" */))
const _043f971b = () => interopDefault(import('../pages/university.vue' /* webpackChunkName: "pages/university" */))
const _2749dddd = () => interopDefault(import('../pages/yoga-instructor.vue' /* webpackChunkName: "pages/yoga-instructor" */))
const _c6fdc332 = () => interopDefault(import('../pages/blog/blog-details.vue' /* webpackChunkName: "pages/blog/blog-details" */))
const _9f55666e = () => interopDefault(import('../pages/blog/blog-list.vue' /* webpackChunkName: "pages/blog/blog-list" */))
const _348270ea = () => interopDefault(import('../pages/blog/blog-masonry.vue' /* webpackChunkName: "pages/blog/blog-masonry" */))
const _3a5111e8 = () => interopDefault(import('../pages/blog/blog-standard.vue' /* webpackChunkName: "pages/blog/blog-standard" */))
const _d26950f2 = () => interopDefault(import('../pages/course/course-details.vue' /* webpackChunkName: "pages/course/course-details" */))
const _0bc082ec = () => interopDefault(import('../pages/course/course-details-2.vue' /* webpackChunkName: "pages/course/course-details-2" */))
const _0bce9a6d = () => interopDefault(import('../pages/course/course-details-3.vue' /* webpackChunkName: "pages/course/course-details-3" */))
const _e3827886 = () => interopDefault(import('../pages/course/course-five.vue' /* webpackChunkName: "pages/course/course-five" */))
const _6ab2ff9e = () => interopDefault(import('../pages/course/course-four.vue' /* webpackChunkName: "pages/course/course-four" */))
const _4b48402b = () => interopDefault(import('../pages/course/course-one.vue' /* webpackChunkName: "pages/course/course-one" */))
const _1cc40423 = () => interopDefault(import('../pages/course/course-three.vue' /* webpackChunkName: "pages/course/course-three" */))
const _63aff111 = () => interopDefault(import('../pages/course/course-two.vue' /* webpackChunkName: "pages/course/course-two" */))
const _56b8b79d = () => interopDefault(import('../pages/event/event-details.vue' /* webpackChunkName: "pages/event/event-details" */))
const _30f975fb = () => interopDefault(import('../pages/event/event-grid.vue' /* webpackChunkName: "pages/event/event-grid" */))
const _6e392f53 = () => interopDefault(import('../pages/event/event-list.vue' /* webpackChunkName: "pages/event/event-list" */))
const _07a185eb = () => interopDefault(import('../pages/instructor/instructor-one.vue' /* webpackChunkName: "pages/instructor/instructor-one" */))
const _4d6d6da4 = () => interopDefault(import('../pages/instructor/instructor-profile.vue' /* webpackChunkName: "pages/instructor/instructor-profile" */))
const _27e2d9e3 = () => interopDefault(import('../pages/instructor/instructor-three.vue' /* webpackChunkName: "pages/instructor/instructor-three" */))
const _200936d1 = () => interopDefault(import('../pages/instructor/instructor-two.vue' /* webpackChunkName: "pages/instructor/instructor-two" */))
const _0594b51c = () => interopDefault(import('../pages/shop/cart.vue' /* webpackChunkName: "pages/shop/cart" */))
const _34fdb242 = () => interopDefault(import('../pages/shop/checkout.vue' /* webpackChunkName: "pages/shop/checkout" */))
const _6d4fc618 = () => interopDefault(import('../pages/shop/product-details.vue' /* webpackChunkName: "pages/shop/product-details" */))
const _67a0797e = () => interopDefault(import('../pages/shop/wishlist.vue' /* webpackChunkName: "pages/shop/wishlist" */))
const _1ea9ac55 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _0a7037c4,
    name: "about-us-one"
  }, {
    path: "/about-us-three",
    component: _9c670d08,
    name: "about-us-three"
  }, {
    path: "/about-us-two",
    component: _22d7e8aa,
    name: "about-us-two"
  }, {
    path: "/coming-soon",
    component: _d6109cec,
    name: "coming-soon"
  }, {
    path: "/contact-me",
    component: _fcdef11c,
    name: "contact-me"
  }, {
    path: "/contact-us",
    component: _e006d510,
    name: "contact-us"
  }, {
    path: "/distant-learning",
    component: _33f37092,
    name: "distant-learning"
  }, {
    path: "/faq",
    component: _e566694e,
    name: "faq"
  }, {
    path: "/gallery-grid",
    component: _0596daae,
    name: "gallery-grid"
  }, {
    path: "/gallery-masonry",
    component: _26c3848d,
    name: "gallery-masonry"
  }, {
    path: "/kindergarten",
    component: _754c8813,
    name: "kindergarten"
  }, {
    path: "/kitchen-coach",
    component: _a4a27398,
    name: "kitchen-coach"
  }, {
    path: "/landing-demo",
    component: _7b3741a6,
    name: "landing-demo"
  }, {
    path: "/my-account",
    component: _68ba4c99,
    name: "my-account"
  }, {
    path: "/online-academy",
    component: _37c26502,
    name: "online-academy"
  }, {
    path: "/pricing-table",
    component: _3af26dec,
    name: "pricing-table"
  }, {
    path: "/privacy-policy",
    component: _10d120a4,
    name: "privacy-policy"
  }, {
    path: "/purchase-guide",
    component: _0fb7d83d,
    name: "purchase-guide"
  }, {
    path: "/shop",
    component: _72cdf786,
    name: "shop"
  }, {
    path: "/terms-condition",
    component: _d37906d0,
    name: "terms-condition"
  }, {
    path: "/university",
    component: _043f971b,
    name: "university"
  }, {
    path: "/yoga-instructor",
    component: _2749dddd,
    name: "yoga-instructor"
  }, {
    path: "/blog/blog-details",
    component: _c6fdc332,
    name: "blog-blog-details"
  }, {
    path: "/blog/blog-list",
    component: _9f55666e,
    name: "blog-blog-list"
  }, {
    path: "/blog/blog-masonry",
    component: _348270ea,
    name: "blog-blog-masonry"
  }, {
    path: "/blog/blog-standard",
    component: _3a5111e8,
    name: "blog-blog-standard"
  }, {
    path: "/course/course-details",
    component: _d26950f2,
    name: "course-course-details"
  }, {
    path: "/course/course-details-2",
    component: _0bc082ec,
    name: "course-course-details-2"
  }, {
    path: "/course/course-details-3",
    component: _0bce9a6d,
    name: "course-course-details-3"
  }, {
    path: "/course/course-five",
    component: _e3827886,
    name: "course-course-five"
  }, {
    path: "/course/course-four",
    component: _6ab2ff9e,
    name: "course-course-four"
  }, {
    path: "/course/course-one",
    component: _4b48402b,
    name: "course-course-one"
  }, {
    path: "/course/course-three",
    component: _1cc40423,
    name: "course-course-three"
  }, {
    path: "/course/course-two",
    component: _63aff111,
    name: "course-course-two"
  }, {
    path: "/event/event-details",
    component: _56b8b79d,
    name: "event-event-details"
  }, {
    path: "/event/event-grid",
    component: _30f975fb,
    name: "event-event-grid"
  }, {
    path: "/event/event-list",
    component: _6e392f53,
    name: "event-event-list"
  }, {
    path: "/instructor/instructor-one",
    component: _07a185eb,
    name: "instructor-instructor-one"
  }, {
    path: "/instructor/instructor-profile",
    component: _4d6d6da4,
    name: "instructor-instructor-profile"
  }, {
    path: "/instructor/instructor-three",
    component: _27e2d9e3,
    name: "instructor-instructor-three"
  }, {
    path: "/instructor/instructor-two",
    component: _200936d1,
    name: "instructor-instructor-two"
  }, {
    path: "/shop/cart",
    component: _0594b51c,
    name: "shop-cart"
  }, {
    path: "/shop/checkout",
    component: _34fdb242,
    name: "shop-checkout"
  }, {
    path: "/shop/product-details",
    component: _6d4fc618,
    name: "shop-product-details"
  }, {
    path: "/shop/wishlist",
    component: _67a0797e,
    name: "shop-wishlist"
  }, {
    path: "/",
    component: _1ea9ac55,
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
