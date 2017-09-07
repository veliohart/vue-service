<template>
  <div class="phone-viewport">
    <md-whiteframe md-tag="header" md-elevation="2">
      <md-toolbar>
        <md-button class="md-icon-button" @click="toggleLeftSidenav">
          <md-icon>menu</md-icon>
        </md-button>

        <h2 class="md-title" style="flex: 1">{{appTitle}}</h2>

        <router-link :to="{ name: 'about' }" class="md-raised md-primary" tag="md-button">
            About <md-icon>info</md-icon>
        </router-link>
      </md-toolbar>
    </md-whiteframe>

    <md-whiteframe md-tag="section" class="main-content">
      <md-layout md-gutter>
        <md-layout md-column md-gutter>
          <md-layout>
            <md-whiteframe>
              <md-button class="md-raised md-primary" v-on:click="signinBase()">SignIn</md-button>
              <md-button class="md-raised md-primary" v-on:click="signupBase()">SignUp</md-button>
              <md-button class="md-raised md-primary" v-on:click="testBase()">FIREBASE set</md-button>
              <md-button class="md-raised md-primary" v-on:click="testBaseGet()">FIREBASE get</md-button>
            </md-whiteframe>
          </md-layout>
        </md-layout>

        <md-layout md-column md-gutter>
          <md-layout md-column md-flex="50">
            
              <md-list>
                <md-whiteframe md-flex="100" class="" v-for="user in data" v-bind:key="user.date">
                  <md-list-item>
                    <md-avatar>
                      <img src="https://placeimg.com/40/40/people/5" alt="People">
                    </md-avatar>

                    <span>{{user.stamp}}</span>
                    <span>{{user.username}}</span>

                    <md-button class="md-icon-button md-list-action" v-on:click="remove(user)">
                      <md-icon class="md-primary">remove_circle</md-icon>
                    </md-button>
                  </md-list-item>
                </md-whiteframe>
              </md-list>
            
          </md-layout>
        </md-layout>
      </md-layout>
    </md-whiteframe>

    <md-sidenav class="md-left" ref="leftSidenav" @open="open('Left')">
      <md-toolbar class="md-large">
        <div class="md-toolbar-container">
          <h3 class="md-title">Sidenav content</h3>
        </div>
      </md-toolbar>

    </md-sidenav>
  </div>
</template>

<script>
  export default {
    name: 'root',
    data: () => {
      return {
        appTitle: 'Title for my APP',
        errorCode: '',
        errorMessage: '',
        data: []
      }
    },
    created: () => {},
    methods: {
      toggleLeftSidenav () {
        this.$refs.leftSidenav.toggle()
      },
      open (ref) {
        console.log('Opened: ' + ref)
      },
      testBase () {
        const stamp = Date.now()
        window.firebase.database().ref(`users/${stamp}`)
          .set({
            username: 'name',
            email: 'email',
            profilePicture: 'imageUrl',
            stamp: stamp
          })
      },
      testBaseGet () {
        const ref = window.firebase.database().ref('users/')
        ref.on('value', (snapshot) => {
          console.log('snapshot.val()', snapshot.val())
          this.data = snapshot.val()
        })
      },
      signupBase () {
        const email = 'test@mail.com'
        const password = 'testpassword'
        window.firebase.auth().createUserWithEmailAndPassword(email, password).catch(error => {
          // Handle Errors here.
          this.errorCode = error.code
          this.errorMessage = error.message
        })
      },
      signinBase () {
        const email = 'test@mail.com'
        const password = 'testpassword'
        window.firebase.auth().signInWithEmailAndPassword(email, password).catch(error => {
          // Handle Errors here.
          this.errorCode = error.code
          this.errorMessage = error.message
        })
      },
      remove (user) {
        console.log(user)
        const ref = window.firebase.database().ref(`users/${user.stamp}`)
        ref.remove()
      }
    }
  }
</script>

<style>
.main-content {
  margin: 15px;
  padding: 10px;
}
</style>

