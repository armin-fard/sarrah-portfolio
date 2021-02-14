<template>
  <div>
    <v-row class="text-center">
      <v-col>
        <v-card color="default" class="editor-card rounded-lg">
          <v-card-title>
              <v-col cols="8">
                <v-text-field
                  clearable
                  clear-icon="fa-times"
                  color="primary"
                  v-model="post.title"
                  label="Title" 
                  prepend-icon="fa-file">
                </v-text-field>
              </v-col>
              <v-col cols="4">
                <v-select
                  clearable
                  clear-icon="fa-times"
                  v-model="post.category"
                  color="primary"
                  :items="categories"
                  label="Category"
                  prepend-icon="fa-tags"
                ></v-select>
              </v-col>
              <v-col cols="12">
                <v-textarea
                  rows="4"
                  outlined
                  name="abstract"
                  label="Abstract"
                  v-model="post.abstract"
                ></v-textarea>
              </v-col>
          </v-card-title>
          <v-card-text class="text-center">
            <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
          </v-card-text>
          <v-card-text class="text-right">
            <v-btn>
              <v-icon class="btn">fas fa-image</v-icon>
              Image
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="text-left">
      <v-col >
        <v-btn class="btn" dark color="info">
          <v-icon class="btn-icon">fa-save</v-icon>
          Save
        </v-btn>
        <v-btn class="btn" dark color="info" @click="createPost">
          <v-icon class="btn-icon">fa-check</v-icon>
          Submit
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '../../style/custom.css'
import postService from '@/services/post'

export default {
  name: 'Home',
  data () {
    return {
      post: {
        title: '',
        category: '',
        content: '',
        abstract: ''

      },
      editor: ClassicEditor,
      editorData: '',
      editorConfig: {
      },
      categories: ['Feature', 'Review']
    }
  },
  computed: {

  },
  async created () {

  },
  methods: {
    async createPost() {
      this.post.content = this.editorData
      const response = await postService.create(this.post)
      console.log('Response...', response)
    }
  }
}
</script>

<style scoped>
.editor-card {
  border-radius: 10em;
}
.btn {
  margin: 0.5rem;
}

</style>