Logs = new Meteor.Collection('logs');

Router.map(function () {
  this.route('serverFile', {
    path: '/logger/',
    where: 'server',

    action: function () {
      var filename = this.params.filename;
      resp = {'org_id' : this.request.query.org_id,
              'ext_id' : this.request.query.ext_id,
              'msg' : this.request.query.msg,
              'meth': this.request.query.meth,
              'created_at' : new Date().toISOString() };
              
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