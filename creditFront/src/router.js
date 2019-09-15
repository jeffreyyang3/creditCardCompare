import Vue from "vue";
import Router from "vue-router";
import About from "@/views/About";
import cardsModal from "@/views/cardsModal";
// import createACard from "@/views/createACard";
import modifyCards from "@/views/modifyCards";
import CBLine from "@/views/CBLine";
import siteInfo from "@/views/aboutStuff/siteInfo";

import faq from "@/views/aboutStuff/faq";
Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            name: "chooseCards",
            component: cardsModal
        },

        {
            path: "/modifyCards",
            name: "modifyCards",
            component: modifyCards
        },
        {
            path: "/fullScreen",
            name: "fullScreen",
            component: CBLine,
            props: { graphOnly: true }
        },

        // {
        //     path: "/createACard",
        //     name: "createACard",
        //     component: createACard
        // },

        {
            path: "/about",
            name: "about",
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: About,
            children: [
                { path: "siteInfo", component: siteInfo },
                { path: "faq", component: faq }
            ]
        }
    ]
});
