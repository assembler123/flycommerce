const User = require('../models/users');
module.exports = (app) => {
    app.post('/signup', async (req,res)=>{
        if(req.id!=''&&req.fName!=''&&req.lName!=''&&req.gst!=''&&req.state!=''&&req.pin!='',req.password!='')
        {
            console.log(req)
            const u1 = new User({
                id:req.body.id,
                fName:req.body.fName,
                lName:req.body.lName,
                gst:req.body.gst,
                state:req.body.state,
                pin:req.body.pin,
                password:req.body.password
            });
            try{
                const savedU1 = await u1.save();
                res.send("Done!!!");
            }
            catch(e){
                res.sendStatus(500);
                console.error(e);
                // res.send("Something went wrong!");
            }
        }
        else
        {
            res.sendStatus(400);
        }
    })
}