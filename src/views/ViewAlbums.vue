<template>
  <my-layout logout-icon :toolbar-title="toolbarTitle">
    <template v-slot:default="{user}">
      <MyAlbums :albums="user.albums" />
      {{ setToolbarTitle(`Welcome, ${user.name}`) }}
    </template>
  </my-layout>
</template>
<script>
  import {toolbarTitle, auth} from '../mixins/index';
  import MyLayout from '../layout/index';
  import MyAlbums from '../components/Albums';
  export default {
    name: 'ViewAlbums',
    components: {
      MyLayout,
      MyAlbums
    },
    mixins: [toolbarTitle, auth],
    metaInfo: {
      title: 'Albums',
      titleTemplate: null
    }
  }
</script>