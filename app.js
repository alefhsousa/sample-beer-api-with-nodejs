var express = require('express');
var mongo = require('mongoose');
var bodyParser = require('body-parser');
var app = express();

var port = 9000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

var mongoaddr = 'mongodb://' + process.env.MONGO_PORT_27017_TCP_ADDR + ':27017/beersapi';
console.log(mongoaddr);

mongo.connect(mongoaddr, { useMongoClient: true })

 

var beerSchema = mongo.Schema({
	name : { type: String, required: true }, 
    brand : { type: String, required: true },
    category: {type: String, enum: ['IPA', 'Lager', 'Ale']}, 
    update_at: { type: Date, default: Date.now },
    create_at: { type: Date, default: Date.now },
});


var Beer = mongo.model('Beer', beerSchema);

app.get('/v1/beers', function(req, res){
	Beer.find(function(err, beers) {
		if (err) {
			res.json(err);
		} else {
            if(beers.length != 0){
                res.json(beers);
            }else {
                res.status('204').send();
                res.end();
            } 
			
		}
	})
});

app.get("/v1/beers/:brand?", function (req, res) {
    var brand = req.params.brand;
    var brand2 = req.query.brand;
    console.log("rodando..: " + brand2)
	Beer.find({'brand': brand}, function(err, regs) {
		if (err) {
			console.log(err);
			res.send(err);
		} else {
			res.json(regs);
		}
	});
});


app.post("/v1/beers", function (req, res) {
	var register = new Beer({
		'name' : req.body.name,
        'brand' : req.body.brand,
        'category': req.body.category,
	});
	register.save(function (err) {
		if (err) {
			console.log(err);
            res.send(err);
			res.end();
		}
    });
      res.status('201').location('/beers/' + register._id)
	res.end();
});

app.put("/v1/beers/:id", function (req, res) {
	Beer.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err)  {
    	return next(err);
    } else {
    	res.json(post);
    }
  });
});

app.delete("/v1/beers/:id", function (req, res) {
    Beer.findByIdAndRemove(req.params.id, req.body, function (err, post) {
       if (err) return next(err);
       res.json(post);
     });
});

app.listen(port, function() {
	console.log('App listen on: ' + port);
});
