Router.map(function() {
  this.route("serverFile", {
    path: "/logger/",
    where: "server",
    action: function() {
      var filename, resp;
      filename = this.params.filename;
      resp = this.request.query;
      resp["created_at"] = new Date().toISOString();
      Logs.insert(resp);
      console.log(resp);
      this.response.writeHead(200, {
        "Content-Type": "application/json; charset=utf-8"
      });
      this.response.end(this.request.query.callback + "(" + JSON.stringify(resp) + ")");
    }
  });
});
