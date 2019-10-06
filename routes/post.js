const router =require("express").Router();

const mongoose = require("mongoose")
const Post= mongoose.model("user");

router.get("/", async (req, res) => {
    {
        try {
            const post = await Post.find({});
            res.send(post);
        }
        catch (err) {
            res.send("Error occured");
        }

    }

});
router.get("/:postID",async(req,res)=>{
    try{
        const post = await Post.findOne({_id:req.params.postID});
        res.send(post)

    }
    catch(err)
    {
        res.send("Error occured");
    }

});
router.put("/:postID",async(req,res)=>{
    try{
        const post=await Post.findByIdAndUpdate({
            _id:req.params.postID
        },req.body,{

            new:true
        });
        res.send(post)

    }
    catch(err){
            res.send(err);
    }
});
router.delete("/:postID",async(req,res)=>{

    try{
        const post=await Post.findByIdAndDelete({_id:req.params.postID});
        res.send("deleted")
    }
    catch{
            res.send(err);
    }
})
router.post("/", async (req, res) => {
    try {
        console.log(req.body);
        res.send(req.body);
        const user = new Post()
        user.name = req.body.name;
        user.age = req.body.age;
        user.city = req.body.city;
        await user.save();
        res.send(user);
    }
    catch{
        res.send("Error occured");
    }
    

});
module.exports =router;