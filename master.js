const express= require('express')
const router = express.Router()
const book = require('./mstbook/book')

router.get('/:id',async(req,res)=>{
try{
    const book1=await book.findById(req.params.id)
    res.json(book1); 
}
catch(err){
    res.send('Error '+err);
}
})

router.patch('/:id',async(req,res)=>{
    try{
        const book1=await book.findById(req.params.id)
        book1.book_type = req.body.book_type
        const a1 = await book1.save()
        res.json(a1);
        
    }
    catch(err){
        res.send('Error'+err);
    }
    
    })

    router.delete('/:id',async(req,res)=>{
        try{
            const book1=await book.findById(req.params.id)
            const a1 = await book1.remove()
            res.json(a1);
            
        }
        catch(err){
            res.send('Error'+err);
        }
        
        })

router.get('/',async(req,res)=>{
    try{
        const book1=await book.find()
        res.json(book1);
        
    }
    catch(err){
        res.send('Error'+err);
    }
    
    })

router.post('/',async(req,res)=>{
    
        const book1=new book({
            book_name: req.body.book_name,
            book_type: req.body.book_type,
            sub: req.body.sub
        })
        
    try{
        const a1 = await book1.save();    
        res.json(a1);
    }
    catch(err){
        res.send('Error');
    }
    
    })
    

module.exports=router;
