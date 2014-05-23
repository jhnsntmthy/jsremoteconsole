Logs = new Meteor.Collection('logs');

Router.map(function () {
  this.route('serverFile', {
    path: '/logger/',
    where: 'server',

    action: function () {
      var filename = this.params.filename;
      resp = this.request.query
      resp['created_at'] = new Date().toISOString();
              
      Logs.insert(resp)
      // console.log(this.request)
      // console.log(this.request.query)
      // console.log(resp)
      console.log(this.request.query.msg)
      this.response.writeHead(200, {'Content-Type': 
                                    'application/json; charset=utf-8'});
      this.response.end(this.request.query.callback + "(" +JSON.stringify(resp) + ")");
    }
  });
});