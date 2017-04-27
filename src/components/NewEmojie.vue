<template>
  <div id = "emojie-new">
    <h1 id = "emojie-title">Select a Emojie for today</h1>

    <div id = "emojie-options">

      <div class = "container">
        <div class = "row">

          <div class = "col s4 emojie-option">
            <i class = "waves-effect waves-light medium em em-smiley"></i>
          </div>

          <div class = "col s4 emojie-option">
            <i class = "waves-effect waves-light medium em em-expressionless"></i>
          </div>

          <div class = "col s4 emojie-option">
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

  export default {
    name: 'new-emojie'
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
