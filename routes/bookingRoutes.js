const express = require("express");
const router = express.Router();
const Booking = require("../models/BookingModel");

router.post("/create", async(req,res)=>{
   if(!req.user){
     return res.status(401).json({error:"Login required"});
   }

   await Booking.create({
   user: req.user._id,
   listing: req.body.listingId,
   startDate: new Date(req.body.startDate),
   endDate: new Date(req.body.endDate),
   paymentStatus: req.body.paymentStatus
});


   res.json({success:true});
});

router.get("/:id/cancel", async(req,res)=>{

   await Booking.findOneAndDelete({
      _id: req.params.id,
      user: req.user._id
   });

   req.flash("success","Booking cancelled");
   res.redirect("/profile");
});

module.exports = router;
