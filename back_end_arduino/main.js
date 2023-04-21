/*
//Responsavel por conectar ao arduino
const { SerialPort } = require("serialport");
const { ReadlineParser } = require("@serialport/parser-readline");
const { ReadyParser } = require('@serialport/parser-ready')
const arduino = new SerialPort({path:"COM4", baudRate: 9600 });
const parserLine = arduino.pipe(new ReadlineParser({ delimiter: '\r\n' }))
const parserRead = arduino.pipe(new ReadyParser({ delimiter: "READY" }));

//Funções para teste

arduino.write('Connected with Arduino')

const LigarLed = () => {
    arduino.write("1")
}

const DesligarLed = () => {
    arduino.write("0")
}

//código para test no arduino
/*
void setup() {
    pinMOde(13, OUTPUT);
    pinMode(12, OUTPUT);
    Serial.begin(9600);
}

void loop() {
    if (Serial.available() > 0) {
        switch (Serial.read()) {
            case '1':
                {
                    digitalWrite(13, HIGH);
                }
                break;
            case '0':
                {
                    digitalWrite(12, LOW);
                }
                break;
        }
    }
}


//Testes de comunicação de dados
parserRead.on("ready", () => {
    console.log('Sequence received');
});

parserLine.on("data", data => {
    console.log(data);
});

parserRead.on('data', console.log);
*/

const {SerialPort} = require('serialport');

let express = require('express');
let app = express()
let server = require('http').Server(app)
let porta = 3001;
let dadosArduino;

let BoundRate = 9600;

const Serial = new SerialPort({ path: '/dev/cu.usbserial-2210', baudRate: 9600 })

Serial.on('error', function(err){
    console.error('Erro : '+ err.message);
});

Serial.on('open', function(){
    console.log('Porta serial Disponivel');
});

Serial.on('data', function(data){
    console.log(data.toString('utf-8'));
    dadosArduino = data.toString('utf-8');
    //dadosArduino.push(data.toString('utf-8'))
});

app.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})

//Teste a realizar com novas Funções.
Serial.on('readable', function() {
    console.log('Data:', Serial.read().toString('utf-8'))
});

Serial.on('data', function(data) {
    console.log('2-Data:', data.toString('utf-8'))
})

//server.listen(porta, () => console.log('escutando na porta :'+ porta));

app.get('/', function(req,res){
    res.send('Hello World');
});

/*
app.get('/temperatura', function(req,res){
    //Serial.write('T');
    //res.writeHead(200,{'Content-Type':"text/json; charset=utf-8"});
    Serial.on('data', function(data){
        //res.json(data.toString());
        console.log(data.toString('utf-8'));
        res.json(data.toString())
    })
})*/

app.get('/temperatura', function(req,res){
    /*Serial.on('data', function(data){
        //Serial.emit('data', {data: data.toString('utf-8')})
        return res.end(data.toString("utf-8"))
    })*/
    res.end(dadosArduino)
})

server.listen(porta, () => console.log('escutando na porta: '+ porta));