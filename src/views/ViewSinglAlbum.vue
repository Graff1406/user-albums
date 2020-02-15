<template>
  <my-layout back-icon :toolbar-title="toolbarTitle">
    <template v-slot:default="{user}">
      <SinglAlbum :albums="user.albums" />
      {{ setToolbarTitle(user.albums[$route.params.id].name) }}
    </template>
  </my-layout>
</template>
<script>
  import {toolbarTitle, auth} from '../mixins/index';
  import MyLayout from '../layout/index';
  import SinglAlbum from '../components/SinglAlbum';
  export default {
    name: 'ViewSinglAlbum',
    components: {
      MyLayout,
      SinglAlbum
    },
    mixins: [toolbarTitle, auth],
    metaInfo: {
      title: 'Album',
      titleTemplate: null
    }
  }
</script>