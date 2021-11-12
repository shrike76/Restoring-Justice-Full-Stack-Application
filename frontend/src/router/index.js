import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

// Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/create",
    name: "create",
    component: () => import("../components/CreateComponent"),
  },
  {
    path: "/view",
    name: "view",
    component: () => import("../components/ListComponent"),
  },
  {
    path: "/referral",
    name: "CreateRefferal",
    component: () => import("../components/CreateReferral.vue"),
  },
  {
    path: "/view-referral",
    name: "ReferralList",
    component: () => import("../components/ReferralList.vue"),
  },
  {
    path: "/chart",
    name: "chart",
    component: () => import("../views/VueChartJS.vue"),
  },
  {
    path: "/summary",
    name: "SummaryReport",
    component: () => import("../components/SummaryReport.vue"),
  },
];

// Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes, // short for `routes: routes`
});

export default router;
