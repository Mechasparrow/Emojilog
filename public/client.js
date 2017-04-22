var logview = new Vue({
  el: "#logview",
  data: {
    logs: []
  }, methods: {
     updateLogs: function () {
        fetch("/logs").then (function (response) {
          response.json().then (function (data) {
            logview.logs = data;
          });
        });
     } 
  }
  
});

logview.updateLogs();


var app = new Vue({
  el: "#app",
  data: {},
  methods: {
    addLog: function (args) {
      console.log(args);
      var data = JSON.stringify({emojie: args});
      console.log(data);
      
      fetch ("/logs?" + "emojie=" + args, {
        method: "POST"
      }).then (function (success) {
        logview.updateLogs();
      }); 
      
    }
  }
})