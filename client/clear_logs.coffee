Template.clear_logs.events
  "click button.clear_logs": (e) ->
    Meteor.call "clearTheConsole"
    return

  "click button.hide_all": (e) ->
    e.preventDefault()
    $("pre").hide()
    $(".open").show()
    $(".hide").hide()
    return
