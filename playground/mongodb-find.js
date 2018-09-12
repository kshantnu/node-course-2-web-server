const {MongoClient, ObjectId} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to mongodb server');
    }
    console.log('mongo db connection successful');
    const db = client.db('TodoApp');
    

    db
        .collection('Todos')
        .find({_id: new ObjectId("5b98001f9d8276da05dae8ba")})
        .toArray()
        .then((docs) => {
            console.log(JSON.stringify(docs,undefined,2));
        })
        .catch((errorMessage) => {
            console.log(`something went wrong ${errorMessage}`);
        });
   // client.close();
});