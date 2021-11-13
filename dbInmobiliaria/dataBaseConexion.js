const mongoDb = require('mongodb');
const MongoClient = mongoDb.MongoClient;

const dbConn = 'mongodb://alphacode:alphacode@clusterinmobiliaria-shard-00-00.uglzq.mongodb.net:27017,clusterinmobiliaria-shard-00-01.uglzq.mongodb.net:27017,clusterinmobiliaria-shard-00-02.uglzq.mongodb.net:27017/test?replicaSet=atlas-91jo71-shard-0&ssl=true&authSource=admin';
const dbName = "InmobiliariaHC_DB";
const collectionName = "inmobiliaria";

function initialize(SuccessCallBack, failureCallBack){
    MongoClient.connect(dbConn, function(err, dbInstance){
        if(err){
            console.log('[MongoDb] Error'+err);

        }else{
            const dbObject = dbInstance.db(dbName);
            const dbCollection = dbObject.collection(collectionName);
            console.log('[MongoDb] Success');
            SuccessCallBack(dbCollection);
        }

    });
    server.get();


}