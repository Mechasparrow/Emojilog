<template>
  <div id = "emojie-new">
    <h1 id = "emojie-title">Select a Emojie for today</h1>

    <div id = "emojie-options">

      <div class = "container">
        <div class = "row">

          <div class = "col s4 emojie-option" v-on:click= "addLog('em-smiley')">
            <i class = "waves-effect waves-light medium em em-smiley"></i>
          </div>

          <div class = "col s4 emojie-option" v-on:click= "addLog('em-expressionless')">
            <i class = "waves-effect waves-light medium em em-expressionless"></i>
          </div>

          <div class = "col s4 emojie-option" v-on:click= "addLog('em-angry')">
            <i class = "waves-effect waves-light medium em em-angry"></i>
          </div>

        </div>

        <div class = "back-btn">
          <a href = "/#/" class = "waves-effect waves-light btn red">Back</a>
        </div>

      </div>



    </div>

  </div>
</template>

<script>
  import datastore from '@/db/datastore.js'

  export default {
    name: 'new-emojie',
    methods: {
      addLog: function (emojie) {
        console.log('getting ready to add log')

        // TODO Add log add function here
        var date = new Date()
        var emojieObj = {
          'emojie': emojie,
          'date': (date.getMonth() + 1) + '/' + date.getDate()
        }

        var emojies = datastore.getAll()
        emojies.unshift(emojieObj)
        datastore.saveEmojie(emojies)

        // ENDTODO
        window.location = '/#/'
      }
    }

  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  #emojie-title {
    text-align:center;
  }

  .emojie-option {
    text-align:center;
  }

  .back-btn {
    text-align:center;
    margin-top: 100px;
  }




</style>
