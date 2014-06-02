connectHandler = WebApp.connectHandlers # get meteor-cores connect-implementation

Meteor.startup ->
  connectHandler.use (req, res, next) ->
    res.setHeader "Strict-Transport-Security", "max-age=2592000; includeSubDomains" # 2592000s / 30 days
    res.setHeader "Access-Control-Allow-Origin", "*" # 2592000s / 30 days
    next()

  Meteor.methods clearTheConsole: ->
    console.log "clearing the logfiles"
    Logs.remove {}
