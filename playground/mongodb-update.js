const {MongoClient, ObjectId} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to mongodb server');
    }
    console.log('mongo db connection successful');
    const db = client.db('TodoApp');
    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectId("5b98010333db53da0b237dd6")
    },{
        $set: {
            text1: 'my name is ajay gupta'
        }
    },{
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(result);
    });

    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectId("5b98010333db53da0b237dd6")
    },{
        $unset: {
            text1: 'my name is ajay gupta'
        }
    },{
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(result);
    });

     client.close();
});