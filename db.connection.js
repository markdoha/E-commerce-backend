const mongoose= require ("mongoose");
const databaseUrl = "mongodb://localhost:27017/E-commerce";

const connection = () =>{
    return mongoose.connect(databaseUrl, {useNewUrlParser: true})
    .then(()=> {
        console.log("connected to data base");
    }).catch ((err)=>{
        console.log("data base error" + err);
    });

}
module.exports = connection;