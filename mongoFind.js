const {MongoClient}=require('mongodb');
const {ObjectID}=require('mongodb');//you can get a new IDs

// var obj=new ObjectID();


MongoClient.connect('mongodb://localhost:27017/DoItApp',(err, db)=>{
  if(err){
    return console.log('Unable to connect to Mongo server');
  };
  console.log('Connected to MongoDB Server');

  db.collection('DoIts').find({hellYes:true}).toArray().then((docs)=>{
    console.log('DoIts');

    console.log(docs);
  },(err)=>{
    console.log('Unable to fetch DoIts');
  });

  // db.close();
});
