<template>
  <v-form
    ref="form"
    lazy-validation
  >
    <v-row no-guttars justify="center">
      <v-col cols="10">
        <p>Sing In</p>
      <v-text-field
      v-model="email"
      :rules="emailRules"
        label="Email"
      ></v-text-field>
      <v-text-field
      v-model="psw"
      :rules="pswRules"
        label="Password"
      ></v-text-field>
      <v-btn 
        @click="submit" 
        color="success" 
        :loading="loading" 
        depressed
      >Log In</v-btn>
      <p v-show="incorrectData" class="error--text mt-2">
        Email or password was entered incorrectly
      </p>
      </v-col>
    </v-row>
  </v-form>
</template>
<script>
import database from '../assets/database.json';
import {LINKS} from '../links/links'
export default {
name: 'Sign',
data() {
  return {
    email: 'test@album.com',
    psw: '123456',
    emailRules: [
      v => !!v || 'Email is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
    ],
    pswRules: [
      v => !!v || 'Password is required'
    ],
    incorrectData: null,
    loading: false
  }
},
methods: {
  async submit() {
    const validate = this.$refs.form.validate()
    if(validate) {
      try {
        const getDatabase = () => {
          var promise = new Promise(function(resolve) {
            setTimeout(function() {
              resolve(database);
            },2000);
          });
          return promise;
        }
        
        this.loading = !this.loading
        const data = await getDatabase()
        this.loading = !this.loading
        if(data.email === this.email && data.psw === this.psw) {
          sessionStorage.setItem('auth', data.secret)
          this.$router.push(LINKS.ALBUMS)
        } else this.incorrectData = true
      } catch(err) {
        console.log('error', err.name)
      }

      

    }
  }
}
}
</script>