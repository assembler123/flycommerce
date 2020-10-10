const Category = require('../models/category');
const jwt = require('jsonwebtoken');
const makeid = require('../uniqueid');
module.exports = (app) => {
    const authorized = (req,res,next) =>{
        const bearer = req.headers['authorization'];
        if(typeof bearer !== undefined)
        {
            const token = bearer.split(' ');
            req.token = token[1];
            next();
        }
        else
        {
            res.sendStatus(403)
        }
    }
    app.post('/category/add',authorized, async (req,res)=>{
        jwt.verify(req.token,'secretkey', async(err,authData)=>{
            if(err)
                res.sendStatus(403);
            else if (req.body.category!='')
            {
                const cat = new Category({id:makeid(6),display:req.body.category,sub:[]});
                try
                {
                    const obj = await cat.save();
                    res.send("Done!!!");

                }catch(e){
                    res.sendStatus(400);
                }
            }
            else
            {
                res.sendStatus(400)
            }
        })
    })
    app.get('/category/list',authorized,async (req,res)=>{
        jwt.verify(req.token,'secretkey', async(err,authData)=>{
            if(err)
                res.sendStatus(403);
            else
            {
                const obj = req.query.sub?{_id:0,__v:0}:{_id:0,__v:0,sub:0}
                const categories = await Category.find({},obj);
                res.send({categories,num:categories.length})
            }
        })
    })
    app.post('/category/sub/add',authorized,(req,res)=>{
        jwt.verify(req.token,'secretkey', async(err,authData)=>{
            if(err)
                res.sendStatus(403);
            else if(req.body.cat_id !== '' && req.body.sub_name !== '')
            {
                try{
                    const cat = await Category.updateOne({id:req.body.cat_id},{$push:{ sub:{name:req.body.sub_name,id:makeid(6)}}})
                    res.send("Done!!!")
                }catch(e)
                {
                    console.log(e);
                    res.sendStatus(400);
                }
            }
            else
            {
                res.sendStatus(400)
            }
        })
    } )

}