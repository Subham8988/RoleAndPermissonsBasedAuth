const mongoDb = require('mongoose');
const url ="mongodb+srv://subham:subham@subham.nxjxhfz.mongodb.net/?retryWrites=true&w=majority";
const connectionParams ={
    useNewUrlParser: true,
   useUnifiedTopology: true, 
}
mongoDb.set('strictQuery',true);
   const  route = mongoDb.connect(url,connectionParams, (err)=>{
    if(!err)
    {
        console.log("Db connected sucessfully");
    }
    else{
        console.log("Db not connected");
    }
});

module.exports= route;