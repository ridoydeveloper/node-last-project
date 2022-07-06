const mongoose = require('mongoose');




const mongoDBConnect = async() => {


    try{


      await  mongoose.connect(process.env.MONGO_STING);

      console.log(`MongoDB server is ready`.bgBlue.black);

    } catch (err) {


        console.log(`${err}`.bgRed.black)
    }
}

//export connection

module.exports = mongoDBConnect;