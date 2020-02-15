<template>
  <v-card flat>
    <v-card-text>
      <div class="py-2">
        <v-img :src="image.link" :lazy-src="image.link"></v-img>
      </div>
      <v-row 
        no-guttars 
        v-for="(item,i) in imageInfo" 
        :key="`info-${i}`"
      >
        <v-col cols="3" class="subtitle-2 pa-1">
          <span>{{ item.label }}</span>
        </v-col>
        <v-col cols="9" class="subtitle-1 pa-1">
          <template v-if="item.label === 'Keywords'">
            <v-chip
              v-for="keyword in item.text"
              :key="keyword"
              class="ma-2"
              label
            >
              {{ keyword }}
            </v-chip>
          </template>
          <span v-else>{{ item.text }}</span>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>
<script>
  export default {
    name: 'InfoImage',
    props: {
      image: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        imageInfo: [
          { label: 'File name', text: this.image.info.fileName },
          { label: 'Object name', text: this.image.info.objectName },
          { label: 'Caption', text: this.image.info.caption },
          { label: 'Keywords', text: this.image.info.keywords },
        ]
      }
    }
  }
</script>