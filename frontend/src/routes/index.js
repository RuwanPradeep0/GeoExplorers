//this is the place whare the routings(build the connections between internal components or pages)

import { createRouter , createWebHistory } from "vue-router";
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Post01 from '../pages/posts/post01/post01.vue'

const routes = [
    { path : '/',component : Home},
    { path : '/about',component : About},
    { path : '/post01',component : Post01},


    //here /about is the path when you click on about in somewhere in the site , it is automatically callin 
    //http://localhost:5173/about : in this site and navigate to the about page

];


//This is the place where the binding all the routs together 
const router = 
    createRouter({
        history :createWebHistory(),
        routes

    });


export default router;