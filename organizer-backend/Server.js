// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const dbconnect = require('./database/dbconnect');
// const app = express();
// require('dotenv').config();
// app.use(express.json());
// const organizerTempRoutes = require('./routes/organizerTempRoutes')
// const organizerAccountWiseRoutes=require('./routes/organizerAccountWiseRoutes')
// // app.use(cors());

// const corsOptions = {
//     //origin: "http://localhost:3000", // or the domain of your frontend
//     origin: "*",
//     methods: ["GET", "POST", "PATCH", "DELETE", "PUT"], // Allow the PATCH method
//     allowedHeaders: ["Content-Type", "Authorization"],
//   };
  
//   app.use(cors(corsOptions));
  


// // database connect
// dbconnect()

// // routes
// app.use("/workflow/organizers", organizerTempRoutes);
// app.use('/organizer-account-wise', organizerAccountWiseRoutes);

// const PORT = process.env.PORT || 7600;
// app.listen(PORT, ()=>{
//     console.log(`connection is live at port no. ${PORT}`);
// })




const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const dbconnect = require('./database/dbconnect');
const app = express();
require('dotenv').config();
app.use(express.json());
const organizerTempRoutes = require('./routes/organizerTempRoutes')
const organizerAccountWiseRoute = require("./routes/organizerAccountWiseRoutes");

app.use(cors());



// database connect
dbconnect()

// routes
app.use("/workflow/organizers", organizerTempRoutes);

app.use("/workflow/orgaccwise", organizerAccountWiseRoute);

const PORT = process.env.PORT || 7600;
app.listen(PORT, ()=>{
    console.log(`connection is live at port no. ${PORT}`);
})