import {LINKS} from '../links/links'
export const auth = {
  created() {
    const auth = sessionStorage.getItem('auth')
    if (!auth && this.$route.path !== '/') 
      this.$router.push('/')
    else if(auth && this.$route.path === '/')
    this.$router.push(LINKS.ALBUMS)
  }
}

export const toolbarTitle = {
  data() {
    return {
      toolbarTitle: ''
    }
  },
  methods: {
    setToolbarTitle(title) {
      this.toolbarTitle = title
    }
  }
}