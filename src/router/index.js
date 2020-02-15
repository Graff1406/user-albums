import Vue from "vue";
import VueRouter from "vue-router";
import {LINKS} from "../links/links";
import Meta from 'vue-meta';
import Home from "../views/Home.vue";
import Album from "../views/ViewAlbums.vue";
import SinglAlbum from "../views/ViewSinglAlbum.vue";
import InfoImage from "../views/ViewInfoImage.vue";


Vue.use(VueRouter);
Vue.use(Meta);

const routes = [
  {
    path: LINKS.HOME,
    name: "home",
    component: Home
  },
  {
    path: LINKS.ALBUMS,
    name: "album",
    component: Album
  },
  {
    path: LINKS.SINGL_ALBUM,
    name: "singl-album",
    component: SinglAlbum
  },
  { 
    path: LINKS.INFO_IMAGE, 
    name: 'info-image',
    component: InfoImage ,
    props: true
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
