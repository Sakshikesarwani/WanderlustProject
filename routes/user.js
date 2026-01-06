const express=require("express");
const router = express.Router();
const User=require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync");
const passport=require("passport");
const {saveRedirectUrl}=require("../middleware.js");

const userController=require("../controllers/users.js");
const Booking = require("../models/BookingModel.js");

router.route("/signup")
.get(userController.renderSignupForm)
.post(wrapAsync(userController.signup));

router.route("/login")
.get(userController.renderLoginForm)
.post(saveRedirectUrl,passport.authenticate("local",{failureRedirect:"/login",failureFlash:true,}),userController.login);

router.get("/logout",userController.logout);

router.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
  );
  
  router.get(
    "/auth/google/callback",
    passport.authenticate("google", { failureRedirect: "/login" }),
    (req, res) => {
      req.flash("success", "Welcome to Wanderlust via Google!");
      res.redirect("/listings");
    }
  );

  
router.get("/profile", async(req,res)=>{
   if(!req.isAuthenticated()){
      req.flash("error","Please login first");
      return res.redirect("/login");
   }

   const bookings = await Booking
      .find({ user: req.user._id })
      .populate("listing");

   res.render("listings/profile",{ bookings });

});
module.exports=router;