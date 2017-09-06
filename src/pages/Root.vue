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

    <md-sidenav class="md-left" ref="leftSidenav" @open="open('Left')">
      <md-toolbar class="md-large">
        <div class="md-toolbar-container">
          <h3 class="md-title">Sidenav content</h3>
        </div>
      </md-toolbar>

      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi cupiditate esse necessitatibus beatae nobis, deserunt ut est fugit, tempora deleniti, eligendi commodi doloribus. Nemo, assumenda possimus, impedit inventore perferendis iusto!</p>
    </md-sidenav>
  </div>
</template>

<script>
  export default {
    name: 'root',
    data: () => {
      return {
        appTitle: 'Title for my APP'
      }
    },
    methods: {
      toggleLeftSidenav () {
        this.$refs.leftSidenav.toggle()
      },
      open (ref) {
        console.log('Opened: ' + ref)
      }
    }
  }
</script>

<style>
 
</style>

