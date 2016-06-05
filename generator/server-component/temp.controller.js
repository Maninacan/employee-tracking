import express from 'express';
import {<%= upCaseName %>} from './<%= name %>.db';

const router = express.Router({
  mergeParams: true
});

function all<%= upCaseName %>Routes(req, res, next) {
  console.log(req.method, ''+ req.baseUrl + req.url);
  next();
}

function getAll<%= upCaseName %>s(req, res) {
  <%= upCaseName %>.find((err, <%= name %>s) => {
    res.send(<%= name %>s);
  });
}

function get<%= upCaseName %>(req, res) {
  <%= upCaseName %>.findOne({_id: req.params.id}, (err, <%= name %>) => {
    if (err) {
      res.status(404).send('<%= upCaseName %> with id ' + req.params.id + ' not found: ' + err);
    } else {
      res.send(<%= name %>);
    }
  });
}

function create<%= upCaseName %>(req, res) {
  <%= upCaseName %>.create(req.body, (err, <%= name %>) => {
    if (err || !<%= name %>) {
      res.status(400).send('Error - No <%= name %> created due to ' + err);
    } else {
      res.status(200).send(<%= name %>);
    }
  });
}

function update<%= upCaseName %>(req, res) {
  <%= upCaseName %>.update({_id: req.params.id}, req.body, (err, response) => {
    if (err) {
      res.status(404).send('<%= upCaseName %> with id ' + req.params.id + ' not found: ' + err);
    } else {
      res.send(response);
    }
  });
}

function delete<%= upCaseName %>(req, res) {
  <%= upCaseName %>.findById(req.params.id, (err, <%= name %>) => {
    if (err || !<%= name %>) {
      res.status(400).send('Could not delete <%= name %>. No <%= name %> with id ' + req.params.id + ' could be found: ' + err)
    } else {
      <%= name %>.remove((err, <%= name %>) => {
        console.log('<%= name %> removed: ', <%= name %>);
        res.status(200).send({msg: '<%= name %> with id ' + <%= name %>._id + '} successfully deleted', <%= name %>});
        <%= upCaseName %>.findById(<%= name %>._id, (err, <%= name %>) => {
          console.log('search for <%= name %> removed renders: ', <%= name %>);
        });
      });
    }
  });
}

router.use(all<%= upCaseName %>Routes);

router.route('/')
  .get(getAll<%= upCaseName %>s)
  .post(create<%= upCaseName %>);

router.route('/:id')
  .get(get<%= upCaseName %>)
  .put(update<%= upCaseName %>)
  .delete(delete<%= upCaseName %>);

export default router;