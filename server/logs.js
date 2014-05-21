var connectHandler = WebApp.connectHandlers; // get meteor-core's connect-implementation

// attach connect-style middleware for response header injection
Meteor.startup(function () {
  connectHandler.use(function (req, res, next) {
    res.setHeader('Strict-Transport-Security', 'max-age=2592000; includeSubDomains'); // 2592000s / 30 days
    res.setHeader('Access-Control-Allow-Origin', '*'); // 2592000s / 30 days
    return next();
  })
  return Meteor.methods({
    clearTheConsole: function() {
      return Logs.remove({});
    }
  });
})