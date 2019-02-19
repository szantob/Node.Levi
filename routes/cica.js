const express = require('express');
const router = express.Router();
const formidable = require('formidable');

/* GET users listing. */
router.post('/', function(req, res, next) {
  cicaaa(req,res);
});
router.get('/', function(req, res, next) {
  res.send('Cicaaaaaaa!');
});

const cicaaa = (req,res)=>{
  const form = new formidable.IncomingForm();
  form.parse(req, function(err, fields, files) {
    const firstcicaaa = fields.toString();
    const secondcicaa = fields.secondcica;
    console.log(firstcicaaa);
    const respcicaaaa = firstcicaaa + secondcicaa;

    res.writeHead(200, {'content-type': 'text/plain'});
    res.write(respcicaaaa);
    res.end();
  });
};

module.exports = router;
