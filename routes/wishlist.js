const express = require("express");
const router = express.Router();
const Wishlist = require("../models/wishlist");

// SHOW WISHLIST PAGE
router.get("/", async(req,res)=>{

    if(!req.user){
        req.flash("error","Please login first!");
        return res.redirect("/login");
    }

    let wishlist = await Wishlist.findOne({ user:req.user._id })
    .populate("listings");

    res.render("listings/wishlist",{wishlist});
});


// ❤️ TOGGLE WISHLIST
router.post("/toggle/:id", async(req,res)=>{

    if(!req.user){
        return res.json({login:true});
    }

    let wishlist = await Wishlist.findOne({ user:req.user._id });

    if(!wishlist){
        wishlist = new Wishlist({
            user:req.user._id,
            listings:[req.params.id]
        });
        await wishlist.save();
        return res.json({added:true});
    }

    let index = wishlist.listings.indexOf(req.params.id);

    if(index === -1){
        wishlist.listings.push(req.params.id);
        await wishlist.save();
        return res.json({added:true});
    } 
    else{
        wishlist.listings.splice(index,1);
        await wishlist.save();
        return res.json({added:false});
    }
});

module.exports = router;

