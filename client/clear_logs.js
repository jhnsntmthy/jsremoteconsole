Template.clear_logs.events({
  'click button#clearLogs': function(e) {
    Meteor.call("clearTheConsole");
  },
  'click button.hide_all': function(e) {
    e.preventDefault();
    $("pre").hide();
  }
})
