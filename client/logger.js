var remote_logger_url = "//scideatim.ngrok.com/logger"

window.remoteJSLogger = function (msg, meth) {
  $.ajax ({
    type: "POST", 
    cache: false,
    url: remote_logger_url, 
    data: {
          meth: meth, 
          msg: msg,
          from: document.URL
          },
    dataType: "jsonp",
    success: function (resp) { console.log(resp) }
  });
  if (window.console) {
    try {
      console[meth](msg)
    }
    catch(err) {
      console.log(meth + ": "+msg);    
    }
  }
  return true
};
window.log = function (msg, meth){
  window.log_history = window.log_history || [];   // store logs to an array for reference
  window.log_history.push(msg);
  window.remoteJSLogger(msg, meth);
};

log("JS Remote Console Loaded @ " + document.URL, "success")

