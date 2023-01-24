const mongoose = require('mongoose')
const mongoDb = 'mongodb://localhost:27017/prueba'


// const conn = () =>{
    
// }
mongoose.connect(mongoDb)
.then(() => {
    console.log('DATABASE CONNECTED')
}).catch((err) => {
    console.error(err)
});

//console.log(conn())
//module.exports = conn;