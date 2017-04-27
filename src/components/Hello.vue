<template>
  <div class="hello">
    <my-header></my-header>
  </div>
</template>

<script>
  import Header from './Header.vue'

  export default {
    name: 'hello',
    components: {
      'my-header': Header
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
