const {MongoClient}=require('mongodb');
const {ObjectID}=require('mongodb');//you can get a new IDs

// var obj=new ObjectID();


MongoClient.connect('mongodb://localhost:27017/DoItApp',(err, db)=>{
  if(err){
    return console.log('Unable to connect to Mongo server');
  };
  console.log('Connected to MongoDB Server');

  // db.collection('DoIts').insertOne({
  //   text:'This is how we do it',
  //   hellYes: true
  // },(err,result)=>{
  //   if(err){
  //     return console.log('Unable to insert DOIT');
  //   };
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });


  db.collection('Users').insertOne({
    name:'Mike',
    age:30
  },(err,result)=>{
    if(err){
      return console.log('Unable to insert User');
    };

    console.log(JSON.stringify(result.ops, undefined, 2)); //result.ops is an array of all the docs that got inserted
  });

  db.close();
});
