<template>
  <div>
    <v-file-input 
      @change="uploadImage" 
      @click:clear="images = []"
      label="Select a fales" 
      name="image"
      accept="image/*" 
      outlined 
      dense 
      multiple
    ></v-file-input>
    
    <v-card  
      id="drop_zone" 
      @drop="dropHandler" 
      @dragover="dragOverHandler"  
      outlined
      :height="!images.length ? '300' : 'auto'"
      class="d-flex justify-center align-center"
    >
      <v-row v-if="images.length">
        <v-col cols="12">
          <v-card color="transparent" flat>
            <v-container fluid>
              <v-row justify="center">
                <v-col
                  v-for="(image,i) in images"
                  :key="`image-${i}`"
                  class="d-flex child-flex"
                  cols="3"
                >
                  <v-card outlined tile class="d-flex">
                    <v-img
                      :src="image.src"
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
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
      <v-card-title v-else primary-title class="d-flex justify-center">
        Drag one or more files to this Drop Zone ...
      </v-card-title>
    </v-card>
  </div>
</template>
<script>
  export default {
    name: 'Addhoto',
    data() {
      return {
        images: []
      }
    },
    methods: {
      readFiles(files) {
        return new Promise((resolve, reject) => {
          const items = []
          files.forEach(item => {
            let file = item.kind === 'file' ? item.getAsFile() : item
            if (typeof FileReader === 'function') {
                const reader = new FileReader()
                reader.onload = event => {
                  items.push({
                    src: event.target.result
                  })
                }
                reader.onerror = reject
                reader.readAsDataURL(file)
            } else {
              alert('Sorry, FileReader API not supported')
            }
          })
          resolve(items)
        })
      },
      async uploadImage(e) {
        this.images = await this.readFiles(e)
      },
      async dropHandler(e) {
        this.images = await this.readFiles(e.dataTransfer.items)        
        e.preventDefault()   
      },
      dragOverHandler(e) {
        e.preventDefault()
      }
    }
  }
</script>