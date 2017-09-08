<script>
  export default {
    name: 'layout'
  }
</script>

<template>
  <md-layout md-gutter="16">
    <md-layout 
      md-flex-small="10" 
      md-flex="25" 
      md-column 
      md-flex-xsmall="100"></md-layout>
    <md-layout 
      md-flex-small="80" 
      md-flex="50" 
      md-column 
      md-flex-xsmall="100">
      <md-whiteframe>
        <md-tabs md-right>
          <md-tab md-icon="phone">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
          </md-tab>

          <md-tab md-icon="favorite">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
          </md-tab>

          <md-tab md-icon="near_me">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas.</p>
          </md-tab>
        </md-tabs>
      </md-whiteframe>
    </md-layout>
  </md-layout>
</template>
