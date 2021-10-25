const express = require('express');
const router = express.Router();
const names = require('../models/name_model');

router.get('/', async(req, res) => {
try{
const names = await names.find();
res.json(names);
console.log(names);
}catch(err){
res.send('Error'+ err);
}
     console.log('Get Request');
     res.send('Get Request');
})
 router.post('/', async(req,res)=>{
     const info = new names({
         name : req.body.name,
         place: req.body.place
     }) 
     try{
         const a1 = await info.save();
         res.json(a1);
         console.log('post route');
         console.log(a1);
         
     }catch(err){
         console.log('error@post')
     }
 })
module.exports = router;
