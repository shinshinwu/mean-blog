var Post = require('./model/post');
// var express = require

module.exports = function(app) {
  // RESTful Routes

  app.get('/blog/posts', function(req, res) {

      Post.find(function(err, posts) {
          if (err)
              res.send(err)
          res.json(posts);
      });
  });

  app.post('/blog/posts', function(req, res){

      // create todo
      Post.create({
            author: req.body.author,
            title: req.body.title,
            body: req.body.body
      }, function(err, todo){
          if (err)
              res.send(err);

          // return all todos after creation
          Post.find(function(err, posts){
              if (err)
                  res.send(err)
              res.json(posts);
          });
      });
  });

  // delete todo entry
  app.delete('/blog/posts/:post_id', function(req, res){
      Post.remove({
          _id: req.params.post_id
      }, function(err, post){
          if (err)
              res.send(err);

          Todo.find(function(err, posts){
              if (err)
                  res.send(err)
              res.json(posts);
          });
      });
  });

  app.get('*', function(req, res){
      res.sendfile('./public/index.html');
  });

};