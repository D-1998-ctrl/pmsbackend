
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const dbconnect = require('./Config/connectDb');
const app = express();
require('dotenv').config();

app.use(express.json());

app.use(cors());

// database connect
dbconnect()


///

const adminRoutes = require("./Routes/adminRoutes");
app.use("/admin", adminRoutes);


//! otp
const otpController = require("./Controller/otpController");
app.use("/", otpController);


  

const usersavedemail = require("./middlewares/usersavedemail");
app.use("/", usersavedemail);

//!  Routes
const passwordupdateemail = require("./middlewares/passwordupdatemail")
app.use("/", passwordupdateemail);

const clientsignupOTPmail = require("./middlewares/clientsignupOTPmail");
app.use("/", clientsignupOTPmail);

//! EmailTemplate Routes
const clientsavedemail = require("./middlewares/clientsavedEmail");
app.use("/", clientsavedemail);


//! EmailTemplate Routes
const teammembersavedemail = require("./middlewares/teamMembersendInviteEmail");
app.use("/", teammembersavedemail);

const emailsync = require("./middlewares/emailsync");
app.use("/", emailsync);

//! Common Routes
const userRoutes = require("./Routes/userRoute");
app.use("/common", userRoutes);

// Serve static files from the "middlewares/uploads" folder
app.use('/uploads', express.static('middlewares/uploads'));


app.use('/companylogo',express.static('middlewares/companylogo') )
//! firmsetting
const firmsetting = require("./Routes/firmsettingRoutes");
app.use("/", firmsetting);

const PORT = process.env.PORT || 8880;
app.listen(PORT, ()=>{
    console.log(`connection is live at port no. ${PORT}`);
})