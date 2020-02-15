<template>
  <my-layout back-icon :toolbar-title="toolbarTitle">
    <template v-slot:default="{user}">
      <InfoImage :image="user.albums[$route.query.albumId].images[$route.params.id]" />
      {{ setToolbarTitle(user.albums[$route.query.albumId].images[$route.params.id].info.fileName) }}
    </template>
  </my-layout>
</template>
<script>
  import { toolbarTitle, auth } from '../mixins/index';
  import MyLayout from '../layout/index';
  import InfoImage from '../components/SinglAlbum/InfoImage';
  export default {
    name: 'ViewSinglAlbum',
    components: {
      MyLayout,
      InfoImage
    },
    mixins: [toolbarTitle, auth],
    metaInfo: {
      title: 'Image',
      titleTemplate: null
    }
  }
</script>