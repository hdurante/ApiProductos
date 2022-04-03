const Television = require("./modelos/television");
const Zapato = require("./modelos/zapato");
const Laptop = require("./modelos/laptop");
const express = require("express");
const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors({
  origin: '*'
}));


let userMongo='UsrGilaSoftware';
let passwordMongo='qLSncVdg4CJfL57r';
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://"+userMongo+":"+passwordMongo+"@mongodev.pv3ra.mongodb.net/GilaSoftware?retryWrites=true&w=majority";


async function obtenerProductos() {
  try { 
    let lista = [];
    client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
    await client.connect();
    database = client.db("GilaSoftware");
    collection = database.collection("productos");    
    cursor =  collection.find({});//Para el ejercicio no le pongo un limite pero deberia paginarse
    await cursor.forEach(doc=> {
      lista.push(doc);    
    });
    return lista;
    
  } catch (e) {
    console.error(e);
  }  
  finally {
      //await client.close(); //Desconozco por que no hace lo que deberia no termine de investigar la razon
  }
}

async function guardarProducto(producto) {
  try {      
    client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });  
    await client.connect();
    database = client.db("GilaSoftware");
    collection = database.collection("productos");    
    result = await collection.insertOne(producto);
    console.log('Se almaceno el producto con el _id:'+result.insertedId);
  } catch (e) {
    console.error(e);
  }  
  finally {
      //await client.close(); //Desconozco por que no hace lo que deberia no termine de investigar la razon
  }
}


app.get('/status', function (req, res) {
  res.status(200).send('OK');  
});

app.get('/obtenerProductos', async function (req, res) {
  console.log('Se han solicitado los productos');
  lista = await obtenerProductos();
  res.status(200).send(lista);
  });

  app.post('/guardar', async function (req, res) {    
    
    if(req.body.hasOwnProperty('tipoPantalla')){
      console.log('Es una television');
      let producto = Object.assign(new Television, req.body);
      await guardarProducto(producto);
    }
    else if(req.body.hasOwnProperty('material')){
      console.log("Es un zapato");
      let producto = Object.assign(new Zapato, req.body);
      await guardarProducto(producto);
    }
    else if(req.body.hasOwnProperty('procesador')){
      console.log("Es una laptop");
      let producto = Object.assign(new Laptop, req.body);
      console.log(producto);
      await guardarProducto(producto);
    }

    res.send(req.body);
  });


app.listen(3000, () => {
 console.log("El servidor está inicializado en el puerto 3000");
});