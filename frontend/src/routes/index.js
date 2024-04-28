//this is the place whare the routings(build the connections between internal components or pages)

import { createRouter , createWebHistory } from "vue-router";
import Home from '../pages/Home.vue'
import About from '../pages/about/About.vue'
import Post01 from '../pages/posts/post01/post01.vue'
import Post02 from '../pages/posts/post02/post02.vue'
import Post03 from '../pages/posts/post03/post03.vue'
import Post04 from '../pages/posts/post04/post04.vue'
import Post05 from '../pages/posts/post05/post05.vue'


const routes = [
    { path : '/',component : Home},
    { path : '/about',component : About},
    { path : '/post01',component : Post01},
    { path : '/post02',component : Post02},
    { path : '/post03',component : Post03},
    { path : '/post04',component : Post04},
    { path : '/post05',component : Post05},



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