const express = require('express')
const app = express()
const port = 3030
var bodyParser = require('body-parser');
var db = require('../database/index.js');

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
  res.send('Hello Marcia!')
})

app.get('/brand/:brandname', (req, res) => {
  var queryStr = `select id, brand_name, cruelty_free, vegan, parent_company from brandinfo where LOWER(brand_name) = LOWER('${req.params.brandname}')`
  db.query(queryStr, (err, result) => {

    if (err) {
      res.end();
    } else {
      if (result.rows.length === 0){
        res.send(result.rows)
      } else {
        var isCrueltyfree = result.rows[0].cruelty_free;
        var brandname = result.rows[0].brand_name;
        var productId = result.rows[0].id;

        if (isCrueltyfree){
          result.rows.unshift({cruelty_free: true})
          res.send(result.rows);

        } else {
          var queryStr2 = `select * from brandinfo inner join alternative on brandinfo.id = alternative.alternative_id where alternative.brand_id = ${productId}`

          db.query(queryStr2, (err, result) => {
            if (err) {
              console.log(err);
            } else {
              result.rows.unshift({cruelty_free: false, brand_name: brandname})
              res.send(result.rows)
            }
          })
        }
      }
    }
  })
})


app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})