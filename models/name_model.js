const mongoose = require('mongoose');

 const nameSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    place: {
        type: String,
        required: true
    },
   // role: {
   //     type: Boolean,
      //  required: true,
    //    default: true
   // }

 })
module.exports = mongoose.model('name', nameSchema);
//module.exports = nameSchema;
