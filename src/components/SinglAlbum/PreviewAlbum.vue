<template>
  <v-row no-guttars>
    <v-col cols="12">
      <v-card outlined link :to="`${$route.path}/${album.id}`">
        <v-list three-line class="pa-0">
            <v-list-item>
              <v-list-item-avatar>
                <v-img :src="album.images[0].link"></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title v-html="album.name"></v-list-item-title>
                <v-list-item-subtitle>
                  <v-icon size="16">mdi-file-multiple</v-icon>
                  <span class="px-1">{{album.images.length}}</span>
                </v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-icon>
                <v-icon>mdi-chevron-right</v-icon>
              </v-list-item-icon>
            </v-list-item>
        </v-list>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
  export default {
    name: 'PreviewAlbum',
    props: {
      album: Object
    }
  }
</script>