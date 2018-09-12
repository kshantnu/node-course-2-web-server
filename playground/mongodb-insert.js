const {MongoClient, ObjectId} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to mongodb server');
    }
    console.log('mongo db connection successful');
    const db = client.db('TodoApp');
    db
        .collection('Todos')
        .insertOne({
            text: 'my name isshivi',
            wish: 'go to prague'
        }, (err, result) => {
            if (err) {
                return console.log('something went wrong');
            }
            console.log('record inserted', JSON.stringify(result.ops));
        })

    // client.close();
});