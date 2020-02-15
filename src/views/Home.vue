<template>
  <my-layout>
    <Sign /> 
  </my-layout>
</template>

<script>
import {auth} from '../mixins/index';
import MyLayout from "../layout/index";
import Sign from '../components/Sign';
export default {
  name: "home",
  components: {
    MyLayout,
    Sign
  },
  mixins: [auth],
  metaInfo: {
    title: 'Test task for photo albums',
    titleTemplate: null
  }
};
</script>
   