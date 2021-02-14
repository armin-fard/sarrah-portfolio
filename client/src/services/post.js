import api from '@/services/index'

export default {
  create (post) {
    console.log(post)
    return api().post('/api/post/new', post, {
      headers: {
        'Content-Type': 'application/json'
      },
    })
  },
  get () {
    return api().get('/api/posts/all', {
      headers: {
        'Content-Type': 'application/json'
      },
    })
  }
}
