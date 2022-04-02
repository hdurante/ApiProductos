const Television = require("./modelos/television");
const Zapato = require("./modelos/zapato");
const Laptop = require("./modelos/laptop");
const express = require("express");
const app = express();
app.use(express.json());


let userMongo='UsrGilaSoftware';
let passwordMongo='qLSncVdg4CJfL57r';
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://"+userMongo+":"+passwordMongo+"@mongodev.pv3ra.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function obtenerProductos() {
  try {
    await client.connect();
    const database = client.db("GilaSoftware");
    const collection = database.collection("productos");    
    const cursor =  collection.find({});
    await cursor.forEach(doc=>console.log(doc));    
  } catch (e) {
    console.error(e);
  }  
  finally {
    await client.close();
  }
}

async function guardarProducto(producto) {
  try {
    await client.connect();
    const database = client.db("GilaSoftware");
    const collection = database.collection("productos");    
    const result = await collection.insertOne(producto);
    console.log('Se almaceno el producto con el _id:'+result.insertedId);
  } catch (e) {
    console.error(e);
  }  
  finally {
    await client.close();
  }
}


app.get('/', function (req, res) {
  res.send('Saludos desde express');
});

app.get('/productos', function (req, res) {
  obtenerProductos()   
  res.send(req.body);
  });

  app.post('/guardar', function (req, res) {    
    
    if(req.body.hasOwnProperty('tipoPantalla')){
      console.log('Es una television');
      let producto = Object.assign(new Television, req.body);
      guardarProducto(producto);
    }
    else if(req.body.hasOwnProperty('material')){
      console.log("Es un zapato");
      let producto = Object.assign(new Zapato, req.body);
    }
    else if(req.body.hasOwnProperty('procesador')){
      console.log("Es una laptop");
      let producto = Object.assign(new Laptop, req.body);
    }

    res.send(req.body);
  });


app.listen(3000, () => {
 console.log("El servidor está inicializado en el puerto 3000");
});