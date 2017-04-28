<template>
  <div class="hello">
    <my-header></my-header>

    <div class = "log-view">
      <div v-for = "(log, index) in logs" class = "log-card">
        <h2 class = "log-text">
          <span>{{log['date']}} <i class = "em" :class = "log['emojie']" ></i></span>
          <span v-on:click= "deleteLog(index)"><i class="waves-effect waves-light trash-icon material-icons">delete</i></span>
        </h2>
      </div>
    </div>

  </div>
</template>

<script>
  import Header from './Header.vue'
  import datastore from '@/db/datastore'

  export default {
    name: 'hello',
    beforeMount: function () {
      this.logs = datastore.getAll()
      console.log(this.logs)
    },
    data: function () {
      return {
        logs: this.logs
      }
    },
    methods: {
      deleteLog: function (index) {
        this.logs.splice(index, 1)
        datastore.saveEmojie(this.logs)
      }
    },
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

.log-card {
  background-color:white;

  text-align:center;

  margin-top: 10px;
  margin-bottom: 10px;

  margin-left:auto;
  margin-right: auto;
  max-width: 45rem;

  border-left: 10px solid #AB47BC;
}

@media (max-width: 600px) {
  .log-card {
    margin-left: 10px;
    margin-right: 10px;
  }
}


.log-text {
  padding: 10px;
}

.trash-icon {
  float:right;
  margin-top: 15px;
  font-size: 1em;
}

</style>
