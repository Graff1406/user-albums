<template>
  <div>
    <v-tabs
      v-model="currentItem"
      fixed-tabs
      slider-color="primary"
    >
      <v-tab
        v-for="item in items"
        :key="item"
        :href="'#tab-' + item"
      >
        {{ item }}
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="currentItem">
      <v-tab-item
        v-for="(item,i) in items"
        :key="item"
        :value="'tab-' + item"
      >
        <v-card flat>
          <v-card-text>
            <div v-if="i === 0">
              <PreviewAlbum 
                v-for="(album,i) in albums" 
                :key="`album-${i}`" 
                :album="album" 
              />
            </div>                
            <Addhoto v-else />
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
  import Addhoto from './Addhoto';
  import PreviewAlbum from './SinglAlbum/PreviewAlbum';
  export default {
    name: 'Albums',
    components: {
      Addhoto,
      PreviewAlbum
    },
    props: {
      albums: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return { 
        currentItem: 'Albums',
        items: [
          'Albums', 'Add album',
        ],
      }
    }
  }
</script>
