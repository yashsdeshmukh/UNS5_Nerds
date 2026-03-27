var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

 
var app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'web/views'));
app.use('/public', express.static(__dirname + '/web/public'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); 

// Deploy Smart Contract and place smart contract address here 
var ContractAddress = "0x2Dc5b7ca44A74dFd61B4B1E5Df7fD700f1C4f80d";

app.get('/', function (req, res) {
	res.render("index")
})

app.get('/AddUser', function (req, res) {
	var data = {ContractAddress:ContractAddress};
	res.render("AddUser",data);
})

app.get('/AddUserDL', function (req, res) {
	var data = {ContractAddress:ContractAddress};
	res.render("AddUserDL",data);
})

app.get('/ViewRequest', function (req, res) {
	var data = {ContractAddress:ContractAddress};
	res.render("ViewRequest",data)
})

app.post('/ViewRequestDetail', function (req, res) {
	RequestIndex = req.body.hdnRequestIndex;
	InstitutionName = req.body.hdnInstitutionName;
	var data = {ContractAddress:ContractAddress,RequestIndex:RequestIndex,InstitutionName:InstitutionName};
	res.render("ViewRequestDetail",data);
})

app.post('/ocr',function (req,res) {
	var axios = require("axios").default;

	var options = {
	  method: 'POST',
	  url: 'https://microsoft-computer-vision3.p.rapidapi.com/ocr',
	  params: {detectOrientation: 'true', language: 'unk'},
	  headers: {
		'content-type': 'application/json',
		'x-rapidapi-host': 'microsoft-computer-vision3.p.rapidapi.com',
		'x-rapidapi-key': '5c49a30488msh947ccba6bf262f6p158ef4jsnfef58b6ac300'
	  },
	  data: {
		url: 'https://store-images.s-microsoft.com/image/apps.54739.14266069062940839.0386a7c7-7a53-4e48-b184-3c1b8af04617.60917b6c-f77d-4aef-baf4-b8aa891c5889?mode=scale&q=90&h=720&w=1280'
	  }
	};
	
	axios.request(options).then(function (response) {
		console.log(response.data.regions[0].lines[0].words[0].text);
        console.log(response.data.regions[0].lines[1].words[0].text);
	}).catch(function (error) {
		console.error(error);
	});
}
)



app.get('/RequestAccess', function (req, res) {
	var data = {ContractAddress:ContractAddress};
	res.render("RequestAccess",data);
})

app.get('/ViewRequest_Org', function (req, res) {
	var data = {ContractAddress:ContractAddress};
	res.render("ViewRequest_Org",data);
})

app.post('/ViewRequestDetail_Org', function (req, res) {
	RequestIndex = req.body.hdnRequestIndex;
	InstitutionName = req.body.hdnInstitutionName;
	var data = {ContractAddress:ContractAddress,RequestIndex:RequestIndex,InstitutionName:InstitutionName};
	res.render("ViewRequestDetail_Org",data);
})

app.get('/Message', function (req, res) {
	var TransHash = req.query.TransHash;
	res.render("Message",{TransHash:TransHash})
})


var server = app.listen(8080, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})
