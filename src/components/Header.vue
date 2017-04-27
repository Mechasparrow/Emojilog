<template>
  <div>
    <div id = "header-comp">

    </div>
    <div id = "header-main">
      <h2 color = "white">Emojielog</h2>

      <div class="top-left-fab">
        <a href = "/#/addlog" class="btn-floating btn-large waves-effect waves-light add-btn">
          <i style = "font-size: 3em;" class="material-icons">add</i>
        </a>
      </div>

    </div>


  </div>
</template>

<script>
  export default {
    name: 'my-header'
  }
</script>

<style scoped>
  .add-btn {
    background-color: #AB47BC;
  }

  .top-left-fab {
    position: absolute;
    left: 1.5em;
    top: 60px;;
  }



  #header-comp {
    height: 15px;
    width: 100%;
    background-color:#004C8B;
  }

  #header-main {
    width: 100%;
    text-align:center;
    background-color: #0277BC
  }

  #header-main h2 {
    margin: 0px;
    padding-top: 10px;
    padding-bottom: 10px;
    color:white;
  }



</style>
