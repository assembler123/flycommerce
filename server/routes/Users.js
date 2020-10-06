const User = require('../models/users');
const bcrypt =require('bcrypt');
const jwt = require('jsonwebtoken');
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
    app.post('/signup', async (req,res)=>{
        if(req.id!=''&&req.fName!=''&&req.lName!=''&&req.gst!=''&&req.state!=''&&req.pin!='',req.password!='')
        {
            const hashedPass = await bcrypt.hash(req.body.password,10);
            console.log(req)
            const u1 = new User({
                id:req.body.id,
                fName:req.body.fName,
                lName:req.body.lName,
                gst:req.body.gst,
                state:req.body.state,
                pin:req.body.pin,
                password:hashedPass
            });
            try{
                const savedU1 = await u1.save();
                res.send("Done!!!");
            }
            catch(e){
                res.sendStatus(400);
                console.error(e);
                // res.send("Something went wrong!");
            }
        }
        else
        {
            res.sendStatus(400);
        }
    }),
    app.post('/login',async (req,res)=>{
        if(req.body.id!=="" && req.body.password!=="")
        {
            try
            {
                const u1 = await User.findOne({id:req.body.id});
                if(u1){
                    if(await bcrypt.compare(req.body.password,u1.password))
                    {
                        jwt.sign({u1},'secretkey',(err,token)=>{
                            res.json({token});
                        })
                    }
                    
                    else{
                        res.status(401)
                        res.send({message:"Wrong Password"})
                    }
                }
                else{
                    res.status(404);
                    res.send({message:"No user found"});
                }
            }
            catch(e){
                res.sendStatus(500);

            }
        }
        else
        {
            res.send(400)
        }
    })
    app.post('/api/get/user',authorized,(req,res)=>{
        jwt.verify(req.token,'secretkey', (err,authData)=>{
            res.send({
                authData,
                products:0,
                profit:0,
                lastMonthProfit:0,
                monthsProfit:new Array(12).fill(0),
                traffic:0
            })
        })
    })

}