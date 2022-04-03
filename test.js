
function test_status() {
    var axios = require('axios');

    var config = {
      method: 'get',
      url: 'http://127.0.0.1:3000/status',
      headers: { }
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
    
}

function test_obtener_productos() {
    var axios = require('axios');

    var config = {
    method: 'get',
    url: 'http://127.0.0.1:3000/obtenerProductos',
    headers: { }
    };

    axios(config)
    .then(function (response) {
    console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
    console.log(error);
    });
}

function test_guardar_television() {
    var axios = require('axios');
    var data = JSON.stringify({
      "nombre": "X400S",
      "sku": "SKU00001",
      "marca": "Electrolux",
      "costo": 100.5,
      "tipoPantalla": "LED",
      "tamanoPantalla": "52"
    });
    
    var config = {
      method: 'post',
      url: 'http://127.0.0.1:3000/guardar',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
}


function test_guardar_zapato() {
    var axios = require('axios');
    var data = JSON.stringify({
      "nombre": "Botas",
      "sku": "SKU00002",
      "marca": "Rancho grande",
      "costo": 875.5,
      "material": "PIEL",
      "numero": "28.5"
    });
    
    var config = {
      method: 'post',
      url: 'http://127.0.0.1:3000/guardar',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
}


function test_guardar_laptop() {
    var axios = require('axios');
    var data = JSON.stringify({
      "nombre": "M15",
      "sku": "SKU00003",
      "marca": "ALIENWARE",
      "costo": 18750.5,
      "procesador": "AMD",
      "memoriaRam": "16"
    });
    
    var config = {
      method: 'post',
      url: 'http://127.0.0.1:3000/guardar',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
}

test_status();
//test_guardar_laptop();
//test_guardar_zapato();
//test_guardar_television();
test_obtener_productos();