<template>
  <div>
    <div id = "header-comp">

    </div>
    <div id = "header-main">
      <h2 color = "white">Emojielog</h2>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'my-header'
  }
</script>

<style scoped>

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
