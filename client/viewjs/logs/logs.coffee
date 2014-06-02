Template.logs.events
  "click a.open": (e) ->
    e.preventDefault()
    $(e.target).closest(".log-entry").find("pre").show()
    $(e.target).closest(".log-entry").find(".hide").show()
    $(e.target).hide()
    return

  "click a.hide": (e) ->
    e.preventDefault()
    $(e.target).closest(".log-entry").find("pre").hide()
    $(e.target).closest(".log-entry").find(".open").show()
    $(e.target).hide()
    return

Template.logs.helpers
  message: (e) ->
    JSON.stringify @msg

  timestamp: (e) ->
    moment(@created_at).fromNow()

Template.logs.allLogs = ->
  Logs.find()