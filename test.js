var marklogic = require('marklogic'),
    stream = require('stream');

var db = marklogic.createDatabaseClient({
  database: 'ml-generator',
  user: 'admin',
  password: 'admin'
});

var q = marklogic.queryBuilder;

// Based on:
// https://davidwalsh.name/async-generators

function runQuery() {
  db.documents.query(
    q.where(q.term('a'))
    .withOptions({
      search: 'filtered'
    })
    .slice(1, 1000)
  )
  .result()
  .then(function (res) {
    it.next(res);
  })
  .catch(function (err) {
    console.dir(err);
  });
}

function * gen() {
  var res1 = yield runQuery();
  console.log(JSON.stringify(res1, null, 2));
}

var it = gen();
it.next();
