const mongoose = require('mongoose');
const uri = "mongodb://sisfer:Bunker1234@cluster0-shard-00-00-fosgi.mongodb.net:27017,cluster0-shard-00-01-fosgi.mongodb.net:27017,cluster0-shard-00-02-fosgi.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true })
    .then(db => { console.log('Conexión exitosa con cluster MongoDB: Atlas') })
    .catch(err => { console.log(err) });

module.exports = mongoose;