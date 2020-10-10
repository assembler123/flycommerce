const Products = require('../models/products');
const jwt = require('jsonwebtoken');
const makeid = require('../uniqueid');
module.exports = (app) => {
    const authorized = (req,res,next) =>{
        const bearer = req.headers['authorization'];
        if(typeof bearer !== undefined && bearer)
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
    app.post('/product/add',authorized, async (req,res)=>{
        jwt.verify(req.token,'secretkey', async(err,authData)=>{
            if(err)
                res.sendStatus(403);
            else if (req.body.product!='')
            {
                const {product} = req.body;
                const {variant} = product;
                variant.map(e=>{
                    e.pid = makeid(8);
                })
                const obj = new Products({
                    id:makeid(8),
                    active:product.active,
                    sub:product.sub,
                    category:product.category,
                    variant
                })
                console.log(variant);
                console.log(obj)
                // const cat = new Category({id:makeid(6),display:req.body.category,sub:[]});
                try
                {
                    const p = await obj.save();
                    res.send("Done!!!");

                }catch(e){
                    console.log(e);
                    res.sendStatus(400);
                }
            }
            else
            {
                res.sendStatus(400)
            }
        })
    })
    app.get('/product/list',authorized,async (req,res)=>{
        jwt.verify(req.token,'secretkey', async(err,authData)=>{
            if(err)
                res.sendStatus(403);
            else
            {
                try{
                    const search = req.query.type==='category'?{category:req.query.category}:{sub:req.query.sub};
                    const products = await Products.find(search);
                    console.log(search)
                    res.send({products,num:products.length})
                }catch(e){
                    console.log(e);
                    res.sendStatus(400)
                }
            }
        })
    })
    app.get('/product/get',authorized,async (req,res)=>{
        jwt.verify(req.token,'secretkey', async(err,authData)=>{
            if(err)
                res.sendStatus(403);
            else
            {
                try{
                    const product = await Products.findOne({"variant.pid":req.query.pid});
                    // console.log(search)
                    res.send({product})
                }catch(e){
                    console.log(e);
                    res.sendStatus(400)
                }
            }
        })
    })
    

}