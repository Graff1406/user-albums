<template>
  <v-row>
    <v-col cols="12">
      <v-card flat>
        <v-card-title class="subtitle-1 px-3" primary-title>
          Total photos 
          <span class="font-weight-black px-1">{{ album.images.length }}</span>
        </v-card-title>
        <v-container fluid>
          <v-row>
            <v-col
              v-for="(image,i) in album.images"
              :key="`from-image-${i}`"
              class="d-flex child-flex"
              cols="4"
            >
              <v-tooltip bottom max-width="400">
                <template v-slot:activator="{ on }">
                  <v-card 
                    :to="{path: `/image/${i}`, query: {albumId: $route.params.id}}" 
                    v-on="on" 
                    link 
                    flat 
                    tile 
                    class="d-flex"
                  >
                    <v-img
                      :src="image.link"
                      :lazy-src="image.link"
                      aspect-ratio="1"
                      class="grey lighten-2"
                    >
                      <template v-slot:placeholder>
                        <v-row
                          class="fill-height ma-0"
                          align="center"
                          justify="center"
                        >
                          <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                        </v-row>
                      </template>
                    </v-img>
                  </v-card>
                </template>
                <span>{{ image.info.caption }}</span>
              </v-tooltip>
              
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
  // import {LINKS} from '../links/links'
  export default {
    name: 'SinglAlbum',
    data() {
      return {
        // image: `${this.$route.from.path}/${}`
      }
    },
    props: {
      albums: {
        type: Array,
        required: true
      }
    },
    computed: {
      album() {
        const images = this.albums.find(item => item.id == this.$route.params.id)
        return images || []
      },
      // imageLink() {
      //   return `${this.$route.from.path}/${album}`
      // }
    },
    mounted() {
      console.log(this.$route)
    }
  }
</script>