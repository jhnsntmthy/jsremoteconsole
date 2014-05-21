Template.logs.events({
  'click a.open': function(e) {
    e.preventDefault();
    $(e.target).closest(".log-entry").find("pre").show();
    $(e.target).closest(".log-entry").find(".hide").show();
    $(e.target).hide();    
  },
  'click a.hide': function(e) {
    e.preventDefault();
    $(e.target).closest(".log-entry").find("pre").hide();
    $(e.target).closest(".log-entry").find(".open").show();
    $(e.target).hide();    
  }
});

Template.logs.helpers({
  message: function(e) {
    return JSON.stringify(this.msg);
  },
  timestamp: function(e) {
    return moment(this.created_at).fromNow();
  }
});

Template.logs.allLogs = function () {
  return Logs.find();
};
