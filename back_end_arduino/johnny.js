const { Board, Thermometer } = require("johnny-five");
const board = new Board();
const moment = require ('moment')
let express = require('express');
let app = express()
let server = require('http').Server(app)
let porta = 3001;
//let dadosArduino = [];
let dadosArduino;
let dataARD = {}
var datasUPD = []

app.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})

board.on("ready", () => {
    const thermometer = new Thermometer({
        controller: "LM35",
        pin: "A0",
        freq: 1000
    });
    thermometer.on("change", () => {
        const {celsius, fahrenheit, kelvin} = thermometer;
        console.log("Thermometer");
        console.log("  celsius      : ", celsius);
        console.log("  fahrenheit   : ", fahrenheit);
        console.log("  kelvin       : ", kelvin);
        console.log("--------------------------------------");
        //dadosArduino.push(`Temp= ${celsius},`);
        dadosArduino = celsius.toString()
        dataARD = {
            temp: celsius.toString() ,
            dataNow: moment().format(`DD-MM-YY - hh-mm-ss`).toString() ,
            //locations: ,
        }
        console.log(dataARD)
        console.log('')
        setTimeout(() => {
            console.clear()
        }, 6000);
    });
});

app.get('/', function(req,res){
    res.send('Hello World');
});

app.get('/temperatura', function(req,res){
    res.end(dadosArduino)
})
app.get('/temperatura2', function(req,res){
    res.send(dataARD)
})

server.listen(porta, () => console.log('escutando na porta: '+ porta));