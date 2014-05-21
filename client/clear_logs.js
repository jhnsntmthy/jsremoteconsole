Template.clear_logs.events({
  'click button.clear_logs': function(e) {
    Meteor.call("clearTheConsole");
  },
  'click button.hide_all': function(e) {
    e.preventDefault();
    $("pre").hide();
    $(".open").show();
    $(".hide").hide();
  }
})
